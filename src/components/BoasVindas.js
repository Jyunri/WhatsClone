import React, { Component } from 'react';
import { StyleSheet, View, Text, Button, Image, ImageBackground } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default props => (
  <ImageBackground style={{ flex: 1 }} source={require('../imgs/bg.png')} >
    <View style={{ flex: 1, padding: 15 }}>
      <View style={ {flex: 2, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize:20, color: 'white' }}>Seja Bem Vindo</Text>
        <Image source={require('../imgs/logo.png')} />
      </View>
      <View style={{ flex: 1 }}>
        <Button color='white' title="Fazer login" onPress={() => Actions.signIn() } />
      </View>
    </View>
  </ImageBackground>
);