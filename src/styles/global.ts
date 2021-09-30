import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

export const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        background: #0D1117;
        color: #FFF;
        font-family: Work Sans, sans-serif;
    }

    button {
        cursor: pointer;
    }
`;