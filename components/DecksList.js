import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { fetchCardsResult } from '../utils/api'
import { connect } from 'react-redux'
import { receiveDecks } from '../actions'

class DecksList extends Component {

    componentDidMount(){
        console.log('entro al componentDidMount')
        const { dispatch } = this.props
        fetchCardsResult()
            .then((decks) => dispatch(receiveDecks(decks)))
    }

    render(){
        console.log('this.props', this.props)
        return (
            <View style={{flex:1, justifyContent:'space-around' ,alignItems:'center'}}>
                <Text>{this.props.dummyData.react}</Text>
                <Text>hola, esto es DeckList</Text>
                <Text>hola, esto es DeckList</Text>
                <Text>hola, esto es DeckList</Text>
            </View>
        )
    }
}

function mapStateToProps (state){
    return state
}

export default connect(mapStateToProps)(DecksList)