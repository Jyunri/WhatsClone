import React, { Component } from 'react';
import { View, Text, ListView, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';
import { contatosUsuarioFetch } from '../actions/AppActions';
import { Actions } from '../../node_modules/react-native-router-flux';

class Contatos extends Component {
  constructor(props) {
    super(props);
    this.criaFonteDeDados(this.props.contatos);
  }

  componentWillMount() {
    this.props.contatosUsuarioFetch();
  }

  componentWillReceiveProps(nextProps) {
    this.criaFonteDeDados(nextProps.contatos);
  }

  criaFonteDeDados(contatos) {
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

    this.fonteDeDados = ds.cloneWithRows(contatos);
  }

  renderRow(contato) {
    return (
      <TouchableHighlight onPress={() => Actions.conversa({ title: contato.nome, contatoNome: contato.nome, contatoEmail: contato.email }) }>
        <View style={{ flex: 1, padding: 20, borderBottomWidth: 1, borderColor: "#CCC"}}>
          <Text style={{ fontSize: 25 }}>{contato.nome}</Text>
          <Text style={{ fontSize: 18 }}>{contato.email}</Text>
        </View>
      </TouchableHighlight>
    );
  }

  render() {
    return (
      <ListView
        dataSource={this.fonteDeDados}
        renderRow={data => (
          this.renderRow(data)
        )}
      />
    );
  }
}

mapStateToProps = state => {
  const contatos = _.map(state.ListaContatoReducer, (val, uid) => {
    return { ...val, uid };
  });
  return { contatos };
}

export default connect(mapStateToProps, { contatosUsuarioFetch })(Contatos);

