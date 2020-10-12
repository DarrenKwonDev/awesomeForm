import React, { useState, useEffect } from "react";

function Radio() {
  const [RadioInput, setRadioInput] = useState("");

  const RadioInputChange = (e) => {
    setRadioInput(e.target.value);
  };

  return (
    <>
      <label htmlFor={RadioInput}>
        <input type="radio" id={RadioInput} name={RadioInput} value={RadioInput} checked={true} onChange={() => console.log("what")}></input>
        <input value={RadioInput} onChange={RadioInputChange}></input>
        <i className="fas fa-minus-square"></i>
      </label>
    </>
  );
}

export default Radio;
