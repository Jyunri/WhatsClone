import { combineReducers } from 'redux';
import AutenticacaoReducer from './AutenticacaoReducer';
import AppReducer from './AppReducer';
import ListaContatoReducer from './ListaContatoReducer';
import ListaConversaReducer from './ListaConversaReducer';

export default combineReducers({
  AutenticacaoReducer,
  AppReducer,
  ListaContatoReducer,
  ListaConversaReducer
});
