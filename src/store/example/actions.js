import {
  AN_EXAMPLE
} from './constants';
import { get } from 'utils/request';

export const changeTestData = (testData) => ({
  type: AN_EXAMPLE,
  testData
});

// This is a fake api call for example
export const getTestData = () => {
  return (dispatch) => {
    get('/test')
    .then (({ testData }) => {
      dispatch(changeTestData(testData));
    }).catch ((e) => {
      alert(e);
      console.log ("Error: ", e);
    }) 
  }
};