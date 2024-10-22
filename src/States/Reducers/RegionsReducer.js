import {
  GET_REGIONS,
  GET_REGIONS_SUCCESS,
  GET_REGIONS_ERROR,
  ADD_REGION,
  ADD_REGION_SUCCESS,
  ADD_REGION_ERROR,
  DELETE_REGION,
  DELETE_REGION_SUCCESS,
  DELETE_REGION_ERROR,
  UPDATE_REGION,
  UPDATE_REGION_SUCCESS,
  UPDATE_REGION_ERROR,
  GET_REGION,
  GET_REGION_SUCCESS,
  GET_REGION_ERROR,
} from "States/Actions/RegionsActions";

let initialState = {
  getRegionsLoading: false,
  getRegionLoading: false,
  addRegionLoading: false,
  deleteRegionLoading: false,
  updateRegionLoading: false,
  region: null,
  regions: [],
  error: null,
};

const RegionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_REGIONS:
      return {
        ...state,
        regions: [],
        getRegionsLoading: true,
        error: null,
      };
    case GET_REGIONS_SUCCESS:
      return {
        ...state,
        getRegionsLoading: false,
        regions: action.payload.regions,
      };
    case GET_REGIONS_ERROR:
      return {
        getRegionsLoading: false,
        error: action.payload.message,
        regions: [],
      };
    case GET_REGION:
      return {
        ...state,
        region: null,
        getRegionLoading: true,
        error: null,
      };
    case GET_REGION_SUCCESS:
      return {
        ...state,
        getRegionLoading: false,
        region: action.payload.region,
      };
    case GET_REGION_ERROR:
      return {
        getRegionLoading: false,
        error: action.payload.message,
        region: null,
      };
    case ADD_REGION:
      return {
        ...state,
        addRegionLoading: true,
        error: null,
      };
    case ADD_REGION_SUCCESS:
      return {
        ...state,
        addRegionLoading: false,
        regions: [...state.regions, action.payload.region],
      };
    case ADD_REGION_ERROR:
      return {
        addRegionLoading: false,
        error: action.payload.message,
        regions: [],
      };
    case DELETE_REGION:
      return {
        ...state,
        deleteRegionLoading: true,
        error: null,
      };
    case DELETE_REGION_SUCCESS:
      return {
        ...state,
        deleteRegionLoading: false,
        regions: state.regions.filter(
          (region) => region._id !== action.payload.id
        ),
      };
    case DELETE_REGION_ERROR:
      return {
        deleteRegionLoading: false,
        error: action.payload.message,
        regions: [],
      };
    case UPDATE_REGION:
      return {
        ...state,
        updateRegionLoading: true,
        error: null,
      };
    case UPDATE_REGION_SUCCESS:
      return {
        ...state,
        updateRegionLoading: false,
        regions: state.regions.map((region) =>
          region._id === action.payload.region._id
            ? action.payload.region
            : region
        ),
      };
    case UPDATE_REGION_ERROR:
      return {
        updateRegionLoading: false,
        error: action.payload.message,
        regions: [],
      };
    default:
      return state;
  }
};

export default RegionsReducer;
