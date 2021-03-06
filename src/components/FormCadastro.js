import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Button, ImageBackground, Text, ActivityIndicator } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import {
  modificaEmail,
  modificaSenha,
  modificaNome,
  cadastraUsuario
} from '../actions/AutenticacaoAction';

class FormCadastro extends Component {
  _cadastraUsuario() {
    const params = { nome: this.props.nome, email: this.props.email, senha: this.props.senha }

    this.props.cadastraUsuario(params);
  }

  renderBtnCadastro() {
    if (this.props.loading_cadastro) {
      return (
        <ActivityIndicator size="large" />
      );
    }
    return (
      <View backgroundColor='green'>
        <Button color='white' title='Cadastrar' onPress={ () => this._cadastraUsuario() } />
      </View>
    );
  }

  render() {
    return (
      <ImageBackground style={{ flex: 1 }} source={require('../imgs/bg.png')} >
        <View style={styles.mainContainer}>
          <View style={styles.signupContainer}>
            <TextInput
              value={this.props.nome}
              style={{ fontSize: 20, height: 45 }}
              onChangeText={texto => this.props.modificaNome(texto)}
              placeholder='nome'
              placeholderTextColor='white'
            />
            <TextInput
              value={this.props.email}
              style={{ fontSize: 20, height: 45 }}
              onChangeText={texto => this.props.modificaEmail(texto)}
              placeholder='email'
              placeholderTextColor='white'
              autoCapitalize='none'
            />
            <TextInput
              secureTextEntry
              value={this.props.senha}
              style={{ fontSize: 20, height: 45 }}
              onChangeText={texto => this.props.modificaSenha(texto)}
              placeholder='senha'
              placeholderTextColor='white'
            />

            <Text style={{ color: 'red', fontSize: 18 }}>{this.props.erroCadastro}</Text>
          </View>
          <View style={styles.accessContainer}>
            { this.renderBtnCadastro() }
          </View>
        </View>
      </ImageBackground>
    );
  }
}

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

const mapStateToProps = state => (
	{
    nome: state.AutenticacaoReducer.nome,
		email: state.AutenticacaoReducer.email,
    senha: state.AutenticacaoReducer.senha,
    erroCadastro: state.AutenticacaoReducer.erroCadastro,
    loading_cadastro: state.AutenticacaoReducer.loading_cadastro
	}
);

export default connect(mapStateToProps, {
  modificaEmail,
  modificaSenha,
  modificaNome,
  cadastraUsuario
})(FormCadastro);
