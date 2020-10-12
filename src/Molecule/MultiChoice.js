import React from "react";
import styled from "styled-components";
import Check from "../Atom/Check";

const StyledMultiChoice = styled.div`
  display: flex;
  justify-content: flex-start;
`;

function MultiChoice() {
  return (
    <StyledMultiChoice>
      <Check />
    </StyledMultiChoice>
  );
}

export default MultiChoice;
