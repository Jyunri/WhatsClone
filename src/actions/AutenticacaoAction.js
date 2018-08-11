import firebase from 'firebase'

export const modificaNome = (texto) => {
  return {
    type: 'modifica_nome',
    payload: texto
  };
};

export const modificaEmail = (texto) => {
  return {
    type: 'modifica_email',
    payload: texto
  };
};

export const modificaSenha = (texto) => {
  return {
    type: 'modifica_senha',
    payload: texto
  };
};

export const cadastraUsuario = ({ nome, email, senha }) => {
  const user = firebase.auth();
  user.createUserWithEmailAndPassword(email, senha)
    .then(_usuario => cadastroUsuarioSucesso())
    .catch(erro => cadastroUsuarioErro(erro));

  return {
    type: 'teste'
  };
};

const cadastroUsuarioSucesso = () => {
  return {
    type: 'sucesso'
  };
};

const cadastroUsuarioErro = (erro) => {
  return {
    type: 'erro'
  };
};
