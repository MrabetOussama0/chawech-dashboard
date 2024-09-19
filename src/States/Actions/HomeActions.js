import HomeService from "States/Services/HomeService";

export const GET_HOME_DATA = "GET_HOME_DATA";
export const GET_HOME_DATA_SUCCESS = "GET_HOME_DATA_SUCCESS";
export const GET_HOME_DATA_ERROR = "GET_HOME_DATA_ERROR";

export const getHomeData = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: GET_HOME_DATA });
      const response = await HomeService.getHomeData();
      dispatch({ type: GET_HOME_DATA_SUCCESS, payload: { data: response } });
    } catch (error) {
      dispatch({
        type: GET_HOME_DATA_ERROR,
        payload: { message: error.message },
      });
      throw error;
    }
  };
};
