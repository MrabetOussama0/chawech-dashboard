import CategoryService from "States/Services/CategoriesService";

export const GET_CATEGORIES = "GET_CATEGORIES";
export const GET_CATEGORIES_SUCCESS = "GET_CATEGORIES_SUCCESS";
export const GET_CATEGORIES_ERROR = "GET_CATEGORIES_ERROR";

export const GET_CATEGORY = "GET_CATEGORY";
export const GET_CATEGORY_SUCCESS = "GET_CATEGORY_SUCCESS";
export const GET_CATEGORY_ERROR = "GET_CATEGORY_ERROR";

export const ADD_CATEGORY = "ADD_CATEGORY";
export const ADD_CATEGORY_SUCCESS = "ADD_CATEGORY_SUCCESS";
export const ADD_CATEGORY_ERROR = "ADD_CATEGORY_ERROR";

export const DELETE_CATEGORY = "DELETE_CATEGORY";
export const DELETE_CATEGORY_SUCCESS = "DELETE_CATEGORY_SUCCESS";
export const DELETE_CATEGORY_ERROR = "DELETE_CATEGORY_ERROR";

export const UPDATE_CATEGORY = "UPDATE_CATEGORY";
export const UPDATE_CATEGORY_SUCCESS = "UPDATE_CATEGORY_SUCCESS";
export const UPDATE_CATEGORY_ERROR = "UPDATE_CATEGORY_ERROR";

export const getCategories = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: GET_CATEGORIES });
      const categories = await CategoryService.getCategories();
      dispatch({ type: GET_CATEGORIES_SUCCESS, payload: { categories } });
    } catch (error) {
      dispatch({
        type: GET_CATEGORIES_ERROR,
        payload: { message: error.message },
      });
      throw error;
    }
  };
};

export const getCategory = (id) => {
  return async (dispatch) => {
    try {
      dispatch({ type: GET_CATEGORY });
      const category = await CategoryService.getCategory(id);
      dispatch({ type: GET_CATEGORY_SUCCESS, payload: { category } });
    } catch (error) {
      dispatch({
        type: GET_CATEGORY_ERROR,
        payload: { message: error.message },
      });
      throw error;
    }
  };
};

export const addCategory = (data) => {
  return async (dispatch) => {
    try {
      dispatch({ type: ADD_CATEGORY });
      const category = await CategoryService.addCategory(data);
      dispatch({ type: ADD_CATEGORY_SUCCESS, payload: { category } });
    } catch (error) {
      dispatch({
        type: ADD_CATEGORY_ERROR,
        payload: { message: error.message },
      });
      throw error;
    }
  };
};

export const deleteCategory = (id) => {
  return async (dispatch) => {
    try {
      dispatch({ type: DELETE_CATEGORY });
      await CategoryService.deleteCategory(id);
      dispatch({ type: DELETE_CATEGORY_SUCCESS, payload: { id } });
    } catch (error) {
      dispatch({
        type: DELETE_CATEGORY_ERROR,
        payload: { message: error.message },
      });
      throw error;
    }
  };
};

export const updateCategory = (id, data) => {
  return async (dispatch) => {
    try {
      dispatch({ type: UPDATE_CATEGORY });
      const category = await CategoryService.updateCategory(id, data);
      dispatch({ type: UPDATE_CATEGORY_SUCCESS, payload: { category } });
    } catch (error) {
      dispatch({
        type: UPDATE_CATEGORY_ERROR,
        payload: { message: error.message },
      });
      throw error;
    }
  };
};
