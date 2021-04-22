import axios from 'axios';
import ServerCall from '../../api/serverCall';
import {POST_URL} from '../../constants/api';
import {ItemPost, LoadPost} from '../types/loadPost.types';

export const DataList = () => {
  return dispatch => {
    ServerCall({method: 'get', url: POST_URL})
      // axios.get(POST_URL)
      .then(response => {
        returnToDispatch(dispatch, LoadPost.LOADPOST_SUCCESS, response.data);
        return;
      });
  };
};

export const DataPost = item => {
  return dispatch => {
    console.log('cdfdfvrfv', item);
    ServerCall({method: 'post', url: POST_URL, data: item}).then(response => {
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
