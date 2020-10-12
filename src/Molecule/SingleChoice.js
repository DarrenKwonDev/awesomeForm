import React from "react";
import Radio from "../Atom/Radio";
import styled from "styled-components";

const StyledSingleChoice = styled.div`
  display: flex;
  justify-content: flex-start;
`;

function CheckBoxCompo() {
  return (
    <StyledSingleChoice>
      <Radio />
    </StyledSingleChoice>
  );
}

export default CheckBoxCompo;
