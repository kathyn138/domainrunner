import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Montserrat', sans-serif;
    color: ${({ theme }) => theme.colors.text};
    background-image: url(${({ theme }) => theme.body.backgroundImage})
  }

  html,
  body,
  #root {
    height: 100%;
  }

  @media screen and (min-width: 768px) {
    body {
      padding-top: 66px;
    }
  }

  @media screen and (max-width: 768px) {
    body {
      padding-top: 96px;
    }
  }
`;
