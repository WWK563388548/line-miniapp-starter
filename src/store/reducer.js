import { combineReducers } from 'redux';
import { reducer as exampleReducer } from './example/index';

export default combineReducers({
  example: exampleReducer,
});