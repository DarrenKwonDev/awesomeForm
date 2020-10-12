import React, { useState, useEffect } from "react";
import styled from "styled-components";

const StyledCheck = styled.input``;

function Check({ id, optionId }) {
  const [RadioInput, setRadioInput] = useState("");
  const [isTrue, setisTrue] = useState(false);

  const RadioInputChange = (e) => {
    setRadioInput(e.target.value);
  };

  const onClick = () => {
    setisTrue(!isTrue);
  };

  return (
    <label htmlFor={RadioInput}>
      <StyledCheck type="checkbox" id={RadioInput} name={RadioInput} value={RadioInput} checked={isTrue} onChange={onClick} />
      <input value={RadioInput} onChange={RadioInputChange}></input>
      <i className="fas fa-minus-square"></i>
    </label>
  );
}

export default Check;
