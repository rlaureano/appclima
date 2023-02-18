import React, { useState } from 'react'
import { TextInput, View, StyleSheet, TouchableWithoutFeedback, Text, Animated } from 'react-native'
import { Picker } from '@react-native-picker/picker'

const Formulario = () => {

    const [ animacionBoton, setAnimacionBoton ] = useState( new Animated.Value(1) )

    const animacionEntrada = () => {
        Animated.spring( animacionBoton, {
            toValue: .9,
            useNativeDriver: false
        }).start()
    }

    const animacionSalida = () => {
        console.log('sale animacion')
    }

    const estiloAnimacion = {
        transform: [{scale: animacionBoton}]
    }

    return (
        <>
            <View>
                <View>
                    <TextInput style={styles.input} placeholder='Ciudad' placeholderTextColor="#666"/>
                </View>
                <View>
                    <Picker itemStyle={{height: 120, color: "#FFF"}}>
                        <Picker.Item label="- Seleccione una opcion" value=""/>
                        <Picker.Item label="Estados Unidos" value="US"/>
                        <Picker.Item label="México" value="MX"/>
                        <Picker.Item label="Argentina" value="AR"/>
                        <Picker.Item label="Colombia" value="CO"/>
                        <Picker.Item label="Costa Rica" value="CR"/>
                        <Picker.Item label="España" value="ES"/>
                        <Picker.Item label="Perú" value="PE"/>
                    </Picker>
                </View>
                <TouchableWithoutFeedback
                    onPressIn={animacionEntrada}
                    onPressOut={animacionSalida}
                >
                    <Animated.View style={[styles.btnBuscar, estiloAnimacion]}>
                        <Text style={styles.textoBuscar}>Buscar clima</Text>
                    </Animated.View>
                </TouchableWithoutFeedback>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    input: {
        padding: 10,
        height: 50,
        backgroundColor: '#FFFFFF',
        fontSize: 20,
        marginBottom: 20,
        textAlign: 'center'
    },
    btnBuscar: {
        marginTop: 50,
        backgroundColor: '#000',
        padding: 10,
        justifyContent: 'center'
    },
    textoBuscar: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        textTransform: 'uppercase', 
        textAlign: 'center',
        fontSize: 10
    }
})

export default Formulario