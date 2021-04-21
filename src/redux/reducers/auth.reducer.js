import {LOGINDATA, SIGNUP_DATA} from '../types/auth.types';

const INITIAL_DATA = {
  authUser: [],
  error: [],
  isLoading: false,
  isLogged: false,
};

const isLogged = (state, actionData) => {
  if (
    state.authUser[0].email === actionData.email &&
    state.authUser[0].password === actionData.password
  ) {
    return true;
  } else {
    return false;
  }
};

const authReducer = (state = INITIAL_DATA, action) => {
  switch (action.type) {
    case SIGNUP_DATA.SIGNUP_SUCCESS:
      return {
        ...state,
        authUser: [action.payload],
      };
    case LOGINDATA.LOGIN_SUCCESS:
      return {
        ...state,
        isLogged: isLogged(state, action.payload),
      };

    default:
      return state;
  }
};
export default authReducer;
