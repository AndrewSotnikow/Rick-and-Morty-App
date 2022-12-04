import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`

    html,
    body {
        width: 100%;
        min-width: 320px;
        height: 100%;
        min-height: 100%;
        font-family: "Oswald", sans-serif;
    }
    html {
        overflow-x: hidden;
        font-size: 1px;
        scroll-behavior: smooth;
    }

    #root {
        height: 100%;
    }

    body {
        font-weight: normal;
        font-size: 16px;
        color: #20183B;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    * {
        padding: 0;
        margin: 0;
        word-wrap: break-word;
        outline: none;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;

    }

    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    button {
        padding: 0;
        color: inherit;
        cursor: pointer;
        background-color: transparent;
        border-width: 0;
    }

    figure {
        margin: 0;
    }

    ul,
    ol,
    dd {
        padding: 0;
        margin: 0;
        list-style: none;
    }

    ol {
        list-style-position: inside;
        list-style-type: decimal;

        li + li {
            margin-top: 8px;
        }
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        margin: 0;
        font-size: inherit;
        font-weight: inherit;
    }
    h1,
    h2{
        font-family: "OswaldBold", sans-serif;
        font-weight: 700;
    }
    h3,
    h4,
    h5,
    h6 {
        font-family: "OswaldMedium", sans-serif;
        font-weight: 500;
    }
    p {
        margin: 0;
        font-family: "OswaldRegular", sans-serif;
        font-weight: 400;
    }

    cite {
        font-style: normal;
    }

    fieldset {
        padding: 0;
        margin: 0;
        border-width: 0;
    }

    input[type='search']::-ms-clear {
        display: none;
        width: 0;
        height: 0;
    }

    input[type='search']::-ms-reveal {
        display: none;
        width: 0;
        height: 0;
    }

    input {
        background-color: transparent;
        border: 0;
        appearance: none;
    }

    input::-moz-focus-inner {
        padding: 0;
        margin: 0;
        border: 0;
    }

    section {
        max-width: 100vw;
        overflow: hidden;
    }

    img {
        display: block;
        max-width: 100%;
        border: 0;
    }
`

export default GlobalStyles
