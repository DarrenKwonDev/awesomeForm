import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset}
    * {
        box-sizing:border-box; 
    }
    body {
        margin: 0;
        padding: 0;
        display: relative;
        background-color: ${(props) => props.theme.colors.grayOne};
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
`;

export default GlobalStyle;
