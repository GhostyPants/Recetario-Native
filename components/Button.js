import React from 'react'
import { TouchableNativeFeedback, StyleSheet, Text, View } from 'react-native'

import color from '../constants/constVariables'

const Button = (props) => {
    return (
        <TouchableNativeFeedback onPress={() => alert('Ok')}>
            <View style={styles.button}>
                <Text style={styles.text}>{props.title}</Text>
            </View>
        </TouchableNativeFeedback>
    )
}

const styles = StyleSheet.create({
    button: {
        flex: 0,
        backgroundColor: color.greenPrimary,
        height: 40,
        marginTop: 15,
        alignSelf: 'stretch',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30
    },
    text: {
        color: color.whiteBackground,
        fontSize: 18,
    },
})

export default Button