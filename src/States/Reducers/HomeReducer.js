import { GET_HOME_DATA, GET_HOME_DATA_ERROR, GET_HOME_DATA_SUCCESS } from "States/Actions/HomeActions";

let initialState = {
  isLoading: false,
  homeData: null,
  error: null,
};

const HomeReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_HOME_DATA:
      return {
        ...state,
        isLoading: true,
      };
    case GET_HOME_DATA_SUCCESS:
        return {
            ...state,
            isLoading: false,
            homeData: action.payload.data,
        };
    case GET_HOME_DATA_ERROR:
        return {
            isLoading: false,
            error: action.payload.message,
            homeData: null,
        };
    default:
      return state;
  }
};

export default HomeReducer;
