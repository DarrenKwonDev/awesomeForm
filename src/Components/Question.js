import React, { useState, useCallback, useContext } from "react";
import { AppContext } from "../ContextApi";
import TextArea from "../Atom/TextArea";
import QuestionBox from "../Molecule/QuestionBox";

import AnswerQuestion from "../Molecule/AnswerQuestion";
import SingleChoice from "../Molecule/SingleChoice";
import MultiChoice from "../Molecule/MultiChoice";

function Question({ type, id, options }) {
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

  // filter로 삭제
  const onDeleteClick = () => {
    const checkBeforeDelete = confirm("are you sure you want to delete?");
    if (checkBeforeDelete) {
      const deletedRersult = context.QuestionArr.filter((item) => item.id !== id);
      context.setQuestionArr(deletedRersult);
    }
  };

  // map으로 특정 객체를 수정. 불변성에 유의할 것
  const onPlusClick = () => {
    const modifiedArray = context.QuestionArr.map((item) =>
      item.id === id
        ? {
            ...item,
            options: [
              ...item.options,
              { optionId: Date.now() + Math.random(), text: "" },
            ],
          }
        : item
    );
    context.setQuestionArr(modifiedArray);
  };

  return (
    <QuestionBox>
      <div style={{ width: "100%" }}>
        <TextArea
          placeholder="Question Text"
          fontSize={24}
          belonging="title"
          id={id}
        />
        <TextArea placeholder="Question Describe" belonging="detail" id={id} />
      </div>

      {/* render diffenct jsx chunk based on type */}
      {QuestionType === "MultiChoice" && <MultiChoice id={id} options={options} />}

      {QuestionType === "SingleChoice" && <SingleChoice id={id} options={options} />}

      {QuestionType === "ShortAnswer" && (
        <AnswerQuestion placeholder="단답형 텍스트" belonging="answer" id={id} />
      )}

      {QuestionType === "LongAnswer" && (
        <AnswerQuestion placeholder="장문형 텍스트" belonging="answer" id={id} />
      )}

      {/* bottom bar */}
      <div className="bottomIcons">
        <select name="type" value={QuestionType} onChange={typeChange}>
          <option value="MultiChoice">MultiChoice</option>
          <option value="SingleChoice">SingleChoice</option>
          <option value="ShortAnswer">ShortAnswer</option>
          <option value="LongAnswer">LongAnswer</option>
        </select>
        {QuestionType === "ShortAnswer" || QuestionType === "LongAnswer" ? (
          ""
        ) : (
          <i className="fas fa-plus-circle" onClick={onPlusClick}></i>
        )}
        <i className="fas fa-trash-alt" onClick={onDeleteClick}></i>
      </div>
    </QuestionBox>
  );
}

export default Question;
