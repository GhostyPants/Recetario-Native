import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import color from './constants/constVariables'
import CategoryButton from './components/categoryButton'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
<FlatList renderItem={({item}) => <CategoryButton title={item.name} textColor={item.textColor} />} data={categories} keyExtractor={(item) => item.name}/>
      </View>
    );
  }
}

const categories = [
  {name: 'Postre', textColor: color.blueCalories},
  {name: 'Carne', textColor: color.redFire},
  {name: 'Ensalada', textColor: color.greenPrimary},
  {name: 'Otros', textColor: color.yellowTime}
]

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
