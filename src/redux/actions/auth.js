import {LOGINDATA, SIGNUP_DATA} from '../types/auth';

// export const LoginSuccess = data => ({
//   type: LOGINDATA.LOGIN_SUCCESS,
//   payload: data,
// });

// export const SignupSuccess = data => ({
//   type: SIGNUP_DATA.SIGNUP_SUCCESS,
//   payload: data,
// });

export const LoginSuccess = () => {
  return dispatch => {
    returnToDispatch(dispatch, LOGINDATA.LOGIN_START);
    setTimeout(() => {
      returnToDispatch(dispatch, LOGINDATA.LOGIN_SUCCESS);
    }, 1500);
    // returnToDispatch(dispatch, LOGINDATA.LOGIN_STOP);
  };
};

export const SignupSuccess = data => {
  return dispatch => {
    returnToDispatch(dispatch, SIGNUP_DATA.SIGNUP_START);
    setTimeout(() => {
      returnToDispatch(dispatch, SIGNUP_DATA.SIGNUP_SUCCESS, data);
    }, 3000);
    // returnToDispatch(dispatch, SIGNUP_DATA.SIGNUP_STOP);
  };
};

returnToDispatch = (dispatch, type, payload) => {
  dispatch({
    type: type,
    payload: payload,
  });
};
