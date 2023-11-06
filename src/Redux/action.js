import axios from "axios";
import {
  FETCH_COURSES_FAILURE,
  FETCH_COURSES_REQUEST,
  FETCH_COURSES_SUCCESS,
} from "./actionType";

export const fetchCourses = (SearchParam) => {
  // console.log(SearchParam);
  return (dispatch) => {
    dispatch({ type: FETCH_COURSES_REQUEST });
    axios
      .get("https://65483d18dd8ebcd4ab22a7ac.mockapi.io/course", {
        params: {
          category: SearchParam,
        },
      })
      .then((response) => {
        dispatch({
          type: FETCH_COURSES_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: FETCH_COURSES_FAILURE,
          payload: error.message,
        });
      });
  };
};


