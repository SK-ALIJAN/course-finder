import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const CourseDetails = () => {
  let { state } = useLocation();

  return (
    <DIV>
      <WRAPPER>
        <div className="firstRow">
          <div className="image">
            <img src={state.thumbnail} alt={state.name} />
            <button>{state.category}</button>
          </div>
          <div className="NavigationBtn">
            <button>Enroll it right now</button>

            <Link to={"/"}>
              <button>May be Later</button>
            </Link>
          </div>

          <div className="totalEnroll">
            <p>Mode : {state.location}</p>
            <p> {state.students.length} students enrolled</p>
          </div>

          <div className="prerequisite">
            Prerequisite : {state.prerequisites}
          </div>
        </div>

        <div className="secondRow">
          <h2 className="coursetitle">Course Details</h2>

          <div className="title">
            <p>Name: {state.name}</p>
            <p>Duration: {state.duration}</p>
          </div>

          <div className="title">
            <p>Description: {state.description}</p>
          </div>

          <div className="schedule">
            <p> {state.schedule}</p>
          </div>

          <div>
            <p className="syllabus">Syllabus</p>
            {state.syllabus.map((ele, i) => {
              return (
                <div key={i} className="All-syllabus">
                  <p className="topic"> {ele.topic}</p>
                  <p>{ele.content}</p>
                </div>
              );
            })}
          </div>
        </div>
      </WRAPPER>
    </DIV>
  );
};

export default CourseDetails;

let DIV = styled.div`
  background-color: white;
`;

const WRAPPER = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-around;
  margin-bottom: 2rem;
  padding: 1rem;
  .firstRow {
    .image {
      position: relative;
      button {
        position: absolute;
        left: 88%;
        top: 10px;
        background: #3498db;
        color: #fff;
        padding: 5px;
        border: none;
      }
    }
    .NavigationBtn {
      display: flex;
      flex-direction: column;
      button {
        width: 100%;
        margin-bottom: 1rem;
        height: 2rem;
        background: #3498db;
        color: #fff;
        border: none;
        font-weight: 600;
        letter-spacing: 2px;
        cursor: pointer;
        border-radius: 5px;
        transition: background 0.3s;

        &:hover {
          background: #2c3e50;
        }
      }
    }

    .totalEnroll {
      display: flex;
      justify-content: space-between;
      font-weight: 600;
      color: grey;
    }

    .prerequisite {
      font-weight: 600;
      color: grey;
    }
  }
  .secondRow {
    padding: 10px;
    .coursetitle {
      text-align: center;
      margin-bottom: 1rem;
    }
    .title {
      display: flex;
      justify-content: space-between;
      margin-bottom: 1rem;
    }
    .schedule {
      background: #2c3e50;
      padding: 4px;
      color: white;
      text-align: center;
      margin-bottom: 1rem;
    }
    .syllabus {
      font-size: 2rem;
    }

    .All-syllabus {
      border-left: 5px solid #2c3e50;
      margin-bottom: 10px;
      padding-left: 10px;
      position: relative;

      .topic {
        font-weight: 600;
      }
    }

    .All-syllabus::after {
      content: "";
      width: 1rem;
      height: 1rem;
      border-radius: 100%;
      background-color: #2c3e50;
      position: absolute;
      bottom: -10px;
      left: -10px;
    }
  }
`;
