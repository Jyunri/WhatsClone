import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import Routes from './src/components/Routes';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './src/reducers';

export default class App extends Component {
  render() {
    return (
      <Provider store={createStore(reducers)} >
        <Routes />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
});
