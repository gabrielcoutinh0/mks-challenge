import { createGlobalStyle } from "styled-components";
import { Montserrat } from "@next/font/google";
import pixelToRem from "@/utils/pxToRem";

const montserrat = Montserrat({ subsets: ["latin"] });

export const GlobalStyle = createGlobalStyle`
:root{
  --color-primary: #0F52BA;
  --color-secondary: #373737;
  --color-background: #E5E5E5;
  --color-white: #FFF;
  --color-footer: #EEE;

  --font-primary: ${montserrat.style.fontFamily};

  --max-width: ${pixelToRem(938)};
}

*{
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
  font-family: var(--font-primary);
}

ol, ul {
  list-style: none;
}

body{
  background-color: var(--color-background);
}
`;
