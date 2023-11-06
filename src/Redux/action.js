import axios from "axios";
import {
  FETCH_COURSES_FAILURE,
  FETCH_COURSES_REQUEST,
  FETCH_COURSES_SUCCESS,
} from "./actionType";

export const fetchCourses = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_COURSES_REQUEST });
    axios
      .get("https://65483d18dd8ebcd4ab22a7ac.mockapi.io/course")
      .then((response) => {
        dispatch({
          type: FETCH_COURSES_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: FETCH_COURSES_FAILURE,
          payload: error,
        });
      });
  };
};

export const CourseDisplay = (courses) => {
  axios
    .get("https://65483d18dd8ebcd4ab22a7ac.mockapi.io/course")
    .then((response) => {
      let responseLength = response.data.length;
      let courseLength = courses.length;
      let filtereddata = [];

      for (let i = 0; i < responseLength; i++) {
        for (let j = 0; j < courseLength; j++) {
          if (response.data[i].id == courses[j]) {
            filtereddata.push(response.data[i]);
          }
        }
      }

      return filtereddata;
    })
    .catch((error) => {
      console.log(error.message);
    });
};
