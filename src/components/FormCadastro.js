import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Button} from 'react-native';
import { Actions } from 'react-native-router-flux'

export default props =>(
  <View style={styles.mainContainer}>
    <View style={styles.signupContainer}>
      <TextInput style={{ fontSize: 20, height: 45 }} placeholder='Nome' />
      <TextInput style={{ fontSize: 20, height: 45 }} placeholder='Email' />
      <TextInput style={{ fontSize: 20, height: 45 }} placeholder='senha' />
    </View>
    <View style={styles.accessContainer}>
      <View backgroundColor='green'>
        <Button color='green' title='Cadastrar' onPress={ () => Actions.signIn() } />
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 10
  },
  signupContainer: {
    flex: 4,
    justifyContent: 'center'
  },
  accessContainer: {
    flex: 1
  }
});