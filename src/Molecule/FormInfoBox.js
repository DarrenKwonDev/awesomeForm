import React from "react";
import styled from "styled-components";

const StyledFormInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-radius: 6px;
  background-color: ${(props) => props.theme.colors.white};
  border: 1px solid ${(props) => props.theme.colors.grayTwo};
  padding: ${(props) => props.theme.paddings.base};
`;

function FormInfoBox({ children }) {
  return <StyledFormInfoBox>{children}</StyledFormInfoBox>;
}

export default FormInfoBox;
