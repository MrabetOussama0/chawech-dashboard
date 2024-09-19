import {
  GET_MANAGERS,
  GET_MANAGERS_SUCCESS,
  GET_MANAGERS_ERROR,
  ADD_MANAGER,
  ADD_MANAGER_SUCCESS,
  ADD_MANAGER_ERROR,
  DELETE_MANAGER,
  DELETE_MANAGER_SUCCESS,
  DELETE_MANAGER_ERROR,
  UPDATE_MANAGER,
  UPDATE_MANAGER_SUCCESS,
  UPDATE_MANAGER_ERROR,
  GET_MANAGER,
  GET_MANAGER_SUCCESS,
  GET_MANAGER_ERROR,
} from "States/Actions/ManagersActions";

let initialState = {
  getManagersLoading: false,
  getManagerLoading: false,
  addManagerLoading: false,
  deleteManagerLoading: false,
  updateManagerLoading: false,
  manager: null,
  managers: [],
  error: null,
};

const ManagersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MANAGERS:
      return {
        ...state,
        managers: [],
        getManagersLoading: true,
        error: null,
      };
    case GET_MANAGERS_SUCCESS:
      return {
        ...state,
        getManagersLoading: false,
        managers: action.payload.managers,
      };
    case GET_MANAGERS_ERROR:
      return {
        getManagersLoading: false,
        error: action.payload.message,
        managers: [],
      };
    case GET_MANAGER:
      return {
        ...state,
        manager: null,
        getManagerLoading: true,
        error: null,
      };
    case GET_MANAGER_SUCCESS:
      return {
        ...state,
        getManagerLoading: false,
        manager: action.payload.manager,
      };
    case GET_MANAGER_ERROR:
      return {
        getManagerLoading: false,
        error: action.payload.message,
        manager: null,
      };
    case ADD_MANAGER:
      return {
        ...state,
        addManagerLoading: true,
        error: null,
      };
    case ADD_MANAGER_SUCCESS:
      return {
        ...state,
        addManagerLoading: false,
        managers: [...state.managers, action.payload.manager],
      };
    case ADD_MANAGER_ERROR:
      return {
        addManagerLoading: false,
        error: action.payload.message,
        managers: [],
      };
    case DELETE_MANAGER:
      return {
        ...state,
        deleteManagerLoading: true,
        error: null,
      };
    case DELETE_MANAGER_SUCCESS:
      return {
        ...state,
        deleteManagerLoading: false,
        managers: state.managers.filter(
          (manager) => manager.manager._id !== action.payload.id
        ),
      };
    case DELETE_MANAGER_ERROR:
      return {
        deleteManagerLoading: false,
        error: action.payload.message,
        managers: [],
      };
    case UPDATE_MANAGER:
      return {
        ...state,
        updateManagerLoading: true,
        error: null,
      };
    case UPDATE_MANAGER_SUCCESS:
      return {
        ...state,
        updateManagerLoading: false,
        managers: state.managers.map((manager) =>
          manager._id === action.payload.manager._id
            ? { manager: action.payload.manager, shop: manager.shop }
            : manager
        ),
      };
    case UPDATE_MANAGER_ERROR:
      return {
        updateManagerLoading: false,
        error: action.payload.message,
        managers: [],
      };
    default:
      return state;
  }
};

export default ManagersReducer;
