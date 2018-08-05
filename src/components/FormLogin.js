import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Button, TouchableHighlight} from 'react-native';
import { Actions } from 'react-native-router-flux'

export default props =>(
	<View style={styles.mainContainer}>
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<Text style={{ fontSize: 25 }}>WhatsApp Clone</Text>
		</View>
		<View style={styles.loginContainer}>
			<TextInput style={{ fontSize: 20, height: 45 }} placeholder='email' />
			<TextInput style={{ fontSize: 20, height: 45 }} placeholder='senha' />
			<TouchableHighlight onPress={ () => Actions.signUp() } >
				<Text style={{ fontSize:20 }}>Ainda nao tem cadastro? Cadastre-se</Text>
			</TouchableHighlight>
		</View>
		<View style={styles.accessContainer}>
			<View backgroundColor='green'>
				<Button color='green' title='Acessar' onPress={ () => false } />
			</View>
		</View>
	</View>
);

const styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
		padding: 10
	},
	loginContainer: {
		flex: 2
	},
	accessContainer: {
		flex: 2
	}
});
