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
  body: "#F9F9F9",
  text: "#575757",
  navbackground: "white",
};

export const darkTheme = {
  body: "#303030",
  text: "#F9F9F9",
  navbackground: "#303030",
};
