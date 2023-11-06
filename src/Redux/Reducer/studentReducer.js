import { CourseDisplay } from "../action";
import {
  COMPLETED_COURSE_DISPLAY,
  COMPLETE_COURSE,
  DISPLAY_ENROLL_COURSE,
  ENROLL_COURSE,
} from "../actionType";

const initialState = {
  enrolledCourses: JSON.parse(localStorage.getItem("enrollCourse")) ?? [],
  completedCourse: JSON.parse(localStorage.getItem("completedCourse")) ?? [],
  enrollmentCourseDisplay: [],
  CompletedCourseDisplay: [],
};

const studentReducer = (state = initialState, action) => {
  switch (action.type) {
    case ENROLL_COURSE:
      let enrolled = [...state.enrolledCourses, action.payload];
      localStorage.setItem("enrollCourse", JSON.stringify(enrolled));

      return {
        ...state,
        enrolledCourses: [...state.enrolledCourses, action.payload],
      };

    case DISPLAY_ENROLL_COURSE:
      let data = async () => {
        let courseData = await CourseDisplay(state.enrolledCourses);
        return courseData;
      };
      return {
        ...state,
        enrollmentCourseDisplay: [...state.enrollmentCourseDisplay, data()],
      };

    case COMPLETE_COURSE:
      let completed = [...state.completedCourse, action.payload];
      localStorage.setItem("completedCourse", JSON.stringify(completed));
      return {
        ...state,
        completedCourse: [...state.completedCourse, action.payload],
      };

    case COMPLETED_COURSE_DISPLAY:
      let response = async () => {
        let courseData = await CourseDisplay(state.completedCourse);
        return courseData;
      };
      return {
        ...state,
        enrollmentCourseDisplay: [...state.enrollmentCourseDisplay, response()],
      };

    default:
      return state;
  }
};

export default studentReducer;
