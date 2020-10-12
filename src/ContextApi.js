import React, { createContext, useState } from "react";

// context 생성
export const AppContext = createContext();

// provider 생성
const AppContextProvider = ({ children }) => {
  const [QuestionArr, setQuestionArr] = useState([{ id: Date.now(), type: "SingleChoice", radiosAmount: 2 }]);

  const addQuestion = () => {
    console.log(QuestionArr);
    let tempArr = QuestionArr.concat([{ id: Date.now(), type: "MultiChoice", radiosAmount: 2 }]);
    setQuestionArr(tempArr);
  };

  return <AppContext.Provider value={{ name: "Darren", QuestionArr, addQuestion }}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
