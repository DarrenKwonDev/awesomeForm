import React, { useState, useCallback, useContext } from "react";
import { AppContext } from "../ContextApi";
import TextArea from "../Atom/TextArea";
import QuestionBox from "../Molecule/QuestionBox";

import AnswerQuestion from "../Molecule/AnswerQuestion";
import SingleChoice from "../Molecule/SingleChoice";
import MultiChoice from "../Molecule/MultiChoice";

function Question({ type, id }) {
  const [QuestionType, setQuestionType] = useState(type);
  const context = useContext(AppContext);

  const typeChange = useCallback(
    (e) => {
      setQuestionType(e.target.value);
      const target = context.QuestionArr.filter((item) => item.id === id);
      target[0].type = e.target.value;
    },
    [QuestionType]
  );

  const onDeleteClick = () => {
    const checkBeforeDelete = confirm("are you sure you want to delete?");
    if (checkBeforeDelete) {
      // filter로 삭제
      const deletedRersult = context.QuestionArr.filter((item) => item.id !== id);
      context.setQuestionArr(deletedRersult);
    }
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
        <TextArea placeholder="Question Text" fontSize={24} belonging="title" id={id} />
        <TextArea placeholder="Question Describe" belonging="detail" id={id} />
      </div>

      {/* render diffenct jsx chunk based on type */}
      {QuestionType === "MultiChoice" && <MultiChoice />}

      {QuestionType === "SingleChoice" && <SingleChoice />}

      {QuestionType === "ShortAnswer" && <AnswerQuestion placeholder="단답형 텍스트" belonging="answer" id={id} />}

      {QuestionType === "LongAnswer" && <AnswerQuestion placeholder="장문형 텍스트" belonging="answer" id={id} />}

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
