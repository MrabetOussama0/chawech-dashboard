import ShopService from "States/Services/ShopsService";

export const GET_SHOPS = "GET_SHOPS";
export const GET_SHOPS_SUCCESS = "GET_SHOPS_SUCCESS";
export const GET_SHOPS_ERROR = "GET_SHOPS_ERROR";

export const GET_SHOP = "GET_SHOP";
export const GET_SHOP_SUCCESS = "GET_SHOP_SUCCESS";
export const GET_SHOP_ERROR = "GET_SHOP_ERROR";

export const ADD_SHOP = "ADD_SHOP";
export const ADD_SHOP_SUCCESS = "ADD_SHOP_SUCCESS";
export const ADD_SHOP_ERROR = "ADD_SHOP_ERROR";

export const DELETE_SHOP = "DELETE_SHOP";
export const DELETE_SHOP_SUCCESS = "DELETE_SHOP_SUCCESS";
export const DELETE_SHOP_ERROR = "DELETE_SHOP_ERROR";

export const UPDATE_SHOP = "UPDATE_SHOP";
export const UPDATE_SHOP_SUCCESS = "UPDATE_SHOP_SUCCESS";
export const UPDATE_SHOP_ERROR = "UPDATE_SHOP_ERROR";

export const getShops = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: GET_SHOPS });
      const shops = await ShopService.getShops();
      dispatch({ type: GET_SHOPS_SUCCESS, payload: { shops } });
    } catch (error) {
      dispatch({ type: GET_SHOPS_ERROR, payload: { message: error.message } });
      throw error;
    }
  };
};

export const getShop = (id) => {
  return async (dispatch) => {
    try {
      dispatch({ type: GET_SHOP });
      const shop = await ShopService.getShop(id);
      dispatch({ type: GET_SHOP_SUCCESS, payload: { shop } });
    } catch (error) {
      dispatch({ type: GET_SHOP_ERROR, payload: { message: error.message } });
      throw error;
    }
  };
};

export const addShop = (data) => {
  return async (dispatch) => {
    try {
      dispatch({ type: ADD_SHOP });
      const shop = await ShopService.addShop(data);
      dispatch({ type: ADD_SHOP_SUCCESS, payload: { shop } });
    } catch (error) {
      dispatch({ type: ADD_SHOP_ERROR, payload: { message: error.message } });
      throw error;
    }
  };
};

export const deleteShop = (id) => {
  return async (dispatch) => {
    try {
      dispatch({ type: DELETE_SHOP });
      await ShopService.deleteShop(id);
      dispatch({ type: DELETE_SHOP_SUCCESS, payload: { id } });
    } catch (error) {
      dispatch({
        type: DELETE_SHOP_ERROR,
        payload: { message: error.message },
      });
      throw error;
    }
  };
};

export const updateShop = (id, data) => {
  return async (dispatch) => {
    try {
      dispatch({ type: UPDATE_SHOP });
      const shop = await ShopService.updateShop(id, data);
      dispatch({ type: UPDATE_SHOP_SUCCESS, payload: { shop } });
    } catch (error) {
      dispatch({
        type: UPDATE_SHOP_ERROR,
        payload: { message: error.message },
      });
      throw error;
    }
  };
};
