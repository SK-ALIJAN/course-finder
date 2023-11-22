import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { GiCancel } from "react-icons/gi";
import { useDispatch } from "react-redux";
import { ENROLL_COURSE } from "../Redux/actionType";

const CourseDetails = () => {
  let { state } = useLocation();
  let [modal, setModal] = useState(false);
  let [formData, setFormData] = useState({ name: "", email: "" });
  let dispatch = useDispatch();
  let navigate = useNavigate();

  let handleModal = () => {
    setModal(true);
  };
  let RemoveModal = () => {
    setModal(false);
  };

  // form after clicking entroll button
  let handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: ENROLL_COURSE, payload: { course: state, ...formData } });

    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

  let handleChange = (e) => {
    let { name, value } = e.target;
    setFormData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  return (
    <DIV>
      <WRAPPER>
        <div className="firstRow">
          <div className="image">
            <img src={state.thumbnail} alt={state.name} />
            <button>{state.category}</button>
          </div>

          <div className="NavigationBtn">
            <button onClick={handleModal}>Enroll it right now</button>

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

          <div className="instructor">
            <p>Instructor: {state.instructor}</p>
            <p>Enrollment : {state.enrollmentStatus}</p>
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

      {modal ? (
        <div className="Modal">
          <div>
            <h1>Please fill this !</h1>
            <h2 onClick={RemoveModal}>
              <GiCancel />
            </h2>
            <div>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  required
                  placeholder="Enter your name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                <button type="submit">Submit</button>
              </form>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </DIV>
  );
};

export default CourseDetails;

let DIV = styled.div`
  background-color: white;
  .Modal {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 4;
    background-color: #58535387;
    transition: ease-in-out 0.3s;
  }
  .Modal > div {
    width: 22rem;
    padding: 1rem;
    padding-bottom: 2rem;
    border-radius: 8px;
    background-color: #3498db;
    color: white;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;

    h2 {
      position: absolute;
      top: 3px;
      left: 90%;
      cursor: pointer;
    }

    div {
      margin-top: 2rem;
      form {
        display: flex;
        flex-direction: column;
        input {
          margin-bottom: 1rem;
          height: 3rem;
          padding-left: 1rem;
          outline: 0;
          color: #3498db;
          font-weight: 600;
          &::placeholder {
            color: #3498db;
          }
        }
      }
      button {
        background: #fff;
        color: #3498db;
        padding: 5px 20px;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        font-weight: 600;
        letter-spacing: 2px;

        &:hover {
          background: #2c3e50;
          color: white;
        }
      }
    }
  }
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
    .instructor {
      font-weight: 600;
      color: #2c3e50;
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

  @media screen and (max-width: 1100px) {
    flex-direction: column;
    .firstRow {
      padding: 10px;
      padding-top: 0;
    }
    .image {
      img {
        width: 100%;
        height: 20rem;
      }
    }
  }
`;
