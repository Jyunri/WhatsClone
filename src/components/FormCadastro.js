import React from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';

const formCadastro = props => (
  <View style={styles.mainContainer}>
    <View style={styles.signupContainer}>
      <TextInput value={props.nome} style={{ fontSize: 20, height: 45 }} placeholder='Nome' />
      <TextInput value={props.email} style={{ fontSize: 20, height: 45 }} placeholder='Email' />
      <TextInput value={props.senha} style={{ fontSize: 20, height: 45 }} placeholder='senha' />
    </View>
    <View style={styles.accessContainer}>
      <View backgroundColor='green'>
        <Button color='white' title='Cadastrar' onPress={ () => Actions.signIn() } />
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

const mapStateToProps = state => (
	{
    nome: state.AutenticacaoReducer.nome,
		email: state.AutenticacaoReducer.email,
		senha: state.AutenticacaoReducer.senha
	}
);

export default connect(mapStateToProps, null)(formCadastro);
