import React from "react";
import TextArea from "../Atom/TextArea";

function AnswerQuestion({ placeholder = "" }) {
  return (
    <div>
      <TextArea placeholder={placeholder} />
    </div>
  );
}

export default AnswerQuestion;
