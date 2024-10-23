import {
  GET_ALERTS,
  GET_ALERTS_SUCCESS,
  GET_ALERTS_ERROR,
  ADD_ALERT,
  ADD_ALERT_SUCCESS,
  ADD_ALERT_ERROR,
  DELETE_ALERT,
  DELETE_ALERT_SUCCESS,
  DELETE_ALERT_ERROR,
  UPDATE_ALERT,
  UPDATE_ALERT_SUCCESS,
  UPDATE_ALERT_ERROR,
  GET_ALERT,
  GET_ALERT_SUCCESS,
  GET_ALERT_ERROR,
} from "States/Actions/AlertsActions";

let initialState = {
  getAlertsLoading: false,
  getAlertLoading: false,
  addAlertLoading: false,
  deleteAlertLoading: false,
  updateAlertLoading: false,
  alert: null,
  alerts: [],
  error: null,
};

const AlertsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALERTS:
      return {
        ...state,
        alerts: [],
        getAlertsLoading: true,
        error: null,
      };
    case GET_ALERTS_SUCCESS:
      return {
        ...state,
        getAlertsLoading: false,
        alerts: action.payload.alerts,
      };
    case GET_ALERTS_ERROR:
      return {
        ...state,
        getAlertsLoading: false,
        error: action.payload.message,
        alerts: [],
      };
    case GET_ALERT:
      return {
        ...state,
        alert: null,
        getAlertLoading: true,
        error: null,
      };
    case GET_ALERT_SUCCESS:
      return {
        ...state,
        getAlertLoading: false,
        alert: action.payload.alert,
      };
    case GET_ALERT_ERROR:
      return {
        getAlertLoading: false,
        error: action.payload.message,
        alert: null,
      };
    case ADD_ALERT:
      return {
        ...state,
        addAlertLoading: true,
        error: null,
      };
    case ADD_ALERT_SUCCESS:
      return {
        ...state,
        addAlertLoading: false,
        alerts: [...state.alerts, action.payload.alert],
      };
    case ADD_ALERT_ERROR:
      return {
        ...state,
        addAlertLoading: false,
        error: action.payload.message,
      };
    case DELETE_ALERT:
      return {
        ...state,
        deleteAlertLoading: true,
        error: null,
      };
    case DELETE_ALERT_SUCCESS:
      return {
        ...state,
        deleteAlertLoading: false,
        alerts: state.alerts.filter((alert) => alert._id !== action.payload.id),
      };
    case DELETE_ALERT_ERROR:
      return {
        ...state,
        deleteAlertLoading: false,
        error: action.payload.message,
      };
    case UPDATE_ALERT:
      return {
        ...state,
        updateAlertLoading: true,
        error: null,
      };
    case UPDATE_ALERT_SUCCESS:
      return {
        ...state,
        updateAlertLoading: false,
        alerts: state.alerts.map((alert) =>
          alert._id === action.payload.alert._id ? action.payload.alert : alert
        ),
      };
    case UPDATE_ALERT_ERROR:
      return {
        ...state,
        updateAlertLoading: false,
        error: action.payload.message,
      };
    default:
      return state;
  }
};

export default AlertsReducer;
