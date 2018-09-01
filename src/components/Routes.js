import React, {Component} from 'react';

//import do router flux
import { Router, Scene } from 'react-native-router-flux';

//import das outras cenas
import FormLogin from './FormLogin';
import FormCadastro from './FormCadastro';
import BoasVindas from './BoasVindas';
import Principal from './Principal';
import AdicionarContato from './AdicionarContato';
import Conversa from './Conversa';

export default props => (
  <Router navigationBarStyle={{ backgroundColor: '#115E54' }} titleStyle={{ color: 'white' }} >
    <Scene key='root'>
      <Scene key='signIn' component={FormLogin} title="Login" hideNavBar />
      <Scene key='signUp' component={FormCadastro} title="Cadastro" hideNavBar={ false } />
      <Scene key='welcome' component={BoasVindas} title="Boas Vindas" hideNavBar />
      <Scene key='principal' component={Principal} title="Principal" hideNavBar />
      <Scene key='adicionarContato' component={AdicionarContato} title="Adicionar Contato" hideNavBar={ false } />
      <Scene key='conversa' component={Conversa} title="Conversa" hideNavBar={ false } />
    </Scene>
  </Router>
);