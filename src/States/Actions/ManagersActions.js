import ManagerService from "States/Services/ManagersService";

export const GET_MANAGERS = "GET_MANAGERS";
export const GET_MANAGERS_SUCCESS = "GET_MANAGERS_SUCCESS";
export const GET_MANAGERS_ERROR = "GET_MANAGERS_ERROR";

export const GET_MANAGER = "GET_MANAGER";
export const GET_MANAGER_SUCCESS = "GET_MANAGER_SUCCESS";
export const GET_MANAGER_ERROR = "GET_MANAGER_ERROR";

export const ADD_MANAGER = "ADD_MANAGER";
export const ADD_MANAGER_SUCCESS = "ADD_MANAGER_SUCCESS";
export const ADD_MANAGER_ERROR = "ADD_MANAGER_ERROR";

export const DELETE_MANAGER = "DELETE_MANAGER";
export const DELETE_MANAGER_SUCCESS = "DELETE_MANAGER_SUCCESS";
export const DELETE_MANAGER_ERROR = "DELETE_MANAGER_ERROR";

export const UPDATE_MANAGER = "UPDATE_MANAGER";
export const UPDATE_MANAGER_SUCCESS = "UPDATE_MANAGER_SUCCESS";
export const UPDATE_MANAGER_ERROR = "UPDATE_MANAGER_ERROR";

export const getManagers = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: GET_MANAGERS });
      const managers = await ManagerService.getManagers();
      dispatch({ type: GET_MANAGERS_SUCCESS, payload: { managers } });
    } catch (error) {
      dispatch({
        type: GET_MANAGERS_ERROR,
        payload: { message: error.message },
      });
      throw error;
    }
  };
};

export const getManager = (id) => {
  return async (dispatch) => {
    try {
      dispatch({ type: GET_MANAGER });
      const manager = await ManagerService.getManager(id);
      dispatch({ type: GET_MANAGER_SUCCESS, payload: { manager } });
    } catch (error) {
      dispatch({
        type: GET_MANAGER_ERROR,
        payload: { message: error.message },
      });
      throw error;
    }
  };
};

export const addManager = (data) => {
  return async (dispatch) => {
    try {
      dispatch({ type: ADD_MANAGER });
      const manager = await ManagerService.addManager(data);
      dispatch({ type: ADD_MANAGER_SUCCESS, payload: { manager } });
    } catch (error) {
      dispatch({
        type: ADD_MANAGER_ERROR,
        payload: { message: error.message },
      });
      throw error;
    }
  };
};

export const deleteManager = (id) => {
  return async (dispatch) => {
    try {
      dispatch({ type: DELETE_MANAGER });
      await ManagerService.deleteManager(id);
      dispatch({ type: DELETE_MANAGER_SUCCESS, payload: { id } });
    } catch (error) {
      dispatch({
        type: DELETE_MANAGER_ERROR,
        payload: { message: error.message },
      });
      throw error;
    }
  };
};

export const updateManager = (id, data) => {
  return async (dispatch) => {
    try {
      dispatch({ type: UPDATE_MANAGER });
      const manager = await ManagerService.updateManager(id, data);
      dispatch({ type: UPDATE_MANAGER_SUCCESS, payload: { manager } });
    } catch (error) {
      dispatch({
        type: UPDATE_MANAGER_ERROR,
        payload: { message: error.message },
      });
      throw error;
    }
  };
};
