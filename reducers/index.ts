import { combineReducers } from 'redux';

import example from './example.reducer';
import i18n from '../i18n/i18n.reducer';


export default combineReducers({
  i18n,
  example
});
