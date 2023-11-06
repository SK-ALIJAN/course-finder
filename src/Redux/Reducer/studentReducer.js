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
  studentData: JSON.parse(localStorage.getItem("student")) ?? {
    name: "",
    email: "",
  },
  CompletedCourseDisplay: [],
};

const studentReducer = (state = initialState, action) => {
  switch (action.type) {
    case ENROLL_COURSE:
      let enrolled = [...state.enrolledCourses, action.payload.course];
      let user = { ...state.studentData, ...action.payload };
      localStorage.setItem("enrollCourse", JSON.stringify(enrolled));
      localStorage.setItem("student", JSON.stringify(user));
      return {
        ...state,
        enrolledCourses: [...state.enrolledCourses, action.payload.course],
        studentData: { ...action.payload },
      };

    case COMPLETE_COURSE:
      let completed = [...state.completedCourse, action.payload];
      localStorage.setItem("completedCourse", JSON.stringify(completed));
      return {
        ...state,
        completedCourse: [...state.completedCourse, action.payload],
      };


    default:
      return state;
  }
};

export default studentReducer;
