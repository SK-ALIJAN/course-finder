import {
  FETCH_COURSES_FAILURE,
  FETCH_COURSES_REQUEST,
  FETCH_COURSES_SUCCESS,
} from "../actionType";

const initialState = {
  loading: false,
  courses: [],
  error: false,
  error_message: "",
};

const courseReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COURSES_REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
      };

    case FETCH_COURSES_SUCCESS:
      return {
        ...state,
        courses: action.payload,
        error: false,
        loading: false,
      };
    case FETCH_COURSES_FAILURE:
      return {
        ...state,
        courses: [],
        error: true,
        loading: false,
        error_message: action.payload,
      };
    default:
      return state;
  }
};

export default courseReducer;
