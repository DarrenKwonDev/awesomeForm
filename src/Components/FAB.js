import React, { useContext } from "react";
import { AppContext } from "../ContextApi";
import styled from "styled-components";

const StyledFAB = styled.div`
  display: absolute;
  bottom: 50px;
  right: 50px;

  position: fixed;

  z-index: 10;
  outline: none;

  .plusButton {
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: ${(props) => props.theme.colors.pointColor};
    color: ${(props) => props.theme.colors.white};

    width: 50px;
    height: 50px;
    font-size: ${(props) => props.theme.fontSizes.xl};

    border: transparent;
    border-radius: 999px;

    cursor: pointer;
  }
`;

function Remocon() {
  const { QuestionArr, addQuestion } = useContext(AppContext);

  const onClick = () => {
    return addQuestion();
  };

  return (
    <StyledFAB onClick={onClick}>
      <i className="fas fa-plus plusButton"></i>
    </StyledFAB>
  );
}

export default Remocon;
