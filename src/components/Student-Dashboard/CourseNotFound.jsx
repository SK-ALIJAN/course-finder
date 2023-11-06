import React from "react";
import { BiSad } from "react-icons/bi";
import styled from "styled-components";
const CourseNotFound = () => {
  return (
    <DIV>
      <p>
        <BiSad />
      </p>
      <h1>Opps not found!</h1>
    </DIV>
  );
};

export default CourseNotFound;

let DIV = styled.div`
  text-align: center;
  p {
    font-size: 10rem;
  }
`;
