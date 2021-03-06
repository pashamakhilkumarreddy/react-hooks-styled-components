import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
*, *::after, *::before {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
  font-size: 16px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
  min-height: 100vh;
  position: relative;
}
`;
