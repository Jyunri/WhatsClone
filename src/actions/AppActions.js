import firebase from 'firebase';
import { MODIFICA_ADICIONA_CONTATO_EMAIL, ADICIONA_CONTATO_ERRO, ADICIONA_CONTATO_SUCESSO, LISTA_CONTATO_USUARIO, MODIFICA_MENSAGEM, LISTA_CONVERSA_USUARIO } from './types';
import b64 from 'base-64';
import _ from 'lodash';

export const modificaAdicionaContatoEmail = (texto) => {
  return {
    type: MODIFICA_ADICIONA_CONTATO_EMAIL,
    payload: texto
  };
};

export const adicionaContato = email => {

  return dispatch => {
    const emailb64 = b64.encode(email);

    firebase.database().ref(`/contatos/${emailb64}`)
      .once('value')
      .then(snapshot => {
        if (snapshot.val()) {
          const dadosUsuario = _.first(_.values(snapshot.val()))
          const { currentUser } = firebase.auth();
          const emailUsuario64 = b64.encode(currentUser.email);

          firebase.database().ref(`/usuario_contatos/${emailUsuario64}`)
            .push({ email, nome: dadosUsuario.nome })
            .then(() => adicionaContatoSucesso(dispatch))
            .catch(erro => adicionaContatoErro(erro.message, dispatch));
          
        } else {
          dispatch({
            type: ADICIONA_CONTATO_ERRO,
            payload: 'E-mail sem usuario associado'
          });
        }
      });
  };
};

const adicionaContatoErro = (erro, dispatch) => (
  dispatch({
    type: ADICIONA_CONTATO_ERRO,
    payload: erro
  })
);

const adicionaContatoSucesso = (dispatch) => (
  dispatch({
    type: ADICIONA_CONTATO_SUCESSO,
    payload: true
  })
);

export const habilitaInclusaoContato = () => (
  {
    type: ADICIONA_CONTATO_SUCESSO,
    payload: false
  }
);

export const contatosUsuarioFetch = () => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    let emailUsuario64 = b64.encode(currentUser.email);

    firebase.database().ref(`usuario_contatos/${emailUsuario64}`)
      .on('value', snapshot => {
        dispatch({ type: LISTA_CONTATO_USUARIO, payload: snapshot.val() });
      });
  };
};

export const modificaMensagem = text => (
  {
    type: MODIFICA_MENSAGEM,
    payload: text
  }
);

export const enviaMensagem = (mensagem, contatoNome, contatoEmail) => {
  console.log(1);
  const { currentUser } = firebase.auth();
  const usuarioEmail = currentUser.email;

  return dispatch => {
    const emailUsuario64 = b64.encode(usuarioEmail);
    const contatoEmail64 = b64.encode(contatoEmail);

    firebase.database().ref(`/mensagens/${emailUsuario64}/${contatoEmail64}`)
      .push({ mensagem, tipo: 'envio' })
      .then(() => {
        firebase.database().ref(`/mensagens/${contatoEmail64}/${emailUsuario64}`)
          .push({ mensagem, tipo: 'recebimento' })
          .then(() => dispatch({
            type: 'x',
            payload: mensagem
          }))
          .then(() => {
            firebase.database().ref(`/usuario_conversas/${emailUsuario64}/${contatoEmail64}`)
              .set({ nome: contatoNome, email: contatoEmail });
          })
          .then(() => {
            firebase.database().ref(`/contatos/${emailUsuario64}`)
              .once('value')
              .then(snapshot => {
                const dadosUsuario = _.first(_.values(snapshot.val()));
                firebase.database().ref(`/usuario_conversas/${contatoEmail64}/${emailUsuario64}`)
                  .set({ nome: dadosUsuario.nome, email: usuarioEmail });
              });
          });
      });
  };
};

export const conversaUsuarioFetch = (contatoEmail) => {
  const { currentUser } = firebase.auth();

  const usuarioEmail64 = b64.encode(currentUser.email);
  const contatoEmail64 = b64.encode(contatoEmail);
 
  return dispatch => {
    firebase.database().ref(`/mensagens/${usuarioEmail64}/${contatoEmail64}`)
      .on('value', snapshot => {
        dispatch({ type: LISTA_CONVERSA_USUARIO, payload: snapshot.val() });
      });
  };
};

