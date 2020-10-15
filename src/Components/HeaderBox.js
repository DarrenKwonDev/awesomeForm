import React from "react";
import styled from "styled-components";
import image from "../../public/image.jpg";
import favicon from "../../public/favicon.ico";

const StyledBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 25vh;

  margin-bottom: ${(props) => props.theme.margins.xl};

  background-position: center center;
  background-size: cover;
  background-image: linear-gradient(
      rgba(44, 89, 255, 0.75),
      rgba(44, 89, 255, 0.75)
    ),
    url("image.jpg");

  font-size: ${(props) => props.theme.fontSizes.xxxl};
  font-weight: 600;
`;

function HeaderBox() {
  return (
    <>
      <StyledBox>
        <div>Awesome Form</div>
        <img src={favicon} />
        {/* <img src={image} /> */}
      </StyledBox>
    </>
  );
}

export default HeaderBox;
