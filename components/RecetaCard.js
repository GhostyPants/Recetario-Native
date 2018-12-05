import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import { Colors as color} from '../constants/constVariables'

class RecetaCard extends React.Component {
    render() {
        return (
            <View style={[styles.cardContainer, styles.fondoCard]}>
                <Text style={[styles.nombre, styles.textColor]}>Pan con queso</Text>
                <View style={styles.ingredientesCostos}>
                    <Text style={[styles.textColor, {marginRight: 20}]}>Ingredientes: 1</Text>
                    <Text style={styles.textColor}>$150</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    cardContainer: {
        flex: 0,
        alignSelf: 'stretch',
        // borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5,
        marginLeft: 1,
        marginRight: 1,
        height: 60,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    nombre: {
        textAlign: 'center',
        fontSize: 18
    },
    ingredientesCostos: {
        fontSize: 12,
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'center',
        width: '70%',
        // marginLeft: 20,
        paddingTop: 10,
    },
    textColor: {
        color: color.whiteBackground
    },
    fondoCard: {
        backgroundColor: color.yellowTime
    }
})

export default RecetaCard