import React from 'react'
import { StyleSheet } from 'react-native'

const InputContainer = () => {
    return (
        <View style={styles.inputContainer}>
            <Text>Nombre de la Receta</Text>
            <TextInput placeholder='Ingrese el nombre de la receta'style={styles.input}/>
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 0,
        alignSelf: 'stretch',
        marginBottom: 20,
      },
      input: {
        height: 40,
        borderColor: color.greyBorder,
        borderWidth: 1,
        marginTop: 5,
        paddingLeft: 10,
        borderRadius: 5,
      },
})

export default InputContainer