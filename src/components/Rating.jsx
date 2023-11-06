import React, { useState } from "react";
import styled from "styled-components";

const Rating = ({ rating, limit, rateNumber }) => {
  let [starRating, setStarRating] = useState(rating);


  let handleClick = (i) => {
    setStarRating(i + 1);
  };

  return (
    <WRAPPER>
      {[...new Array(limit)].map((ele, i) => {
        return (
          <p
            key={i}
            onClick={() => {
              handleClick(i);
            }}
            className={i + 1 <= starRating ? "rated" : ""}
          >
            &#9733;
          </p>
        );
      })}
    
    </WRAPPER>
  );
};

export default Rating;

let WRAPPER = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;

  p {
    font-size: 2rem;
    margin-left: 5px;
    cursor: pointer;
  }

  .rated {
    color: #b4690e;
  }
`;
