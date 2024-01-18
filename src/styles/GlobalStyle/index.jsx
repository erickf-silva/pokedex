import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
  }

  body {
    background-color: #e5e4e4;
    height: 100vh;
  }

  #root {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
  }

  ul {
    display: flex;
    gap: 25px;
  }

  li {
    list-style: none;
  }
`