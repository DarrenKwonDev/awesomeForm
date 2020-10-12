import React from "react";
import Radio from "../Atom/Radio";
import styled from "styled-components";

const StyledSingleChoice = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  width: 100%;
`;

function SingleChoice({ id, options }) {
  return <StyledSingleChoice>{options && options.map((el) => <Radio key={el.optionId} id={id} optionId={el.optionId} />)}</StyledSingleChoice>;
}

export default SingleChoice;
