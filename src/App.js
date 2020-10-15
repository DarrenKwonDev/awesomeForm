import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "./ContextApi";
import styled from "styled-components";
import HeaderBox from "./Components/HeaderBox";
import FormTitle from "./Components/FormTitle";
import FAB from "./Components/FAB";
import Question from "./Components/Question";
import GlobalStyle from "./Style/GlobalStyle";

const BodyWrapper = styled.div`
  ${(props) => props.theme.deviceSizes.tablet} {
    display: grid;
    grid-template-columns: auto 750px auto;
  }

  ${(props) => props.theme.deviceSizes.desktop} {
    display: grid;
    grid-template-columns: auto 750px auto;
  }
`;

const SubmitButton = styled.button`
  display: flex;
  justify-content: center;

  width: 150px;
  padding: ${(props) => props.theme.paddings.xxxl};

  background-color: ${(props) => props.theme.colors.pointColor};
  color: ${(props) => props.theme.colors.white};
  font-size: ${(props) => props.theme.fontSizes.xl};
  border: none;
  border-radius: 6px;
  outline: none;

  cursor: pointer;

  &:hover {
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16),
      0 3px 6px rgba(0, 0, 0, 0.23);
  }
`;

function App() {
  const [Questions, setQuestions] = useState([]);
  const { QuestionArr } = useContext(AppContext);

  const context = useContext(AppContext);

  const onSubmit = () => {
    const output = {
      formInfo: context.formInfo,
      questions: context.QuestionArr,
    };
    console.log(output);
  };

  return (
    <>
      <GlobalStyle />
      <HeaderBox />
      <FAB />

      {/* 내용 */}
      <BodyWrapper>
        <div className="leftBar"></div>
        <div>
          <FormTitle />
          <hr style={{ margin: "12px 0" }} />
          {QuestionArr &&
            QuestionArr.map((el) => (
              <Question
                type={el.type}
                key={el.id}
                id={el.id}
                options={el.options}
              />
            ))}

          <div style={{ display: "flex", justifyContent: "center" }}>
            <SubmitButton onClick={onSubmit}>Submit</SubmitButton>
          </div>
        </div>
        <div className="rightBar"></div>
      </BodyWrapper>
    </>
  );
}

export default App;
