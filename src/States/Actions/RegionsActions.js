import RegionService from "States/Services/RegionsService";

export const GET_REGIONS = "GET_REGIONS";
export const GET_REGIONS_SUCCESS = "GET_REGIONS_SUCCESS";
export const GET_REGIONS_ERROR = "GET_REGIONS_ERROR";

export const GET_REGION = "GET_REGION";
export const GET_REGION_SUCCESS = "GET_REGION_SUCCESS";
export const GET_REGION_ERROR = "GET_REGION_ERROR";

export const ADD_REGION = "ADD_REGION";
export const ADD_REGION_SUCCESS = "ADD_REGION_SUCCESS";
export const ADD_REGION_ERROR = "ADD_REGION_ERROR";

export const DELETE_REGION = "DELETE_REGION";
export const DELETE_REGION_SUCCESS = "DELETE_REGION_SUCCESS";
export const DELETE_REGION_ERROR = "DELETE_REGION_ERROR";

export const UPDATE_REGION = "UPDATE_REGION";
export const UPDATE_REGION_SUCCESS = "UPDATE_REGION_SUCCESS";
export const UPDATE_REGION_ERROR = "UPDATE_REGION_ERROR";

export const getRegions = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: GET_REGIONS });
      const regions = await RegionService.getRegions();
      dispatch({ type: GET_REGIONS_SUCCESS, payload: { regions } });
    } catch (error) {
      dispatch({
        type: GET_REGIONS_ERROR,
        payload: { message: error.message },
      });
      throw error;
    }
  };
};

export const getRegion = (id) => {
  return async (dispatch) => {
    try {
      dispatch({ type: GET_REGION });
      const region = await RegionService.getRegion(id);
      dispatch({ type: GET_REGION_SUCCESS, payload: { region } });
    } catch (error) {
      dispatch({
        type: GET_REGION_ERROR,
        payload: { message: error.message },
      });
      throw error;
    }
  };
};

export const addRegion = (data) => {
  return async (dispatch) => {
    try {
      dispatch({ type: ADD_REGION });
      const region = await RegionService.addRegion(data);
      dispatch({ type: ADD_REGION_SUCCESS, payload: { region } });
    } catch (error) {
      dispatch({
        type: ADD_REGION_ERROR,
        payload: { message: error.message },
      });
      throw error;
    }
  };
};

export const deleteRegion = (id) => {
  return async (dispatch) => {
    try {
      dispatch({ type: DELETE_REGION });
      await RegionService.deleteRegion(id);
      dispatch({ type: DELETE_REGION_SUCCESS, payload: { id } });
    } catch (error) {
      dispatch({
        type: DELETE_REGION_ERROR,
        payload: { message: error.message },
      });
      throw error;
    }
  };
};

export const updateRegion = (id, data) => {
  return async (dispatch) => {
    try {
      dispatch({ type: UPDATE_REGION });
      const region = await RegionService.updateRegion(id, data);
      dispatch({ type: UPDATE_REGION_SUCCESS, payload: { region } });
    } catch (error) {
      dispatch({
        type: UPDATE_REGION_ERROR,
        payload: { message: error.message },
      });
      throw error;
    }
  };
};
