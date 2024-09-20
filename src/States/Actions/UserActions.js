import UserService from "States/Services/UserService";

export const GET_USER = "GET_USER";
export const GET_USER_SUCCESS = "GET_USER_SUCCESS";
export const GET_USER_ERROR = "GET_USER_ERROR";
export const UPDATE_USER = "UPDATE_USER";
export const UPDATE_USER_SUCCESS = "UPDATE_USER_SUCCESS";
export const UPDATE_USER_ERROR = "UPDATE_USER_ERROR";
export const GENERATE_OTP = "GENERATE_OTP";
export const GENERATE_OTP_SUCCESS = "GENERATE_OTP_SUCCESS";
export const GENERATE_OTP_ERROR = "GENERATE_OTP_ERROR";
export const VERIFY_OTP = "VERIFY_OTP";
export const VERIFY_OTP_SUCCESS = "VERIFY_OTP_SUCCESS";
export const VERIFY_OTP_ERROR = "VERIFY_OTP_ERROR";
export const RESET_PASSWORD = "RESET_PASSWORD";
export const RESET_PASSWORD_SUCCESS = "RESET_PASSWORD_SUCCESS";
export const RESET_PASSWORD_ERROR = "RESET_PASSWORD_ERROR";
export const UPDATE_PASSWORD = "UPDATE_PASSWORD";
export const UPDATE_PASSWORD_SUCCESS = "UPDATE_PASSWORD_SUCCESS";
export const UPDATE_PASSWORD_ERROR = "UPDATE_PASSWORD_ERROR";

export const getUser = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: GET_USER });
      const user = await UserService.getUser();
      dispatch({ type: GET_USER_SUCCESS, payload: { user } });
    } catch (error) {
      dispatch({ type: GET_USER_ERROR, payload: { message: error.message } });
      throw error;
    }
  };
};

export const updateUser = (user) => {
  return async (dispatch) => {
    try {
      dispatch({ type: UPDATE_USER });
      const updatedUser = await UserService.updateUser(user);
      dispatch({ type: UPDATE_USER_SUCCESS, payload: { user: updatedUser } });
    } catch (error) {
      dispatch({
        type: UPDATE_USER_ERROR,
        payload: { message: error.message },
      });
      throw error;
    }
  };
};

export const generateOTP = (email) => {
  return async (dispatch) => {
    try {
      dispatch({ type: GENERATE_OTP });
      await UserService.generateOTP(email);
      dispatch({ type: GENERATE_OTP_SUCCESS });
    } catch (error) {
      dispatch({
        type: GENERATE_OTP_ERROR,
        payload: { message: error.message },
      });
      throw error;
    }
  };
};

export const verifyOTP = (code) => {
  return async (dispatch) => {
    try {
      dispatch({ type: VERIFY_OTP });
      const sessionId = await UserService.verifyOTP(code);
      dispatch({ type: VERIFY_OTP_SUCCESS, payload: { sessionId } });
    } catch (error) {
      dispatch({ type: VERIFY_OTP_ERROR, payload: { message: error.message } });
      throw error;
    }
  };
};

export const resetPassword = (email, password, sessionId) => {
  return async (dispatch) => {
    try {
      dispatch({ type: RESET_PASSWORD });
      await UserService.resetPassword(email, password, sessionId);
      dispatch({ type: RESET_PASSWORD_SUCCESS });
    } catch (error) {
      dispatch({
        type: RESET_PASSWORD_ERROR,
        payload: { message: error.message },
      });
      throw error;
    }
  };
};

export const updatePassword = (oldPassword, newPassword) => {
  return async (dispatch) => {
    try {
      dispatch({ type: UPDATE_PASSWORD });
      await UserService.updatePassword(oldPassword, newPassword);
      dispatch({ type: UPDATE_PASSWORD_SUCCESS });
    } catch (error) {
      dispatch({
        type: UPDATE_PASSWORD_ERROR,
        payload: { message: error.message },
      });
      throw error;
    }
  };
};
