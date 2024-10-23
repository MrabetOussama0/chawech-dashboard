import {
  GET_SHOPS,
  GET_SHOPS_SUCCESS,
  GET_SHOPS_ERROR,
  ADD_SHOP,
  ADD_SHOP_SUCCESS,
  ADD_SHOP_ERROR,
  DELETE_SHOP,
  DELETE_SHOP_SUCCESS,
  DELETE_SHOP_ERROR,
  UPDATE_SHOP,
  UPDATE_SHOP_SUCCESS,
  UPDATE_SHOP_ERROR,
  GET_SHOP,
  GET_SHOP_SUCCESS,
  GET_SHOP_ERROR,
} from "States/Actions/ShopsActions";

let initialState = {
  getShopsLoading: false,
  getShopLoading: false,
  addShopLoading: false,
  deleteShopLoading: false,
  updateShopLoading: false,
  shop: null,
  shops: [],
  error: null,
};

const ShopsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SHOPS:
      return {
        ...state,
        shops: [],
        getShopsLoading: true,
        error: null,
      };
    case GET_SHOPS_SUCCESS:
      return {
        ...state,
        getShopsLoading: false,
        shops: action.payload.shops,
      };
    case GET_SHOPS_ERROR:
      return {
        ...state,
        getShopsLoading: false,
        error: action.payload.message,
        shops: [],
      };
    case GET_SHOP:
      return {
        ...state,
        shop: null,
        getShopLoading: true,
        error: null,
      };
    case GET_SHOP_SUCCESS:
      return {
        ...state,
        getShopLoading: false,
        shop: action.payload.shop,
      };
    case GET_SHOP_ERROR:
      return {
        ...state,
        getShopLoading: false,
        error: action.payload.message,
        shop: null,
      };
    case ADD_SHOP:
      return {
        ...state,
        addShopLoading: true,
        error: null,
      };
    case ADD_SHOP_SUCCESS:
      return {
        ...state,
        addShopLoading: false,
        shops: [...state.shops, action.payload.shop],
      };
    case ADD_SHOP_ERROR:
      return {
        ...state,
        addShopLoading: false,
        error: action.payload.message,
      };
    case DELETE_SHOP:
      return {
        ...state,
        deleteShopLoading: true,
        error: null,
      };
    case DELETE_SHOP_SUCCESS:
      return {
        ...state,
        deleteShopLoading: false,
        shops: state.shops.filter((shop) => shop._id !== action.payload.id),
      };
    case DELETE_SHOP_ERROR:
      return {
        ...state,
        deleteShopLoading: false,
        error: action.payload.message,
      };
    case UPDATE_SHOP:
      return {
        ...state,
        updateShopLoading: true,
        error: null,
      };
    case UPDATE_SHOP_SUCCESS:
      return {
        ...state,
        updateShopLoading: false,
        shops: state.shops.map((shop) =>
          shop._id === action.payload.shop._id ? action.payload.shop : shop
        ),
      };
    case UPDATE_SHOP_ERROR:
      return {
        ...state,
        updateShopLoading: false,
        error: action.payload.message,
      };
    default:
      return state;
  }
};

export default ShopsReducer;
