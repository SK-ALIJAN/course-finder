import React, { useState } from "react";
import { shallowEqual, useSelector } from "react-redux";
import styled from "styled-components";

const Profile = () => {
  let { studentData, enrolledCourses } = useSelector((store) => {
    return {
      studentData: store.student.studentData,
      enrolledCourses: store.student.enrolledCourses,
    };
  }, shallowEqual);

  let [mark, setMark] = useState(false);

  return (
    <Wrapper>
      <ProfileHeader>
        <h1>Student Profile</h1>
        <p>{studentData.name}</p>
        <p>{studentData.email}</p>
      </ProfileHeader>

      <CoursesDisplay>
        {enrolledCourses.map((course) => (
          <CourseCard key={course.id}>
            <CourseImage src={course.thumbnail} alt={course.name} />
            <CourseDetails>
              <h2>{course.name}</h2>
              <p>Instructor: {course.instructor}</p>
              <Button
                onClick={() => {
                  setMark(!mark);
                }}
              >
                {mark ? "completed" : "Mark as Completed"}
              </Button>
            </CourseDetails>
          </CourseCard>
        ))}
      </CoursesDisplay>
    </Wrapper>
  );
};

export default Profile;

const Wrapper = styled.div`
  width: 70%;
  margin: 0 auto;
  text-align: center;
`;

const ProfileHeader = styled.div`
  background-color: #2c3e50;
  color: #fff;
  padding: 20px;
`;

const CoursesDisplay = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 20px;
  margin-top: 20px;
`;

const CourseCard = styled.div`
  background: #fff;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const CourseImage = styled.img`
  width: 70%;
  border-radius: 8px;
  margin-bottom: 10px;
`;

const CourseDetails = styled.div`
  h2 {
    margin: 0 0 10px;
  }
`;

const Button = styled.button`
  background-color: #2c3e50;
  color: #fff;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #34495e;
  }
  &:active {
    transform: scale(1.1);
  }
`;
