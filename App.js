import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

import RecetaCard from './components/RecetaCard'
import { Btn as Button } from './components/Button'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text>Nombre de la Receta</Text>
          <TextInput placeholder='Ingrese el nombre de la receta'style={{borderColor: 'black', borderWidth: 1, alignSelf: 'stretch'}}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
    marginTop: 70,
    paddingLeft: 20,
    paddingRight: 20,
  },
  inputContainer: {
    flex: 0,
    alignSelf: 'stretch',
  }
});
