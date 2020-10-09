import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
*{
  margin: 0;
  padding:0;
  outline:0;
  box-sizing: boder-box;
}
body {
  -webkit-font-smoothing: antialiased;
   background: linear-gradient(
      108.88deg,
      rgba(0, 12, 19, 0.28) 26.17%,
      rgba(1, 97, 114, 0.533892) 62.02%,
      #000c13 87.16%
    ),
    linear-gradient(
      90.17deg,
      rgba(0, 12, 19, 0.86) 18.03%,
      rgba(0, 61, 76, 0.62) 37.18%,
      rgba(13, 124, 146, 0.64) 55.74%,
      rgba(0, 37, 46, 0.49) 85.66%
    ),
    linear-gradient(0deg, #000c13, #000c13);

}

body, input, button {
  font: 16px Roboto, sans-serif

}

button {
  cursor: pointer;
}
`;
