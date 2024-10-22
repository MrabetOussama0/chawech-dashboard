import DelivererService from "States/Services/DeliverersService";

export const GET_DELIVERERS = "GET_DELIVERERS";
export const GET_DELIVERERS_SUCCESS = "GET_DELIVERERS_SUCCESS";
export const GET_DELIVERERS_ERROR = "GET_DELIVERERS_ERROR";

export const GET_DELIVERER = "GET_DELIVERER";
export const GET_DELIVERER_SUCCESS = "GET_DELIVERER_SUCCESS";
export const GET_DELIVERER_ERROR = "GET_DELIVERER_ERROR";

export const ADD_DELIVERER = "ADD_DELIVERER";
export const ADD_DELIVERER_SUCCESS = "ADD_DELIVERER_SUCCESS";
export const ADD_DELIVERER_ERROR = "ADD_DELIVERER_ERROR";

export const DELETE_DELIVERER = "DELETE_DELIVERER";
export const DELETE_DELIVERER_SUCCESS = "DELETE_DELIVERER_SUCCESS";
export const DELETE_DELIVERER_ERROR = "DELETE_DELIVERER_ERROR";

export const UPDATE_DELIVERER = "UPDATE_DELIVERER";
export const UPDATE_DELIVERER_SUCCESS = "UPDATE_DELIVERER_SUCCESS";
export const UPDATE_DELIVERER_ERROR = "UPDATE_DELIVERER_ERROR";

export const getDeliverers = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: GET_DELIVERERS });
      const deliverers = await DelivererService.getDeliverers();
      dispatch({ type: GET_DELIVERERS_SUCCESS, payload: { deliverers } });
    } catch (error) {
      dispatch({
        type: GET_DELIVERERS_ERROR,
        payload: { message: error.message },
      });
      throw error;
    }
  };
};

export const getDeliverer = (id) => {
  return async (dispatch) => {
    try {
      dispatch({ type: GET_DELIVERER });
      const deliverer = await DelivererService.getDeliverer(id);
      dispatch({ type: GET_DELIVERER_SUCCESS, payload: { deliverer } });
    } catch (error) {
      dispatch({
        type: GET_DELIVERER_ERROR,
        payload: { message: error.message },
      });
      throw error;
    }
  };
};

export const addDeliverer = (data) => {
  return async (dispatch) => {
    try {
      dispatch({ type: ADD_DELIVERER });
      const deliverer = await DelivererService.addDeliverer(data);
      dispatch({ type: ADD_DELIVERER_SUCCESS, payload: { deliverer } });
    } catch (error) {
      dispatch({
        type: ADD_DELIVERER_ERROR,
        payload: { message: error.message },
      });
      throw error;
    }
  };
};

export const deleteDeliverer = (id) => {
  return async (dispatch) => {
    try {
      dispatch({ type: DELETE_DELIVERER });
      await DelivererService.deleteDeliverer(id);
      dispatch({ type: DELETE_DELIVERER_SUCCESS, payload: { id } });
    } catch (error) {
      dispatch({
        type: DELETE_DELIVERER_ERROR,
        payload: { message: error.message },
      });
      throw error;
    }
  };
};

export const updateDeliverer = (id, data) => {
  return async (dispatch) => {
    try {
      dispatch({ type: UPDATE_DELIVERER });
      const deliverer = await DelivererService.updateDeliverer(id, data);
      dispatch({ type: UPDATE_DELIVERER_SUCCESS, payload: { deliverer } });
    } catch (error) {
      dispatch({
        type: UPDATE_DELIVERER_ERROR,
        payload: { message: error.message },
      });
      throw error;
    }
  };
};
