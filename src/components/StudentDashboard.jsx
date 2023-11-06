import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { enrollCourse, completeCourse } from "../actions/studentActions";

const StudentDashboard = () => {
  const dispatch = useDispatch();
  const enrolledCourses = useSelector((state) => state.student.enrolledCourses);

  const handleEnrollCourse = (courseId) => {
    dispatch(enrollCourse(courseId));
  };

  const handleCompleteCourse = (courseId) => {
    dispatch(completeCourse(courseId));
  };

  return (
    <div>
      <h2>Student Dashboard</h2>
      <ul>
        {enrolledCourses.map((course) => (
          <li key={course.id}>
            <p>
              {course.name} - {course.instructor}
            </p>
            <button onClick={() => handleCompleteCourse(course.id)}>
              Complete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentDashboard;
