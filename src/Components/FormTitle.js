import React from "react";
import Input from "../Atom/Input";
import TextArea from "../Atom/TextArea";
import FormInfoBox from "../Molecule/FormInfoBox";

function FormTitle() {
  return (
    <FormInfoBox>
      <TextArea placeholder={"Form Title"} fontSize={24} belonging="title" id="form" />
      <TextArea placeholder={"Form Description"} belonging="detail" id="form" />
    </FormInfoBox>
  );
}

export default FormTitle;
