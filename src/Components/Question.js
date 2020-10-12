import React, { useState } from "react";
import TextArea from "../Atom/TextArea";
import QuestionBox from "../Molecule/QuestionBox";

function Question({ type }) {
  const [QuestionType, setQuestionType] = useState(type);

  const typeChange = (e) => {
    setQuestionType(e.target.value);
  };

  const onDeleteClick = (e) => {
    console.log(e.target.parentNode.className);
    console.log(e.target.parentNode.parentNode.className);
  };

  const onPlusClick = (e) => {
    console.log(e.target.parentNode);
    console.log(e.target.parentNode.parentNode.classList);
    console.log(e.target.parentNode.dataset);
    console.log(e.target.parentNode.parentNode.dataset);
  };

  return (
    <QuestionBox>
      <div style={{ width: "100%" }}>
        <TextArea placeholder="Question Text" fontSize={24} />
        <TextArea placeholder="Question Describe" />
      </div>

      {/* bottom bar */}
      <div className="bottomIcons">
        <select name="type" value={QuestionType} onChange={typeChange}>
          <option value="MultiChoice">MultiChoice</option>
          <option value="SingleChoice">SingleChoice</option>
          <option value="ShortAnswer">ShortAnswer</option>
          <option value="LongAnswer">LongAnswer</option>
        </select>
        {QuestionType === "ShortAnswer" || QuestionType === "LongAnswer" ? "" : <i className="fas fa-plus-circle" onClick={onPlusClick}></i>}
        <i className="fas fa-trash-alt" onClick={onDeleteClick}></i>
      </div>
    </QuestionBox>
  );
}

export default Question;
