import React, { createContext, useState } from "react";

// context 생성
export const AppContext = createContext();

//====================================
// const Schmea = { id: Date.now(), type: "SingleChoice", title: "", detail: "", options: [] }
//====================================

// provider 생성
const AppContextProvider = ({ children }) => {
  const [QuestionArr, setQuestionArr] = useState([{ id: Date.now(), type: "SingleChoice", title: "", detail: "", options: [] }]);
  // form의 제목, 내용을 담기 위해서 state를 사용할 필요 없음. reactive하게 반응할 이유가 없기 때문
  let formInfo = { id: "form", type: "form", title: "", detail: "" };

  // 질문 하나 추가. concat으로 불변성 유지할 것
  const addQuestion = () => {
    let tempArr = QuestionArr.concat([{ id: Date.now(), type: "SingleChoice", title: "", detail: "", options: [] }]);
    setQuestionArr(tempArr);
  };

  return <AppContext.Provider value={{ QuestionArr, setQuestionArr, addQuestion, formInfo }}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
