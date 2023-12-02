import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCourses } from "../Redux/action";
import Loader from "./Loader";
import Error from "./Error";
import CourseNotFound from "./Student-Dashboard/CourseNotFound";
import styled from "styled-components";

import Course from "./Course";

const CourseList = () => {
  const dispatch = useDispatch();
  const { isloading, iserror, error_message, courses } = useSelector(
    (state) => state.courses
  );

  useEffect(() => {
    dispatch(fetchCourses());
  }, [dispatch]);

  return (
    <DIV>
      <h2 className="headings">Course List</h2>
      <div className="container">
        {isloading ? (
          <Loader />
        ) : iserror && error_message ? (
          <Error message={error_message} />
        ) : courses.length === 0 ? (
          <CourseNotFound />
        ) : (
          <WRAPPER>
            {courses.map((ele, i) => {
              return <Course key={i} ele={ele} i={i} />;
            })}
          </WRAPPER>
        )}
      </div>
    </DIV>
  );
};

export default CourseList;

const DIV = styled.div`
  .headings {
    margin-bottom: 1rem;
  }
`;

const WRAPPER = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 3rem;
  position: relative;
  .course {
    text-align: center;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
      rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
    padding-bottom: 1rem;
    transition: transform 0.3s ease;
    background-color: white;
    img {
      width: 100%;
      height: 20rem;
      cursor: pointer;
    }

    button {
      background-color: #eceb98;
      border: 0;
      padding: 5px 10px;
      font-weight: 600;
      letter-spacing: 2px;
      cursor: pointer;
    }
  }

  .course:hover {
    box-shadow: 5px 10px 100px #abaaaa6e;
  }

  .likes-share {
    display: flex;
    justify-content: center;
    margin-bottom: 1rem;

    p {
      margin-left: 2rem;
      font-weight: 600;
      font-size: 1.5rem;
    }

    .likeicon {
      margin-left: 1rem;
      cursor: pointer;
      transition: ease-in-out;
      background-color: transparent;
      font-size: 1.3rem;

      &:active {
        transform: scale(1.5);
      }
    }
    .shareicon {
      &:hover {
        color: #b4690e;
        transform: scale(1.5);
        cursor: pointer;
      }
    }
  }
`;
