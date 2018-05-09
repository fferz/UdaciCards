import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TabNavigator } from 'react-navigation'
import { red, black, white, gray, yellow, blue } from './utils/colors'

//redux
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'

//component
import NewDeck from './components/NewDeck'
import DecksList from './components/DecksList'

const Tabs = TabNavigator({
  Decks: {
    screen: DecksList,
    navigationOptions: {
      tabBarLabel: 'DECKS',
    },
  },
  NewDeck:{
    screen: NewDeck,
    navigationOptions: {
      tabBarLabel: 'NEW DECK'
    },
  },
},{
  navigationOptions: {
    header: null,
  },
  tabBarOptions: {
    activeTintColor: red,
    inactiveTintColor: gray,
     style: {
       height: 56,
       backgroundColor: white,
       shadowColor: yellow,
       shadowOffset: {
         width: 0,
         height: 3
       },
       shadowRadius: 6,
       shadowOpacity: 1
      },
  },
})

export default class App extends React.Component {
  render() {
      console.disableYellowBox = true;
    return (
      <Provider store={createStore(reducer)}>
        <View style={{ flex: 1}}>
          <Tabs />
        </View>
      </Provider>
    );
  }
}


