import {
  FETCH_COURSES_FAILURE,
  FETCH_COURSES_REQUEST,
  FETCH_COURSES_SUCCESS,
} from "../actionType";

const initialState = {
  isloading: false,
  courses: [],
  iserror: false,
  error_message: "",
};

const courseReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COURSES_REQUEST:
      return {
        ...state,
        isloading: true,
        iserror: false,
        error_message: "",
      };

    case FETCH_COURSES_SUCCESS:
      return {
        ...state,
        courses: action.payload,
        iserror: false,
        isloading: false,
        error_message: "",
      };
    case FETCH_COURSES_FAILURE:
      return {
        ...state,
        courses: [],
        iserror: true,
        isloading: false,
        error_message: action.payload,
      };
    default:
      return state;
  }
};

export default courseReducer;
