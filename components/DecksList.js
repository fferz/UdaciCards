import React, { Component } from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import { fetchCardsResult } from '../utils/api'
import { connect } from 'react-redux'
import { receiveDecks } from '../actions'
import { black, gray } from '../utils/colors'
import { AppLoading } from 'expo'

const dummyData = {
    React: {
        title: 'React',
        questions: [
        {
            question: 'What is React?',
            answer: 'A library for managing user interfaces'
        },
        {
            question: 'Where do you make Ajax requests in React?',
            answer: 'The componentDidMount lifecycle event'
        }
        ]
    },
    JavaScript: {
        title: 'JavaScript',
        questions: [
        {
            question: 'What is a closure?',
            answer: 'The combination of a function and the lexical environment within which that function was declared.'
        }
        ]
    }

}

class DecksList extends Component {

    state = {
        ready: false,
    }

    componentDidMount(){
        console.log('entro al componentDidMount')
        const { dispatch } = this.props
        fetchCardsResult()
            .then( (decks) => dispatch(receiveDecks(decks)) )
            .then( () => this.setState(() => ({ready: true}) ) )
            .catch((e) => {
                console.log('fetch error:', e.message) })
    }

    renderItem = ({ item }) => {
        let itemObjToArr = Object.values(item)
        return <View>
                    <Text>{itemObjToArr}</Text>
                    
                </View>
    }

    render(){
        console.log('this.props', this.props)
        const { decks } = this.props
        const { ready } = this.state

        if (ready === false){
            console.log('ready = false')
            return <AppLoading />
        }

        if (ready === true){
            const prueba = Object.entries(decks)
        }
        return(
            <View style={styles.container}>
                <View style={styles.line} />
                {Object.keys(dummyData).map((key) => {
                    const { title, questions } = dummyData[key]
                    return (
                        /*TODO: FlatList */
                        <View key={key} style={styles.deckContainer}>
                                <Text style={styles.deckName}>{title}</Text>
                                <Text style={styles.cardsCount}>{questions.length} cards</Text>
                                <View style={styles.line} />
                        </View>
                    )
        
                })}
            </View>
        )
        
        
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',     
        borderBottomColor: black,
        borderBottomWidth: 1,
        marginLeft: 30,
        marginRight: 30,
    },
    deckContainer:{
        marginTop: 30,
    },
    deckName:{
        fontSize: 30,
        color: black,
        alignSelf: 'center',
    },
    cardsCount:{
        fontSize: 20,
        color: gray,
        marginBottom:50,
        alignSelf: 'center',
    },
    line:{
        borderBottomColor: black,
        borderBottomWidth: StyleSheet.hairlineWidth,
        alignSelf: 'stretch'
    }
})

function mapStateToProps (state){
    return state
}

export default connect(mapStateToProps)(DecksList)