import {
  FETCH_HOUSES_ERROR,
  FETCH_HOUSES_REQUEST,
  FETCH_HOUSES_SUCCESS,
} from "../types/fetchHousesTypes";
import axios from "axios";

export const fetchHousesAction = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_HOUSES_REQUEST });
    axios
      .get("https://find-home-apps-staging.herokuapp.com/api/v1/houses/view")
      .then((res) => {
        console.log(res.data);
        dispatch({
          type: FETCH_HOUSES_SUCCESS,
          payload: res.data,
        });
      })
      .catch((error) => {
        console.log("Error:\n", error);
        dispatch({
          type: FETCH_HOUSES_ERROR,
          payload: error,
        });
      });
  };
};
