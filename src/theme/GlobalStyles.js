import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
    ${reset}
    body {
        font-family: 'nanumsquare';
        background-color: ${(props) => props.theme.bgColor};
        color: ${(props) => props.theme.textColor};
    }
    input {
        border-bottom: ${(props) => props.theme.borderBottom};
        color: ${(props) => props.theme.textColor};
    }
    input::placeholder{
        color: ${(props) => props.theme.textColor};
    }
    .TodoTemplate{
        box-shadow: ${(props) => props.theme.boxShadow};
        background-color: ${(props) => props.theme.TpColor};
        .title {
            color: ${(props) => props.theme.titleColor};
        }
    }

`