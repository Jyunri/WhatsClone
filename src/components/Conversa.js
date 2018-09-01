import React, { Component } from 'react';
import { View, TextInput, Image, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import { modificaMensagem, enviaMensagem, conversaUsuarioFetch } from '../actions/AppActions';
import _ from 'lodash';

class Conversa extends Component {

  componentWillMount() {
    this.props.conversaUsuarioFetch(this.props.contatoEmail);
  }

  _enviaMensagem() {
    console.log('_envia mensagem')
    const { mensagem, contatoNome, contatoEmail } = this.props;
    this.props.enviaMensagem(mensagem, contatoNome, contatoEmail);
  }
  render() {
    return (
      <View style={{ flex: 1, marginTop: 50, backgroundColor: '#eee4dc', padding: 10 }}>
        <View style={{ flex: 1, paddingBottom: 20 }}></View>
        <View style={{ flexDirection: 'row', height: 60}}>
          <TextInput
            value={this.props.mensagem}
            onChangeText={texto => this.props.modificaMensagem(texto)}
            style={{ flex: 4, backgroundColor: 'white', fontSize: 18 }}
          />
          <TouchableHighlight onPress={this._enviaMensagem.bind(this)} underlayColor='white'>
            <Image source={require('../imgs/enviar_mensagem.png')} />
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

mapStateToProps = state => {
  const conversa = _.map(state.ListaConversaReducer, (val, uid) => {
    return { ...val, uid };
  });

  console.log(conversa);

  return (
    {
      conversa,
      mensagem: state.AppReducer.mensagem
    }
  )
}

export default connect(mapStateToProps, { modificaMensagem, enviaMensagem, conversaUsuarioFetch })(Conversa)