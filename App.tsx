import React from 'react';
import { SafeAreaView, StyleSheet, View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Formulario from './src/components/Formulario';


const App = (): JSX.Element =>  {

  const ocultarTeclado = () => {
    console.log('ocultarTeclado')
    Keyboard.dismiss()
  }

  return (
    <TouchableWithoutFeedback onPress={ocultarTeclado}>
      <SafeAreaView style={styles.app}>
      
        <View style={styles.contenido}>
          <Formulario />
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
