import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { red, black } from '../utils/colors'

class Deck extends Component {

    render(){
        return (
            <View style={styles.container}>
                <Text>hola</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 30,
        marginRight: 30,
    },
    box: {
        height: 50,
        width: 50,
        backgroundColor: '#e76e63',
        margin: 10,
      }
})
export default Deck

