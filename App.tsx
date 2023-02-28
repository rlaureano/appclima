import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, View, TouchableWithoutFeedback, 
  Keyboard, Alert } from 'react-native';
import Clima from './src/components/Clima';
import Formulario from './src/components/Formulario';
import { Busqueda, Resultado } from './src/types';

const App = (): JSX.Element =>  {

  const [ busqueda, setBusqueda ] = useState<Busqueda>({ciudad:'', pais:''})
  const [ consultar, setConsultar ] = useState(false)
  const [ resultado, setResultado ] = useState<Resultado>({} as Resultado)
  const [ backgroundColor, setBackgroundColor ] = useState("rgb(71, 149, 212)")

  useEffect( () => {
    if( consultar ) {

    }
  },[consultar])

  const ocultarTeclado = () => {
    Keyboard.dismiss()
  }

  const consultarClima = async () => {

    if( busqueda.pais.trim() === '' || busqueda.ciudad.trim() === '' )
      return mostrarAlerta('Agrega una ciudad y un país')

    const { ciudad, pais } = busqueda
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=d66317916efba84a22a6fd5791744f1f`

    try { 
      const respuesta = await fetch(url)
      const resultado = await respuesta.json()

      if(! resultado.main ) mostrarAlerta(resultado.message)
      setResultado(resultado)

      const kelvin: number = 273.15
      const { main } = resultado
      const actual = main.temp - kelvin
      console.log(actual)
      if( actual < 10) {
        setBackgroundColor("rgb(105, 108, 149)")
      } else if( actual > 10 && actual < 25) {
        setBackgroundColor("rgb(71, 149, 212)")
      } else {
        setBackgroundColor("rgb(178, 28, 61)")
      }

    } catch (e) {
      console.log(e)
      mostrarAlerta('No hay resultados')
    }

    setConsultar(true)
  }

  const mostrarAlerta = (text: string) => {
    Alert.alert(
      'Error',
      text,
      [{'text': 'Entendido'}]
    )
  }
  const bgColorApp = {
    backgroundColor
  }

  return (
    <TouchableWithoutFeedback onPress={ocultarTeclado}>
      <SafeAreaView style={[styles.app, bgColorApp]}>
      
        <View style={styles.contenido}>
          <Clima resultado={resultado}/>
          <Formulario busqueda={busqueda} setBusqueda={setBusqueda} 
            consultarClima={consultarClima}/>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    justifyContent: 'center'
  },
  contenido: {
    marginHorizontal: '2.5%'
  }
});


export default App;
