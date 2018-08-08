import React from 'react';
import {StyleSheet, Text, View, TextInput, Button, TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { modificaEmail, modificaSenha } from '../actions/AutenticacaoAction';

const formLogin = props =>{
	console.log(props);
	return (
		<View style={styles.mainContainer}>
			<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
				<Text style={{ fontSize: 25 }}>WhatsApp Clone</Text>
			</View>
			<View style={styles.loginContainer}>
				<TextInput value={props.email} style={{ fontSize: 20, height: 45 }} placeholder='email' onChangeText={texto => props.modificaEmail(texto)} />
				<TextInput value={props.senha} style={{ fontSize: 20, height: 45 }} placeholder='senha' onChangeText={texto => props.modificaSenha(texto)}  />
				<TouchableHighlight onPress={() => Actions.signUp()} >
					<Text style={{ fontSize: 20 }}>Ainda nao tem cadastro? Cadastre-se</Text>
				</TouchableHighlight>
			</View>
			<View style={styles.accessContainer}>
				<View backgroundColor='green'>
					<Button color='white' title='Acessar' onPress={() => false} />
				</View>
			</View>
		</View>
	);
};

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

const mapStateToProps = state => {
	console.log(state);
	return (
		{
			email: state.AutenticacaoReducer.email,
			senha: state.AutenticacaoReducer.senha
		}
	);
}
export default connect(mapStateToProps, { modificaEmail, modificaSenha })(formLogin);
