import React, { useState, useEffect, useCallback, useRef, useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../ContextApi";

const StyledTextArea = styled.textarea`
  width: 100%;
  border: none;
  outline: none;
  resize: none;
  font-size: ${(props) => props.fontSize + "px"};
  margin: ${(props) => props.theme.margins.xxl} 0;
  border-bottom: 2px solid ${(props) => props.theme.colors.grayTwo};
  background-color: ${(props) => props.theme.colors.grayOne};

  ::placeholder {
    font-size: ${(props) => props.fontSize + "px"};
  }

  &:focus {
    transition: border-bottom 0.1s ease-in-out;
    border-bottom: 4px solid ${(props) => props.theme.colors.pointColor};
  }
`;

function TextArea({
  initialValue = "",
  placeholder = "",
  fontSize = 16,
  belonging,
  id,
}) {
  const [text, settext] = useState(initialValue);
  const textareaRef = useRef(null);
  const context = useContext(AppContext);

  const textChange = useCallback(
    (e) => {
      settext(e.target.value);

      const target = context.QuestionArr.filter((el) => el.id === id)[0];

      if (id !== "form") {
        if (belonging === "title") {
          target.title = e.target.value;
        } else if (belonging === "detail") {
          target.detail = e.target.value;
        }
      } else {
        // id가 form인 경우 (form의 제목, 설명에 대한 수정)
        if (belonging === "title") {
          // form의 title
          context.formInfo.title = e.target.value;
        } else {
          // form의 detail
          context.formInfo.detail = e.target.value;
        }
      }
    },
    [text]
  );

  useEffect(() => {
    textareaRef.current.style.height = "auto";
    // 2px 안 더하면 옆에 스크롤 생김
    textareaRef.current.style.height = textareaRef.current.scrollHeight + 2 + "px";
  }, [text]);

  return (
    <>
      <StyledTextArea
        ref={textareaRef}
        value={text}
        onChange={textChange}
        placeholder={placeholder}
        fontSize={fontSize}
      ></StyledTextArea>
    </>
  );
}

export default TextArea;
