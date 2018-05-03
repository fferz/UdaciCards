import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import TextButton from './TextButton'
import { red, black, white, gray } from '../utils/colors'

class Deck extends Component {

    addCard = () => { }

    startQuiz = () => { }

    render(){
        return (
            <View style={styles.container}>
                <Text style={styles.deckName}>DeckName</Text>
                <Text style={styles.cardsCount}>cards count</Text>
                <TextButton style={{padding:10, margin:10, borderColor:black, borderWidth:2}} onPress={this.addCard}>Add Card</TextButton>
                <TextButton style={{padding:10, margin:10, backgroundColor:black, color: white}} onPress={this.startQuiz}>Start Quiz</TextButton>
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
    deckName:{
        fontSize: 45,
        color: black,
    },
    cardsCount:{
        fontSize: 30,
        color: gray,
        marginBottom:50,
    }
})
export default Deck

