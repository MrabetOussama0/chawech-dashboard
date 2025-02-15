import {
  GET_USER,
  GET_USER_SUCCESS,
  GET_USER_ERROR,
  UPDATE_USER,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_ERROR,
  GENERATE_OTP,
  GENERATE_OTP_ERROR,
  GENERATE_OTP_SUCCESS,
  RESET_PASSWORD_ERROR,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD,
  VERIFY_OTP_ERROR,
  VERIFY_OTP_SUCCESS,
  VERIFY_OTP,
  UPDATE_PASSWORD,
  UPDATE_PASSWORD_ERROR,
  UPDATE_PASSWORD_SUCCESS,
} from "States/Actions/UserActions";

let initialState = {
  getUserLoading: false,
  updateUserLoading: false,
  generateOTPLoading: false,
  verifyOTPLoading: false,
  resetPasswordLoading: false,
  updatePasswordLoading: false,
  user: null,
  error: null,
  sessionId: null,
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        getUserLoading: true,
        error: null,
      };
    case GET_USER_SUCCESS:
      return {
        ...state,
        getUserLoading: false,
        error: null,
        user: action.payload.user,
      };
    case GET_USER_ERROR:
      return {
        ...state,
        getUserLoading: false,
        error: action.payload.message,
        user: null,
      };
    case UPDATE_USER:
      return {
        ...state,
        updateUserLoading: true,
        error: null,
      };
    case UPDATE_USER_SUCCESS:
      return {
        ...state,
        updateUserLoading: false,
        error: null,
        user: action.payload.user,
      };
    case UPDATE_USER_ERROR:
      return {
        ...state,
        updateUserLoading: false,
        error: action.payload.message,
      };
    case GENERATE_OTP:
      return {
        ...state,
        generateOTPLoading: true,
        error: null,
      };
    case GENERATE_OTP_SUCCESS:
      return {
        ...state,
        generateOTPLoading: false,
        error: null,
      };
    case GENERATE_OTP_ERROR:
      return {
        ...state,
        generateOTPLoading: false,
        error: action.payload.message,
      };
    case VERIFY_OTP:
      return {
        ...state,
        verifyOTPLoading: true,
        error: null,
      };
    case VERIFY_OTP_SUCCESS:
      return {
        ...state,
        verifyOTPLoading: false,
        error: null,
        sessionId: action.payload.sessionId,
      };
    case VERIFY_OTP_ERROR:
      return {
        ...state,
        verifyOTPLoading: false,
        error: action.payload.message,
      };
    case RESET_PASSWORD:
      return {
        ...state,
        resetPasswordLoading: true,
        error: null,
      };
    case RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        resetPasswordLoading: false,
        error: null,
        sessionId: null,
      };
    case RESET_PASSWORD_ERROR:
      return {
        ...state,
        resetPasswordLoading: false,
        error: action.payload.message,
      };
    case UPDATE_PASSWORD:
      return {
        ...state,
        updatePasswordLoading: true,
        error: null,
      };
    case UPDATE_PASSWORD_SUCCESS:
      return {
        ...state,
        updatePasswordLoading: false,
        error: null,
      };
    case UPDATE_PASSWORD_ERROR:
      return {
        ...state,
        updatePasswordLoading: false,
        error: action.payload.message,
      };
    default:
      return state;
  }
};

export default UserReducer;
