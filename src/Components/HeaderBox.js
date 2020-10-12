import React from "react";
import styled from "styled-components";

const StyledBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 25vh;

  margin-bottom: ${(props) => props.theme.margins.xl};

  background-position: center center;
  background-size: cover;
  background-image: linear-gradient(rgba(44, 89, 255, 0.75), rgba(44, 89, 255, 0.75)), url("image.jpg");

  font-size: ${(props) => props.theme.fontSizes.xxxl};
  font-weight: 600;
`;

function HeaderBox() {
  return (
    <>
      <StyledBox>
        <div>Awesome Form</div>
      </StyledBox>
    </>
  );
}

export default HeaderBox;
