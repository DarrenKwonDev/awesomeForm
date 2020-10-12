import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ThemeProvider } from "styled-components";
import theme from "./Style/theme";
import AppContextProvider from "./ContextApi";

ReactDOM.render(
  <AppContextProvider>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </AppContextProvider>,
  document.getElementById("root")
);
