import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { fetchCourses } from "../../Redux/action";

const Searching = () => {
  let [text, setText] = useState("");
  let dispatch = useDispatch();

  let handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchCourses(text));
  };

  return (
    <WRAPPER>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="input"
          placeholder="Find your Course..."
          onChange={(e) => {
            setText(e.target.value);
          }}
          value={text}
        />
        <button className="submitBtn" type="submit">
          <BsSearch className="btn" />
        </button>
      </form>
    </WRAPPER>
  );
};

export default Searching;

let WRAPPER = styled.div`
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  .input {
    width: 25rem;
    height: 3rem;
    padding-left: 10px;
    border: 2px solid teal;
    border-radius: 7px;
    outline: 0;
    font-weight: 600;
    letter-spacing: 2px;
    color: teal;
    caret-color: teal;
    background-color: transparent;
  }
  .input::placeholder {
    font-weight: 600;
    letter-spacing: 2px;
    color: teal;
  }
  .input:focus {
    border: 2px solid teal;
  }
  .submitBtn {
    /* height: 3rem;
    width: 3rem; */
    border: 0;
    border-radius: 7px;
    background-color: inherit;
    position: relative;
    right: 30px;
    top: 5px;
    cursor: pointer;
    .btn {
      font-size: 1.5rem;
      font-weight: 600;
      color: teal;
    }
  }
`;
