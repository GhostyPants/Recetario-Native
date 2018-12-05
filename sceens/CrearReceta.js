import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'

import Color from '../constants/constVariables'
import CategoryButton from '../components/categoryButton'
import Button from '../components/Button'

class CrearReceta extends React.Component {

    state = {
        categorias: [],
        categoriaSeleccionada: ''
    }

    render() {
        return(
            <React.Fragment>
                <View style={styles.categoriesContainer}>
                    <Text style={styles.categoriesTitle}>Categorias</Text>
                    <View>
                        <FlatList renderItem={({item}) => <CategoryButton title={item.name} textColor={item.textColor} />} data={this.state.categorias} keyExtractor={(item) => item.name}/>
                    </View>
                </View>
                <Button title='Crear Receta'/>
            </React.Fragment>
        )
    }
}

const styles = StyleSheet.create({
    categoriesContainer: {
        flex: 1,
        alignSelf: 'stretch'
    },
    categoriesTitle: {
        fontSize: 16,
        color: Color.blackText
    }
})

export default CrearReceta