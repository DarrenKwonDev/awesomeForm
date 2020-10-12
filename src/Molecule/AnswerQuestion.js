import React from "react";
import TextArea from "../Atom/TextArea";

function AnswerQuestion({ placeholder = "", belonging, id }) {
  return (
    <div style={{ width: "100%" }}>
      <TextArea placeholder={placeholder} belonging={belonging} id={id} />
    </div>
  );
}

export default AnswerQuestion;
