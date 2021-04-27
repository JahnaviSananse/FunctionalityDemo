import ServerCall from '../../api/serverCall';
import {LOGIN_DATA} from '../../constants/api';
import {LOGINDATA, SIGNUP_DATA} from '../types/auth';

// export const LoginSuccess = data => ({
//   type: LOGINDATA.LOGIN_SUCCESS,
//   payload: data,
// });

// export const SignupSuccess = data => ({
//   type: SIGNUP_DATA.SIGNUP_SUCCESS,
//   payload: data,
// });

export const LoginSuccess = data => {
  return async dispatch => {
    try {
      console.log('bjhbdjjwweewgandalalyashumatikjbwlhbwl', data);
      returnToDispatch(dispatch, LOGINDATA.LOGIN_START);
      const loginData = await ServerCall({method: 'get', url: LOGIN_DATA});
      const response = await loginData.data;
      const filterData = response.filter(value => {
        console.log('bjhbdjjwweewgandalalyashumatikjbwlhbwl', value);
        return value.email === data.email && value.password === data.password;
      });
      console.log('^^^^^^^^^^^^^^^^^^^', filterData);
      setTimeout(() => {
        if (filterData) {
          returnToDispatch(dispatch, LOGINDATA.LOGIN_SUCCESS, filterData);
          data.props.navigation.navigate('Choice');
        }
      }, 1500);
    } catch (error) {
      alert(error);
      returnToDispatch(dispatch, LOGINDATA.LOGIN_STOP, error);
    }
  };
};

export const SignupSuccess = data => {
  return async dispatch => {
    try {
      returnToDispatch(dispatch, SIGNUP_DATA.SIGNUP_START);
      console.log('hbhjxyyxwd^^^^^^^^^^^^^^^^^^^^^^^^^^', data);
      const signupData = await ServerCall({
        method: 'post',
        url: LOGIN_DATA,
        data: data,
      });
      setTimeout(() => {
        returnToDispatch(dispatch, SIGNUP_DATA.SIGNUP_SUCCESS, data);
      }, 3000);
    } catch (error) {
      alert(error);
      returnToDispatch(dispatch, SIGNUP_DATA.SIGNUP_STOP, error);
    }
  };
};

returnToDispatch = (dispatch, type, payload) => {
  dispatch({
    type: type,
    payload: payload,
  });
};
