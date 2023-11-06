import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { fetchCourses } from "../../Redux/action";
import { useNavigate } from "react-router-dom";

const Searching = () => {
  let [text, setText] = useState("");
  let dispatch = useDispatch();
  let { studentData } = useSelector((state) => state.student);
  let navigate = useNavigate();

  let handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchCourses(text));
  };

  let handleProfile = () => {
    navigate("/profile");
  };

  return (
    <WRAPPER data={studentData.name}>
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

      {studentData.name ? (
        <p className="Profile" onClick={handleProfile}>
          {studentData.name[0].toUpperCase()}
        </p>
      ) : (
        ""
      )}
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
    width: ${(data) => (data ? "20rem" : "25rem")};
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

  .Profile {
    background-color: teal;
    width: 2rem;
    height: 2rem;
    display: grid;
    place-content: center;
    color: white;
    border-radius: 100%;
    cursor: pointer;
  }
`;
