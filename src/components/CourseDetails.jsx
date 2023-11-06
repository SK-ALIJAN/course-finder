// CourseDetails.js

import React from 'react';

const CourseDetails = ({ course }) => {
  return (
    <div>
      <h2>Course Details</h2>
      <p>Name: {course.name}</p>
      <p>Instructor: {course.instructor}</p>
      {/* Display other details */}
    </div>
  );
};

export default CourseDetails;
