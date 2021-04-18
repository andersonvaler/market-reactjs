import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
  font-family: nunito, sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: none;
  text-decoration: none;
  border: none;
}
:root{
  font-size: 16px;
  @media (max-width: 900px) {
    font-size: 14px;
  }
}

body {
  /* overflow-y: hidden; */
  overflow-x: hidden;
  background-color: #F6F2F9;
}

::-webkit-scrollbar-track {
    background-color: #fff;
}
::-webkit-scrollbar {
    width: 4px;
    height: 4px;
    background: #F6F2F9;
}
::-webkit-scrollbar-thumb {
  border-radius: 2rem;
  background: #927dad;
}

`;
export default GlobalStyles;
