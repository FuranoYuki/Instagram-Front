import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  :root{
    --navbar-background: #ffffff;
    --navbar-border: rgb(219, 219, 219);
    --body-background: #fafafa;
    --gray-text: rgb(142, 142, 142);
    --black-text: rgb(38, 38, 38);
    --border-color: #dbdbdb;
    --blue-color: #0095f6;
    --white-color: #ffffff;
    --box-shadow: rgba(0, 0, 0, .0975);
    --blue-facebook: #385185;
    --blue-link: rgb(0, 55, 107);
    --arrow: #cacaca;
    --social-border: rgb(239, 239, 239);
    --warning-red: rgb(237,73,86);
    --button-disabled: #b2dffc;
  }
`;
