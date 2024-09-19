import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import authReducer from "States/Reducers/AuthReducer";
import { setInitialState } from "./Actions/AuthActions";
import UserReducer from "./Reducers/UserReducer";
import ShopsReducer from "./Reducers/ShopsReducer";
import ManagersReducer from "./Reducers/ManagersReducer";
import HomeReducer from "./Reducers/HomeReducer";
import CategoriesReducer from "./Reducers/CategoriesReducer";
import AlertsReducer from "./Reducers/AlertReducer";

const middleware = [thunk];

const rootReducer = combineReducers({
  auth: authReducer,
  user: UserReducer,
  shops: ShopsReducer,
  managers: ManagersReducer,
  home: HomeReducer,
  categories: CategoriesReducer,
  alerts: AlertsReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleware),
  devTools: process.env.NODE_ENV !== "production",
});

store.dispatch(setInitialState());
export default store;
