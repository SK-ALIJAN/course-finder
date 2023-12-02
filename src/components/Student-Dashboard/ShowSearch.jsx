import React from "react";
import image from "../../assets/11000.jpg";
import styled from "styled-components";

const ShowSearch = ({ handleModal }) => {
  return (
    <WRAPPER>
      <div>
        <img src={image} alt="images" loading="lazy" />
        <h1>Search your course here</h1>
        <button onClick={handleModal}>Okey but later!</button>
      </div>
    </WRAPPER>
  );
};

export default ShowSearch;

let WRAPPER = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background-color: #008080c7;
  z-index: 3;
  display: grid;
  place-content: center;

  div {
    background-color: white;
    padding: 2rem;
    text-align: center;
  }

  div img {
    width: 20rem;
  }

  div button {
    margin-top: 1rem;
    padding: 5px 20px;
    border: 0;
    background-color: teal;
    color: white;
    font-weight: 600;
    letter-spacing: 2px;
    cursor: pointer;
    &:active {
      transform: scale(1.1);
    }
  }
`;
