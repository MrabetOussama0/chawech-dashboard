import {
  GET_DELIVERERS,
  GET_DELIVERERS_SUCCESS,
  GET_DELIVERERS_ERROR,
  ADD_DELIVERER,
  ADD_DELIVERER_SUCCESS,
  ADD_DELIVERER_ERROR,
  DELETE_DELIVERER,
  DELETE_DELIVERER_SUCCESS,
  DELETE_DELIVERER_ERROR,
  UPDATE_DELIVERER,
  UPDATE_DELIVERER_SUCCESS,
  UPDATE_DELIVERER_ERROR,
  GET_DELIVERER,
  GET_DELIVERER_SUCCESS,
  GET_DELIVERER_ERROR,
} from "States/Actions/DeliverersActions";

let initialState = {
  getDeliverersLoading: false,
  getDelivererLoading: false,
  addDelivererLoading: false,
  deleteDelivererLoading: false,
  updateDelivererLoading: false,
  deliverer: null,
  deliverers: [],
  error: null,
};

const DeliverersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DELIVERERS:
      return {
        ...state,
        deliverers: [],
        getDeliverersLoading: true,
        error: null,
      };
    case GET_DELIVERERS_SUCCESS:
      return {
        ...state,
        getDeliverersLoading: false,
        deliverers: action.payload.deliverers,
      };
    case GET_DELIVERERS_ERROR:
      return {
        ...state,
        getDeliverersLoading: false,
        error: action.payload.message,
        deliverers: [],
      };
    case GET_DELIVERER:
      return {
        ...state,
        deliverer: null,
        getDelivererLoading: true,
        error: null,
      };
    case GET_DELIVERER_SUCCESS:
      return {
        ...state,
        getDelivererLoading: false,
        deliverer: action.payload.deliverer,
      };
    case GET_DELIVERER_ERROR:
      return {
        ...state,
        getDelivererLoading: false,
        error: action.payload.message,
        deliverer: null,
      };
    case ADD_DELIVERER:
      return {
        ...state,
        addDelivererLoading: true,
        error: null,
      };
    case ADD_DELIVERER_SUCCESS:
      return {
        ...state,
        addDelivererLoading: false,
        deliverers: [...state.deliverers, action.payload.deliverer],
      };
    case ADD_DELIVERER_ERROR:
      return {
        ...state,
        addDelivererLoading: false,
        error: action.payload.message,
      };
    case DELETE_DELIVERER:
      return {
        ...state,
        deleteDelivererLoading: true,
        error: null,
      };
    case DELETE_DELIVERER_SUCCESS:
      return {
        ...state,
        deleteDelivererLoading: false,
        deliverers: state.deliverers.filter(
          (deliverer) => deliverer.deliverer._id !== action.payload.id
        ),
      };
    case DELETE_DELIVERER_ERROR:
      return {
        ...state,
        deleteDelivererLoading: false,
        error: action.payload.message,
      };
    case UPDATE_DELIVERER:
      return {
        ...state,
        updateDelivererLoading: true,
        error: null,
      };
    case UPDATE_DELIVERER_SUCCESS:
      return {
        ...state,
        updateDelivererLoading: false,
        deliverers: state.deliverers.map((deliverer) =>
          deliverer._id === action.payload.deliverer._id
            ? { deliverer: action.payload.deliverer, shop: deliverer.shop }
            : deliverer
        ),
      };
    case UPDATE_DELIVERER_ERROR:
      return {
        ...state,
        updateDelivererLoading: false,
        error: action.payload.message,
      };
    default:
      return state;
  }
};

export default DeliverersReducer;
