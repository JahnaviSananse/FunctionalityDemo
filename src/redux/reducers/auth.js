import {LOGINDATA, SIGNUP_DATA, LOGOUT_DATA} from '../types/auth';

const INITIAL_DATA = {
  authUser: [],
  error: [],
  isLoading: false,
  isLogged: false,
};

const authReducer = (state = INITIAL_DATA, action) => {
  switch (action.type) {
    case LOGINDATA.LOGIN_START:
    case SIGNUP_DATA.SIGNUP_START:
    case LOGOUT_DATA.LOGOUT_START:
      return {
        ...state,
        isLoading: true,
      };
    case SIGNUP_DATA.SIGNUP_SUCCESS:
      return {
        ...state,
        authUser: [action.payload],
        isLoading: false,
      };
    case LOGINDATA.LOGIN_SUCCESS:
      return {
        ...state,
        isLogged: action.payload,
        isLoading: false,
      };
    case LOGOUT_DATA.LOGOUT_SUCCESS:
      return {
        ...state,
        authUser: [],
        isLoading: false,
      };
    case LOGINDATA.LOGIN_STOP:
    case SIGNUP_DATA.SIGNUP_STOP:
    case LOGOUT_DATA.LOGOUT_STOP:
      return {
        ...state,
        isLoading: false,
      };

    default:
      return state;
  }
};
export default authReducer;
