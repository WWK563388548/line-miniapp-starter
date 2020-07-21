import {
  AN_EXAMPLE,
} from './constants';

const defaultState = {
  testData: false,
};

export default (state = defaultState, action ) => {
  switch (action.type) {
    case AN_EXAMPLE:
      return Object.assign({}, state, { testData: action.testData });
    default:
      return state;
    }
}