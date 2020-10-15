import React, { useState, useEffect } from "react";
import styled from "styled-components";

const StlyedRadioWrapper = styled.div`
  .fa-minus-square {
    cursor: pointer;
    &:hover {
      color: ${(props) => props.theme.colors.dangerColor};
    }
  }
`;

function Radio({ id, optionId }) {
  const [RadioInput, setRadioInput] = useState("");
  const [isTrue, setisTrue] = useState(false);

  const RadioInputChange = (e) => {
    setRadioInput(e.target.value);
  };

  const onClick = () => {
    console.log("object");
    setisTrue(!isTrue);
  };

  const onDeleteClick = () => {
    console.log(id);
    console.log(optionId);
  };

  return (
    <StlyedRadioWrapper>
      <label htmlFor={RadioInput}>
        <input
          type="radio"
          id={RadioInput}
          name={RadioInput}
          value={RadioInput}
          checked={isTrue}
          onChange={onClick}
        ></input>
        <input value={RadioInput} onChange={RadioInputChange}></input>
        <i className="fas fa-minus-square" onClick={onDeleteClick}></i>
      </label>
    </StlyedRadioWrapper>
  );
}

export default Radio;
