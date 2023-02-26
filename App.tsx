import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, View, TouchableWithoutFeedback, 
  Keyboard, Alert } from 'react-native';
import Formulario from './src/components/Formulario';
import { Busqueda } from './src/types';

const App = (): JSX.Element =>  {

  const [ busqueda, setBusqueda ] = useState<Busqueda>({ciudad:'', pais:''})
  const [ consultar, setConsultar ] = useState(false)
  const [ resultado, setResultado ] = useState({})

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
      setResultado(resultado)
    } catch (e) {
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

  return (
    <TouchableWithoutFeedback onPress={ocultarTeclado}>
      <SafeAreaView style={styles.app}>
      
        <View style={styles.contenido}>
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
    backgroundColor: 'rgb(71,149,212)',
    justifyContent: 'center'
  },
  contenido: {
    marginHorizontal: '2.5%'
  }
});


export default App;
