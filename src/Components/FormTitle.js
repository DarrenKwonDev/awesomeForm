import React from "react";
import Input from "../Atom/Input";
import TextArea from "../Atom/TextArea";
import FormInfoBox from "../Molecule/FormInfoBox";

function FormTitle() {
  return (
    <FormInfoBox>
      <TextArea placeholder={"Form Title"} fontSize={24} />
      <TextArea placeholder={"Form Description"} />
    </FormInfoBox>
  );
}

export default FormTitle;
