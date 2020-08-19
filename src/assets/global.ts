import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Helvetica, sans-serif;
}

body {
  background: #263238;
}

button {
  border: 0;
  cursor: pointer;
  outline: 0;
}
`;