import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import Routes from './src/components/Routes';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './src/reducers';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk'

export default class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: "AIzaSyCDtf0mCowYcSuBUND4rz8EAspv9Sj2z4M",
      authDomain: "fir-test-c5981.firebaseapp.com",
      databaseURL: "https://fir-test-c5981.firebaseio.com",
      projectId: "fir-test-c5981",
      storageBucket: "fir-test-c5981.appspot.com",
      messagingSenderId: "58235490249"
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))} >
        <Routes />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
});
