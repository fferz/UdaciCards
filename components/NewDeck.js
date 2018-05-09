import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput  } from 'react-native'
import TextButton from './TextButton'
import { red, black, white, gray } from '../utils/colors'
import { connect } from 'react-redux'
import { addDeck } from '../actions'
import { submitDeck } from '../utils/api'

class NewDeck extends Component {

    state = {
        text:'Deck Title'
    }

    saveNewDeck = () => {
        const deck = this.state

        //update redux
        this.props.dispatch(addDeck({deck}))

        //update DB
        submitDeck({deck})
     }

    render(){
        return (
            <View style={styles.container}>
                <Text style={styles.deckName}>What is the title of your new deck?</Text>
                <TextInput
                    style={styles.inputText}
                    onChangeText={(text) => this.setState({text})}
                    value={this.state.text}
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

function mapStateToProps (state){
    return state
}

export default connect(mapStateToProps)(NewDeck)