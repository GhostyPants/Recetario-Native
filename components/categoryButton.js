import React from 'react'
import { TouchableNativeFeedback, View, Text, StyleSheet } from 'react-native'

import color from '../constants/constVariables'

const CategoryButton = (props) => {
    const styles = StyleSheet.create({
        button: {
            flex: 0,
            backgroundColor: 'white',
            width: 70,
            height: 40,
            borderColor: color.greyBorder,
            borderWidth: 1,
            borderRadius: 5,
            justifyContent: 'center',
            alignItems: 'center',
        },
        text: {
            fontSize: 16,
            color: props.textColor,
        }
    })
    return (
        <TouchableNativeFeedback onPress={() => alert(`Category Button Pressed Named: ${props.title}`)}>
            <View style={styles.button}>
                <Text style={styles.text}>{props.title}</Text>
            </View>
        </TouchableNativeFeedback>
    )
}

export default CategoryButton