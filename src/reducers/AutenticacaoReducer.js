const INITIAL_STATE = {
  nome: 'bla',
  email: 'bla',
  senha: 'bla'
}

export default (state = INITIAL_STATE, action) => {
  if (action.type == 'modifica_email') {
    return { ...state, email: action.payload };
  }
  if (action.type == 'modifica_senha') {
    return { ...state, senha: action.payload };
  }
  return state;
}