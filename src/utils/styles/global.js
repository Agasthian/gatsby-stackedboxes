import { createGlobalStyle } from 'styled-components';
import '../../../node_modules/react-image-gallery/styles/css/image-gallery.css';

export default createGlobalStyle`
html{
  font-size:62.5%; //1rem=10px
  box-sizing:border-box;
  line-height:1.15;
  
  @media ${props => props.theme.mediaQueries.large} {
    font-size: 60%;
  }

  @media ${props => props.theme.mediaQueries.medium} {
      font-size: 57.5%;
  }

  @media ${props => props.theme.mediaQueries.small} {
      font-size: 55%;
  }
}

* {
  outline: none;
  box-sizing: inherit;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0) !important;
}

*,
*::before,
*::after {
  box-sizing: inherit;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}


body {
  font-family: 'Woodford-Bourne', 'sans-serif', "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", '!default';
  font-size:1.4rem;
  margin: 0;
  width: 100%;
  height: 100%;
  overflow: visible;
  --primary: ${props => props.theme.colors.primary};
  --primary-dark: ${props => props.theme.colors.dark};
  --primary-blue:${props => props.theme.colors.blue};
  --primary-light: ${props => props.theme.colors.bluelight};
  --primary-lighter: ${props => props.theme.colors.lighter};
  --navbar: rgba(255, 255, 255, 0.95);
  --text: ${props => props.theme.colors.lightTheme.text};
  --text-highlight: ${props => props.theme.colors.lightTheme.textHighlight};
  --background: ${props => props.theme.colors.lightTheme.background};
  --white: #fff;
  --shadow-btn: rgba(7, 49, 69, .1);
  --shadow-color: rgba(0, 0, 0, 0.1);
  --shadow-light: rgba(0, 0, 0, 0.3);
  --shadow-dark: rgba(0, 0, 0, 0.5);
  background-color: var(--background);
}
form,
input,
textarea,
button,
select,
a {
  -webkit-tap-highlight-color: rgba(0,0,0,0);
}

a:focus, a:hover {
  text-decoration: none;
  cursor: pointer;
}
p{
  font-family: 'Neuton', serif;
  font-size: 2rem;
  color:rgba(56, 60, 80, 0.6);
}
`;
