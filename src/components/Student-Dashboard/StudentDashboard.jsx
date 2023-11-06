import React from "react";
import Searching from "./Searching";
import styled from "styled-components";
import CourseList from "../CourseList";

const StudentDashboard = () => {
  return (
    <WRAPPER>
      <h2 className="heading">Student Dashboard</h2>
      <Searching />
      <CourseList />
    </WRAPPER>
  );
};

export default StudentDashboard;

let WRAPPER = styled.div`
  padding: 20px;
  .heading {
    text-align: center;
    margin-bottom: 5px;
  }
`;
