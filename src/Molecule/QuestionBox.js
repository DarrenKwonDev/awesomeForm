import React from "react";
import styled from "styled-components";

const StyledQuestionBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: ${(props) => props.theme.margins.xxl} 0;

  padding: ${(props) => props.theme.paddings.base};

  border-radius: 6px;
  background-color: ${(props) => props.theme.colors.white};
  border: 1px solid ${(props) => props.theme.colors.grayTwo};

  .bottomIcons {
    display: flex;
    justify-content: flex-end;
    align-items: center;

    width: 100%;

    i {
      cursor: pointer;

      &:not(:first-child) {
        margin-left: ${(props) => props.theme.margins.lg};
        font-size: ${(props) => props.theme.fontSizes.xxl};
      }
    }

    .fa-plus-circle {
      color: ${(props) => props.theme.colors.pointColor};
    }

    .fa-trash-alt {
      color: ${(props) => props.theme.colors.dangerColor};
    }
  }
`;

function QuestionBox({ children }) {
  return <StyledQuestionBox>{children}</StyledQuestionBox>;
}

export default QuestionBox;
