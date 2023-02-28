import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import { Resultado } from '../types'

type Props = {
    resultado: Resultado
}

const Clima = ({resultado}: Props) => {

    const { name, main, weather } = resultado
    
    if( !name ) return null

    const kelvin:number = 273.15

    return (
        <View style={styles.clima}>
            <Text style={[styles.texto, styles.actual]}>{Math.ceil(main.temp - kelvin)}
                <Text style={styles.temperatura}>&#x2103;</Text>
                <Image style={{width:66, height:58}} 
                    source={{uri: `https://openweathermap.org/img/w/${weather[0].icon}.png`}}
                />
            </Text>
            <View style={styles.temperaturas}>
                <Text style={styles.texto}> Min {""}
                    <Text style={styles.temperatura}>{Math.ceil(main.temp_min - kelvin)}&#x2103;</Text>
                </Text>
                <Text style={styles.texto}> Max {""}
                    <Text style={styles.temperatura}>{Math.ceil(main.temp_max - kelvin)}&#x2103;</Text>
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    clima: {
        marginBottom: 20,
    },
    texto: {
        color: '#FFF',
        fontSize: 20,
        textAlign: 'center',
        marginRight: 20
    },
    actual: {
        fontSize: 80,
        marginRight: 0,
        fontWeight: 'bold'
    },
    temperatura: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    temperaturas: {
        flexDirection: 'row',
        justifyContent: 'center'
    }
})

export default Clima
