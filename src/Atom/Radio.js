import React, { useState, useEffect } from "react";

function Radio({ id, optionId }) {
  const [RadioInput, setRadioInput] = useState("");
  const [isTrue, setisTrue] = useState(false);

  const RadioInputChange = (e) => {
    setRadioInput(e.target.value);
  };

  const onClick = () => {
    setisTrue(!isTrue);
  };

  return (
    <>
      <label htmlFor={RadioInput}>
        <input type="radio" id={RadioInput} name={RadioInput} value={RadioInput} checked={isTrue} onChange={onClick}></input>
        <input value={RadioInput} onChange={RadioInputChange}></input>
        <i className="fas fa-minus-square"></i>
      </label>
    </>
  );
}

export default Radio;
