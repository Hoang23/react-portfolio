import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    body {
        background: ${({ theme }) => theme.body};
        color: ${({ theme }) => theme.text};
    }

    nav 
    {
        background: ${({ theme }) => theme.navbackground};
    }

    aside 
    {
        background: ${({ theme }) => theme.navbackground};
        color: ${({ theme }) => theme.text};
    }
`;

export const lightTheme = {
  body: "#f7fff7 ", // #fa976e // #F9F9F9 // #fffcde
  text: "#575757",
  navbackground: "#fffff7", 
};

export const darkTheme = {
  body: "#303030",
  text: "#e5ffe3", // #ddeddd #F9F9F9
  navbackground: "#303030",
};
