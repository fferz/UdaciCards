import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//redux
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'

//component
import NewDeck from './components/NewDeck'

export default class App extends React.Component {
  render() {
      console.disableYellowBox = true;
    return (
      <Provider store={createStore(reducer)}>
        <View style={{ flex: 1}}>
          <NewDeck />
        </View>
      </Provider>
    );
  }
}


