import React, { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { fetchCourses } from "../../Redux/action";
import { useNavigate } from "react-router-dom";
import ShowSearch from "./ShowSearch";

const Searching = () => {
  let [text, setText] = useState("");
  let [modal, setModal] = useState(false);
  let dispatch = useDispatch();
  let { studentData } = useSelector((state) => state.student);
  let navigate = useNavigate();

  // debouncing in search
  useEffect(() => {
    let id = setTimeout(() => {
      dispatch(fetchCourses(text));
    }, 1000);

    return () => {
      clearTimeout(id);
    };
  }, [text]);

  useEffect(() => {
    let Session_modal = sessionStorage.getItem("modal");
    console.log(Session_modal);
    if (Session_modal !== null) setModal(false);
    else {
      sessionStorage.setItem("modal", true);
      setModal(true);
    }
  }, []);

  let handleProfile = () => {
    navigate("/profile");
  };

  let handleModal = () => {
    setTimeout(() => {
      setModal(false);
      sessionStorage.setItem("modal", false);
    }, 300);
  };

  return (
    <>
      <WRAPPER data={studentData.name}>
        <form>
          <input
            type="text"
            className="input"
            placeholder=" &#128270; Course name or Instructor"
            onChange={(e) => {
              setText(e.target.value);
            }}
            value={text}
          />
        </form>

        {studentData.name && (
          <p className="Profile" onClick={handleProfile}>
            {studentData.name[0].toUpperCase()}
          </p>
        )}
      </WRAPPER>

      {modal && <ShowSearch handleModal={handleModal} />}
    </>
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
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
      rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
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
    margin-left: 1rem;
  }
`;
