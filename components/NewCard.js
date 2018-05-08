import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput  } from 'react-native'
import TextButton from './TextButton'
import { red, black, white, gray } from '../utils/colors'

class NewCard extends Component {

    state = {
        question:'a question',
        answer:'an answer',
    }

    saveNewDeck = () => { }

    render(){
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.inputText}
                    onChangeText={(question) => this.setState({question})}
                    value={this.state.question}
                />
                <TextInput
                    style={styles.inputText}
                    onChangeText={(answer) => this.setState({answer})}
                    value={this.state.answer}
                />
                <TextButton style={styles.submitButton} onPress={this.saveNewDeck}>Submit</TextButton>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        marginLeft: 30,
        marginRight: 30,
    },
    deckName:{
        fontSize: 30,
        color: black,
        textAlign: 'center',
        paddingBottom: 25,
    },
    inputText:{
        padding: 5, 
        borderRadius: 7, 
        height: 40, 
        borderColor: black, 
        borderWidth: 1, 
        color: gray,
        marginBottom: 25,
    },
    submitButton:{
        alignSelf:'center', 
        padding:10, margin:10, 
        backgroundColor:black, 
        color: white
    }
})

export default NewCard