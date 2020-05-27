import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

const style = StyleSheet.create({
    verticalContainer: {
        flex: 1
    },
    textContainer: {
        flex: 1,
        backgroundColor: '#0a75b6',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: '#fff',
        fontSize: 30
    },
    infoContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    info: {
        fontSize: 30
    }
})

export default class extends Component {
    render() {
        console.log(this.props)
        return (
            <View style={{
                flex: 1,
                justifyContent: 'center'
            }}>
                <View style={{
                    flex: 1,
                    backgroundColor: '#0a75b6',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Text style={{
                        fontSize: 34,
                        color: '#fff'
                    }}>Mi turno</Text>
                </View>
                <View style={{
                    flex: 2,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Text style={{
                        fontSize: 80
                    }}>{this.props.route.params.turnNumber}</Text>
                </View>
                <View style={{
                    flex: 2,
                    flexDirection: 'row'
                }}>
                    <View style={{...style.verticalContainer, 
                        borderRightColor: '#92aab0',
                        borderRightWidth: 1
                    }}>
                        <View style={style.textContainer}>
                            <Text style={style.text}>Turno</Text>
                            <Text style={style.text}>Actual</Text>
                        </View>
                        <View style={style.infoContainer}>
                            {/* Pendiente cambiar por turno real */}
                            <Text style={style.info}>A-1</Text>
                        </View>
                    </View>
                    <View style={style.verticalContainer}>
                        <View style={style.textContainer}>
                            <Text style={style.text}>Tiempo</Text>
                            <Text style={style.text}>Estimado</Text>
                        </View>
                        <View style={style.infoContainer}>
                            {/* Cuando haya tiempo consultar modulo al que pertenece y hacer el mismo calculo que en la versión web */}
                            <Text style={style.info}>1 Minuto</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}
