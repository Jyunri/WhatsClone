import React, { Component } from 'react';
import {StyleSheet, Text, View, TextInput, Button, TouchableHighlight, ImageBackground, ActivityIndicator } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { modificaEmail, modificaSenha, autenticarUsuario } from '../actions/AutenticacaoAction';

const bgImage = require('../imgs/bg.png');

class formLogin extends Component {	

	_autenticarUsuario() {
		const { email, senha } = this.props;
		this.props.autenticarUsuario({ email, senha });
	}

	renderBtnAcessar() {
		if(this.props.loadingLogin) {
			return (
				<ActivityIndicator size='large' />
			);
		}
		return (
			<Button color='white' title='Acessar' onPress={() => this._autenticarUsuario() } />
		);
	}

	render() {
		return (
			<ImageBackground style={{ flex: 1 }} source={bgImage} >
				<View style={styles.mainContainer}>
					<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
						<Text style={{ fontSize: 25 }}>WhatsApp Clone</Text>
					</View>
					<View style={styles.loginContainer}>
						<TextInput
							value={this.props.email}
							style={{ fontSize: 20, height: 45 }}
							placeholder='email'
							onChangeText={texto => this.props.modificaEmail(texto)}
							placeholderTextColor='white'
							autoCapitalize = 'none'
						/>
						<TextInput
							secureTextEntry
							value={this.props.senha}
							style={{ fontSize: 20, height: 45 }}
							placeholder='senha'
							onChangeText={texto => this.props.modificaSenha(texto)}
							placeholderTextColor='white'
						/>
						<Text style={{ color: 'red', fontSize: 18 }}>{this.props.erroLogin}</Text>
						<TouchableHighlight onPress={() => Actions.signUp()} >
							<Text style={{ fontSize: 20, marginTop: 30, color: 'lightgray' }}>Ainda nao tem cadastro? Cadastre-se</Text>
						</TouchableHighlight>
					</View>
					<View style={styles.accessContainer}>
						<View backgroundColor='green'>
							{ this.renderBtnAcessar() }
						</View>
					</View>
				</View>
			</ImageBackground>
		);
	}
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
			senha: state.AutenticacaoReducer.senha,
			erroLogin: state.AutenticacaoReducer.erroLogin,
			loadingLogin: state.AutenticacaoReducer.loadingLogin,
		}
	);
};
export default connect(mapStateToProps, { modificaEmail, modificaSenha, autenticarUsuario })(formLogin);
