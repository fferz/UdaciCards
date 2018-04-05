import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//redux
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'

//component
import DecksList from './components/DecksList'

export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View>
          <DecksList />
        </View>
      </Provider>
    );
  }
}


