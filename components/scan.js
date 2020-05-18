import React, { Component } from 'react'
import QRCodeScanner from 'react-native-qrcode-scanner'
import { Alert } from "react-native";

export default class extends Component {
    request = (args = {}) => {
        if(!args.url || !args.method || !args.callback || !args.body) {
            console.error('Parametros incompletos en petición')
            return       
        }

        fetch(args.url, {
                method: args.method,
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(args.body)
        })
        .then((promiseResponse) => promiseResponse.json())
        .then(args.callback)
        .catch((error) => {
            console.log('Error', error)
            this.showAlert({text: 'No se recibió información del servidor'})
        })
    }
    showAlert = (args = {}) => {
        const fn = args.fn ? {onPress: args.fn} : {}
        Alert.alert(
            args.title || '',
            args.text  || '',
            [{...fn, text: 'OK'}]
        )
    }
    onSuccess = (e) => {
        const qrData = e.data
        let turnInfo = null
        try {
            turnInfo = JSON.parse(qrData)
        }
        catch(error) {
            console.log('Error', error)
            this.showAlert({
                text : 'El código QR escaneado no pertenece al sistema de turnos',
                fn   : () => this.props.navigation.navigate('Home')
            })
        }

        if(!turnInfo) {
            return
        }

        if(turnInfo.key !== '8cde8ee72f76029e58b2b89c8789842d') {
            this.showAlert({
                title : 'Error',
                text  : 'No intente falsificar el turno',
                fn    : () => {
                    this.props.navigation.navigate('Home')
                }
            })
            return
        }
        this.request({
            url      : 'http://localhost:3000/api/validateTurn',
            method   : 'POST',
            body     : {
                cc    : turnInfo.cc,
                turn  : turnInfo.turn
            },
            callback : (response) => {
                if(!response.state) {
                    this.showAlert({
                        title : 'No se pudo validar la autenticidad del turno escaneado',
                        text  : response.text
                    })
                    return
                }
                if(!response.text)
                this.request({
                    url    : 'http://localhost:3000/api/api/turn',
                    method : 'GET',
                    body   : {turn: turnInfo.turn},
                    callback : (response) => {
                        if(!response.state) {
                            this.showAlert({
                                title: 'No se pudo obtener información del turno escaneado',
                                text: response.text
                            })
                            return
                        }
                        console.log('INFORMACIÓN DEL TURNO', response.text)
                    }
                })
            }
        })
    }
    render() {
        return (
            <QRCodeScanner
                showMarker = {true}
                onRead     = {this.onSuccess}
            />
        )
    }
}
