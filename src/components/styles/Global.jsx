import { createGlobalStyle } from "styled-components";

export const themeColors = {
   light: {
      primary: '#e4e7eb',
      headerMenu: '#e4e7eb',
      border: '#ccc',
      bars: 'rgb(18, 113, 236)',
      muteBall: '#660a91',
      muteBorder: '#00000050',
      primaryText: '#000000b2',
      highlight: '#9502da',
      highlightDark: '#660a91',
      themeButton: '#9e01e7',
      themeButtonBall: '#DA8BFF'
   },
   dark: {
      primary: '#0F0F0F',
      headerMenu: '#3D3D3D',
      border: '#cccccc99',
      bars: 'rgb(13, 64, 131)',
      muteBall: '#9e01e7',
      muteBorder: '#ccc',
      primaryText: '#ffffffb9',
      highlight: '#c23eff',
      highlightDark: '#660a91',
      themeButton: '#fff',
      themeButtonBall: '#565656'
   }
}

const GlobalStyles = createGlobalStyle`
   * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      text-decoration: none;
      list-style: none;
      font-family: 'Open Sans', sans-serif;
   }

   #root {
      display: flex;
      flex-direction: column;
      height: 100dvh;
      background-color: ${({ theme }) => theme.primary};
      transition: 0.4s;

      @media (max-width: 882px) and (orientation: landscape),
      (max-width: 667px) and (orientation: landscape) {
         height: calc(100vh + 80px);
      }
   }

   main {
      width: 100%;
      height: 70dvh;
      display: flex;
      align-items: center;
      justify-content: center;

      @media (max-width: 1250px), (max-width: 932px) and (orientation: landscape) {
         height: 40dvh;
      }

      @media (max-width: 882px) and (orientation: landscape) {
         height: 60dvh;
      }

      @media (max-width: 425px) {
         height: 20dvh;
      }
   }
`

export default GlobalStyles