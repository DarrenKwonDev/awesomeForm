import React, { useState, useEffect, useCallback, useRef } from "react";
import styled from "styled-components";

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
`;

function TextArea({ initialValue = "", placeholder = "", fontSize = 16 }) {
  const [text, settext] = useState(initialValue);
  const textareaRef = useRef(null);

  const textChange = useCallback(
    (e) => {
      settext(e.target.value);
      console.log(text);
    },
    [text]
  );

  const onFocus = () => {
    console.log("focus");
    textareaRef.current.style.borderBottom = `5px solid ${(props) => props.theme.colors.pointColor}`;

    return;
  };

  useEffect(() => {
    textareaRef.current.style.height = "auto";
    // 2px 안 더하면 옆에 스크롤 생김
    textareaRef.current.style.height = textareaRef.current.scrollHeight + 2 + "px";
  }, [text]);

  return (
    <>
      <StyledTextArea ref={textareaRef} value={text} onChange={textChange} onFocus={onFocus} placeholder={placeholder} fontSize={fontSize}></StyledTextArea>
    </>
  );
}

export default TextArea;
