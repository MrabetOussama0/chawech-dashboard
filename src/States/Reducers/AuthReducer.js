import {
  SIGN_IN,
  SIGN_IN_SUCCESS,
  SIGN_IN_ERROR,
  SIGN_OUT,
} from "States/Actions/AuthActions";

let initialState = {
  isLoading: false,
  token: null,
  error: null,
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN:
      return {
        ...state,
        isLoading: true,
      };
    case SIGN_IN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        token: action.payload.token,
      };
    case SIGN_IN_ERROR:
      return {
        isLoading: false,
        error: action.payload.message,
        token: null,
      };
    case SIGN_OUT:
      return {
        isLoading: false,
        token: null,
        error: null,
      };
    default:
      return state;
  }
};

export default AuthReducer;
