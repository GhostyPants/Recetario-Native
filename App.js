import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import Color from './constants/constVariables'
import CrearReceta from './sceens/CrearReceta'

export default class App extends React.Component {

  state = {
    categorias: []
  }

  render() {
    return (
      <View style={styles.container}>
        <CrearReceta />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: 70,
    paddingLeft: 20,
    paddingRight: 20,
  },
});
