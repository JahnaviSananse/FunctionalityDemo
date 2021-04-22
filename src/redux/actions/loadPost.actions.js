import axios from 'axios';
import {ItemPost, LoadPost} from '../types/loadPost.types';

export const DataList = () => {
  return dispatch => {
    axios.get(`https://jsonplaceholder.typicode.com/posts`).then(response => {
      console.log('csdcsdsfvs>>>', response.data);
      returnToDispatch(dispatch, LoadPost.LOADPOST_SUCCESS, response.data);
      return;
    });
  };
};

export const DataPost = item => {
  return dispatch => {
    console.log('cdfdfvrfv', item);
    axios
      .post(`https://jsonplaceholder.typicode.com/posts`, {item})
      .then(response => {
        returnToDispatch(dispatch, ItemPost.ITEMPOST_SUCCESS, response.data);
        return;
      });
  };
};

returnToDispatch = (dispatch, type, payload) => {
  dispatch({
    type: type,
    payload: payload,
  });
};
