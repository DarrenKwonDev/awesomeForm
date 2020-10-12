import React, { useState, useEffect } from "react";
import styled from "styled-components";

const StyledCheck = styled.input``;

function Check() {
  const [RadioInput, setRadioInput] = useState("");

  const RadioInputChange = (e) => {
    setRadioInput(e.target.value);
  };

  return (
    <label htmlFor={RadioInput}>
      <StyledCheck type="checkbox" id={RadioInput} name={RadioInput} value={RadioInput} checked={true} onChange={() => console.log("what")} />;
      <input value={RadioInput} onChange={RadioInputChange}></input>
      <i className="fas fa-minus-square"></i>
    </label>
  );
}

export default Check;
