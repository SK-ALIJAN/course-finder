import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCourses } from '../Redux/action';

const CourseList = () => {
  const dispatch = useDispatch();
  const courses = useSelector(state => state.courses.courses);

  useEffect(() => {
    dispatch(fetchCourses());
  }, [dispatch]);

  return (
    <div>
      <h2>Course List</h2>
      <ul>
        {courses.map(course => (
          <li key={course.id}>
            <p>{course.name} - {course.instructor}</p>
            {/* Add onClick to navigate to CourseDetails component */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseList;
