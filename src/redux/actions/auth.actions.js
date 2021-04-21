import {LOGINDATA, SIGNUP_DATA} from '../types/auth.types';

export const LoginSuccess = data => ({
  type: LOGINDATA.LOGIN_SUCCESS,
  payload: data,
});

export const SignupSuccess = data => ({
  type: SIGNUP_DATA.SIGNUP_SUCCESS,
  payload: data,
});
