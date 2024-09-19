import { getToken, removeToken, setToken } from "Helpers/token_helper";
import AuthService from "States/Services/AuthService";

export const SIGN_IN = "SIGN_IN";
export const SIGN_IN_SUCCESS = "SIGN_IN_SUCCESS";
export const SIGN_IN_ERROR = "SIGN_IN_ERROR";
export const SIGN_OUT = "SIGN_OUT";

export const signIn = (data) => {
  return async (dispatch) => {
    try {
      dispatch({ type: SIGN_IN });
      const token = await AuthService.login(data);
      setToken(token);
      dispatch({ type: SIGN_IN_SUCCESS, payload: { token } });
    } catch (error) {
      dispatch({ type: SIGN_IN_ERROR, payload: { message: error.message } });
      throw error;
    }
  };
};

export const signOut = () => (dispatch) => {
  removeToken();
  dispatch({ type: SIGN_OUT });
};

export const setInitialState = () => (dispatch) => {
  const token = getToken();
  if (token) {
    dispatch({ type: SIGN_IN_SUCCESS, payload: { token } });
  } else {
    dispatch({ type: SIGN_OUT });
  }
};
