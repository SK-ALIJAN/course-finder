import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCourses } from "../Redux/action";
import Loader from "./Loader";
import Error from "./Error";
import CourseNotFound from "./Student-Dashboard/CourseNotFound";
import Rating from "./Rating";
import styled from "styled-components";
import { Link } from "react-router-dom";

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
              return (
                <div key={ele.id} className="course">
                  <Link to={"/details"} state={ele}>
                    <img src={ele.thumbnail} alt={ele.name} loading="lazy" />
                  </Link>

                  <h3>{ele.name}</h3>
                  <p>{ele.instructor}</p>
                  <Rating rating={i > 5 ? 10 - i : i + 1} limit={5} />

                  <Link to={"/details"} state={ele}>
                    <button>View More</button>
                  </Link>
                </div>
              );
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
`;
