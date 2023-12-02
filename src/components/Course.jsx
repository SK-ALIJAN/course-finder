import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SlLike } from "react-icons/sl";
import { FaShareAlt } from "react-icons/fa";
import Rating from "./Rating";

const Course = ({ ele, i }) => {
  let [like, setLike] = useState(0);

  let handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: ele.name,
          text: `Check out this course: ${ele.name} by ${ele.instructor}`,
          url: window.location.href,
        });
      } else {
        // Fallback if the navigator.share API is not available
        alert("Sharing is not supported on this browser.");
      }
    } catch (error) {
      console.error("Error sharing:", error);
    }
  };

  return (
    <div key={ele.id} className="course">
      <Link to={"/details"} state={ele}>
        <img src={ele.thumbnail} alt={ele.name} loading="lazy" />
      </Link>

      <h3>{ele.name}</h3>
      <p>{ele.instructor}</p>
      <Rating rating={i > 5 ? 10 - i : i + 1} limit={5} />
      <div className="likes-share">
        <p>
          <span>{like} </span>
          <button className="likeicon" disabled={like === 1}>
            <SlLike
              onClick={() => {
                setLike(like + 1);
              }}
            />
          </button>
        </p>

        <p className="shareicon" onClick={handleShare}>
          <FaShareAlt />
        </p>
      </div>

      <Link to={"/details"} state={ele}>
        <button>View More</button>
      </Link>
    </div>
  );
};

export default Course;
