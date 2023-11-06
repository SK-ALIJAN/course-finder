import React from "react";

const CourseDetails = ({ course }) => {
  console.log(course);
  return (
    <div>
      <h2>Course Details</h2>
      <img src={course.thumbnail} alt={course.name} />
      <p>Name: {course.name}</p>
      <p>Instructor: {course.instructor}</p>
      <p>Description: {course.description}</p>
      <p>Duration: {course.duration}</p>
      <p>EnrollmentStatus: {course.enrollmentStatus}</p>
      <p>schedule: {course.schedule}</p>
      <p>{course.location}</p>
      <p>student enroll: {course.students.length}</p>
      <div>
        {course.prerequisites.map((ele, i) => {
          return <p key={i}>{ele}</p>;
        })}
      </div>

      <div>
        <div>
          {course.syllabus.map((ele, i) => {
            return (
              <div key={i}>
                <p> {ele.topic}</p>
                <li>{ele.content}</li>
              </div>
            );
          })}
        </div>
      </div>

      <button>Enroll it right now</button>
    </div>
  );
};

export default CourseDetails;
