import React, {Component} from 'react';

//import do router flux
import { Router, Scene } from 'react-native-router-flux';

//import das outras cenas
import FormLogin from './FormLogin';
import FormCadastro from './FormCadastro';

export default props => (
  <Router>
    <Scene key='root'>
      <Scene key='signIn' component={FormLogin} title="Login"/>
      <Scene key='signUp' component={FormCadastro} title="Cadastro"/>
    </Scene>
  </Router>
);