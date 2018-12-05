import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import RecetaCard from '../components/RecetaCard'
import { Btn as Button } from '../components/Button'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <RecetaCard />
        <Button title='add recipe'/>
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
    marginTop: 24,
    paddingLeft: 20,
    paddingRight: 20,
  },
});
