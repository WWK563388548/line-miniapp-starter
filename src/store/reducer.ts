import { combineReducers } from 'redux';
import { reducer as tabReducer } from './tabbar/index';

export default combineReducers({
  tab: tabReducer,
});