import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { fetchCardsResult } from '../utils/api'
import { connect } from 'react-redux'
import { receiveDesks } from '../actions'

class DecksList extends Component {

    componentDidMount(){
        fetchCardsResult()
            .then((desks) => dispatch(receiveDesks(desks)))   
    }

    render(){
        return (
            <View>
                <Text>hola!</Text>
            </View>
        )
    }
}

function mapStateToProps (state){
    return state
}

export default connect(mapStateToProps)(DecksList)