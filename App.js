import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//redux
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'

//component
import NewCard from './components/NewCard'

export default class App extends React.Component {
  render() {
      console.disableYellowBox = true;
    return (
      <Provider store={createStore(reducer)}>
        <View style={{ flex: 1}}>
          <NewCard />
        </View>
      </Provider>
    );
  }
}


