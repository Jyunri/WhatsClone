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
