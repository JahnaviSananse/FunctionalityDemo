import axios from 'axios';
import ServerCall from '../../api/serverCall';
import {POST_URL} from '../../constants/api';
import {ItemPost, LoadPost} from '../types/loadPost';

// export const DataList = () => {
//   return dispatch => {
//     returnToDispatch(dispatch, LoadPost.LOADPOST_START);
//     ServerCall({method: 'get', url: POST_URL})
//       // axios.get(POST_URL)
//       .then(response => {
//         console.log('API RESPONSE>>>>>', response.data.data);
//         returnToDispatch(
//           dispatch,
//           LoadPost.LOADPOST_SUCCESS,
//           response.data.data,
//         );
//       })
//       .catch(error => {
//         alert(error);
//         returnToDispatch(dispatch, LoadPost.LOADPOST_FAIL, error);
//       });
//   };
// };

export const DataList = () => {
  return async dispatch => {
    try {
      returnToDispatch(dispatch, LoadPost.LOADPOST_START);
      const data = await ServerCall({method: 'get', url: POST_URL});
      const response = await data.data;
      console.log('hxhjsvhjsa<<<<<>>>>', response.data);
      setTimeout(() => {
        returnToDispatch(dispatch, LoadPost.LOADPOST_SUCCESS, response.data);
      }, 1500);
    } catch (error) {
      alert(error);
      returnToDispatch(dispatch, LoadPost.LOADPOST_FAIL, error);
    }
  };
};

export const DataPost = item => {
  return async dispatch => {
    try {
      returnToDispatch(dispatch, ItemPost.ITEMPOST_START);
      const data = await ServerCall({
        method: 'post',
        url: POST_URL,
        data: item,
      });
      const response = await data.data;
      setTimeout(() => {
        returnToDispatch(dispatch, ItemPost.ITEMPOST_SUCCESS, response);
      }, 1500);
    } catch (error) {
      alert(error);

      returnToDispatch(dispatch, ItemPost.ITEMPOST_STOP, error);
    }
  };
};

returnToDispatch = (dispatch, type, payload) => {
  dispatch({
    type: type,
    payload: payload,
  });
};
