import React from "react";
import { BiCommentError } from "react-icons/bi";
import styled from "styled-components";
const Error = ({ message }) => {
  return (
    <DIV>
      <p>
        <BiCommentError />
      </p>
      <h1>{message}</h1>
    </DIV>
  );
};

export default Error;

let DIV = styled.div`
  text-align: center;
  p {
    font-size: 10rem;
  }
`;
