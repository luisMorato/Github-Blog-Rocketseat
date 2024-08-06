import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        color-scheme: light dark;
        color: rgba(255, 255, 255, 0.87);

        font-family: 'Nunito', sans-serif;
        font-size: 1rem;
        line-height: 1;
        font-weight: 400;
        font-synthesis: none;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    * {
        box-sizing: border-box;

        :focus {
            outline: none;
        }
    }

    body {
        background-color: ${({ theme }) => theme.Background};
        min-height: 100vh;
        height: 100%;
        min-width: 20rem;
        width: 100%;
        line-height: 1;
        overflow-y: scroll !important;
        overflow-x: hidden !important;
    }

    html, body, div, span
    h1, h2, h3, h4, h5, h6, p, a, img, strong, sub,
    b, u, i, ol, ul, li,
    fieldset, form, label, legend,
    table, tbody, tfoot, thead, tr, th, td,
    article, aside, 
    figure, figcaption, footer, header, nav, section {
        margin: 0;
        padding: 0;
        border: 0;
    }

    a {
        color: ${({ theme }) => theme.Text};
        text-decoration: none;
    }

    ol, ul {
        list-style: none;
    }

    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
`;