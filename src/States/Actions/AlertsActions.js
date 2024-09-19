import AlertService from "States/Services/AlertsService";

export const GET_ALERTS = "GET_ALERTS";
export const GET_ALERTS_SUCCESS = "GET_ALERTS_SUCCESS";
export const GET_ALERTS_ERROR = "GET_ALERTS_ERROR";

export const GET_ALERT = "GET_ALERT";
export const GET_ALERT_SUCCESS = "GET_ALERT_SUCCESS";
export const GET_ALERT_ERROR = "GET_ALERT_ERROR";

export const ADD_ALERT = "ADD_ALERT";
export const ADD_ALERT_SUCCESS = "ADD_ALERT_SUCCESS";
export const ADD_ALERT_ERROR = "ADD_ALERT_ERROR";

export const DELETE_ALERT = "DELETE_ALERT";
export const DELETE_ALERT_SUCCESS = "DELETE_ALERT_SUCCESS";
export const DELETE_ALERT_ERROR = "DELETE_ALERT_ERROR";

export const UPDATE_ALERT = "UPDATE_ALERT";
export const UPDATE_ALERT_SUCCESS = "UPDATE_ALERT_SUCCESS";
export const UPDATE_ALERT_ERROR = "UPDATE_ALERT_ERROR";

export const getAlerts = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: GET_ALERTS });
      const alerts = await AlertService.getAlerts();
      dispatch({ type: GET_ALERTS_SUCCESS, payload: { alerts } });
    } catch (error) {
      dispatch({ type: GET_ALERTS_ERROR, payload: { message: error.message } });
      throw error;
    }
  };
};

export const getAlert = (id) => {
  return async (dispatch) => {
    try {
      dispatch({ type: GET_ALERT });
      const alert = await AlertService.getAlert(id);
      dispatch({ type: GET_ALERT_SUCCESS, payload: { alert } });
    } catch (error) {
      dispatch({ type: GET_ALERT_ERROR, payload: { message: error.message } });
      throw error;
    }
  };
};

export const addAlert = (data) => {
  return async (dispatch) => {
    try {
      dispatch({ type: ADD_ALERT });
      const alert = await AlertService.addAlert(data);
      dispatch({ type: ADD_ALERT_SUCCESS, payload: { alert } });
    } catch (error) {
      dispatch({ type: ADD_ALERT_ERROR, payload: { message: error.message } });
      throw error;
    }
  };
};

export const deleteAlert = (id) => {
  return async (dispatch) => {
    try {
      dispatch({ type: DELETE_ALERT });
      await AlertService.deleteAlert(id);
      dispatch({ type: DELETE_ALERT_SUCCESS, payload: { id } });
    } catch (error) {
      dispatch({
        type: DELETE_ALERT_ERROR,
        payload: { message: error.message },
      });
      throw error;
    }
  };
};

export const updateAlert = (id, data) => {
  return async (dispatch) => {
    try {
      dispatch({ type: UPDATE_ALERT });
      const alert = await AlertService.updateAlert(id, data);
      dispatch({ type: UPDATE_ALERT_SUCCESS, payload: { alert } });
    } catch (error) {
      dispatch({
        type: UPDATE_ALERT_ERROR,
        payload: { message: error.message },
      });
      throw error;
    }
  };
};
