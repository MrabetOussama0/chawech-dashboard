import {
  GET_CATEGORIES,
  GET_CATEGORIES_SUCCESS,
  GET_CATEGORIES_ERROR,
  ADD_CATEGORY,
  ADD_CATEGORY_SUCCESS,
  ADD_CATEGORY_ERROR,
  DELETE_CATEGORY,
  DELETE_CATEGORY_SUCCESS,
  DELETE_CATEGORY_ERROR,
  UPDATE_CATEGORY,
  UPDATE_CATEGORY_SUCCESS,
  UPDATE_CATEGORY_ERROR,
  GET_CATEGORY,
  GET_CATEGORY_SUCCESS,
  GET_CATEGORY_ERROR,
} from "States/Actions/CategoriesActions";

let initialState = {
  getCategoriesLoading: false,
  getCategoryLoading: false,
  addCategoryLoading: false,
  deleteCategoryLoading: false,
  updateCategoryLoading: false,
  category: null,
  categories: [],
  error: null,
};

const CategoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CATEGORIES:
      return {
        ...state,
        categories: [],
        getCategoriesLoading: true,
        error: null,
      };
    case GET_CATEGORIES_SUCCESS:
      return {
        ...state,
        getCategoriesLoading: false,
        categories: action.payload.categories,
      };
    case GET_CATEGORIES_ERROR:
      return {
        ...state,
        getCategoriesLoading: false,
        error: action.payload.message,
        categories: [],
      };
    case GET_CATEGORY:
      return {
        ...state,
        category: null,
        getCategoryLoading: true,
        error: null,
      };
    case GET_CATEGORY_SUCCESS:
      return {
        ...state,
        getCategoryLoading: false,
        category: action.payload.category,
      };
    case GET_CATEGORY_ERROR:
      return {
        ...state,
        getCategoryLoading: false,
        error: action.payload.message,
        category: null,
      };
    case ADD_CATEGORY:
      return {
        ...state,
        addCategoryLoading: true,
        error: null,
      };
    case ADD_CATEGORY_SUCCESS:
      return {
        ...state,
        addCategoryLoading: false,
        categories: [...state.categories, action.payload.category],
      };
    case ADD_CATEGORY_ERROR:
      return {
        ...state,
        addCategoryLoading: false,
        error: action.payload.message,
      };
    case DELETE_CATEGORY:
      return {
        ...state,
        deleteCategoryLoading: true,
        error: null,
      };
    case DELETE_CATEGORY_SUCCESS:
      return {
        ...state,
        deleteCategoryLoading: false,
        categories: state.categories.filter(
          (category) => category._id !== action.payload.id
        ),
      };
    case DELETE_CATEGORY_ERROR:
      return {
        ...state,
        deleteCategoryLoading: false,
        error: action.payload.message,
      };
    case UPDATE_CATEGORY:
      return {
        ...state,
        updateCategoryLoading: true,
        error: null,
      };
    case UPDATE_CATEGORY_SUCCESS:
      return {
        ...state,
        updateCategoryLoading: false,
        categories: state.categories.map((category) =>
          category._id === action.payload.category._id
            ? action.payload.category
            : category
        ),
      };
    case UPDATE_CATEGORY_ERROR:
      return {
        ...state,
        updateCategoryLoading: false,
        error: action.payload.message,
      };
    default:
      return state;
  }
};

export default CategoriesReducer;
