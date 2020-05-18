import React, { Component } from 'react'
import {TouchableOpacity, Text, View, StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    buttonText: {
        color: '#fff',
        fontSize: 20,
        textAlign: 'center'
    }
})

export default class extends Component {
    render() {
        return(
            <View 
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Text style={{
                    padding: 30,
                    textAlign: 'center'
                }}>
                    Acerquese a un monitor de turnos y seleccione 'Escanear turno QR'
                </Text>
                <TouchableOpacity
                    style={{
                        backgroundColor: '#0a75b6',
                        borderRadius: 30,
                        padding: 10,
                        width: 180
                    }}
                    onPress = {() => {
                        this.props.navigation.navigate('Scan')
                    }}
                >
                    <Text style={styles.buttonText}>ESCANEAR</Text>
                    <Text style={styles.buttonText}>AHORA</Text>
                </TouchableOpacity>
            </View>
        )
    }
}