import React from "react";
import styled from "styled-components";
import Check from "../Atom/Check";

const StyledMultiChoice = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  width: 100%;
`;

function MultiChoice({ id, options }) {
  return <StyledMultiChoice>{options && options.map((el) => <Check key={el.optionId} id={id} optionId={el.optionId} />)}</StyledMultiChoice>;
}

export default MultiChoice;
