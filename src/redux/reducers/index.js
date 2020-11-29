import { combineReducers } from "redux";
import { fetchHousesReducer } from "./fetchHousesReducers";

const allReducers = combineReducers({
  fetchHouses: fetchHousesReducer,
});

export default allReducers;
