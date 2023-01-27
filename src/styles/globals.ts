import { createGlobalStyle } from "styled-components";
import { Montserrat } from "@next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

export const GlobalStyle = createGlobalStyle`
  :root{
    --color-primary: #0F52BA;
    --color-secondary: #373737;
    --color-background: #E5E5E5;
    --font-primary: ${montserrat.style.fontFamily};
  }

  *{
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    font-family: var(--font-primary);
    background-color: var(--color-background);
  }

  ol, ul {
	  list-style: none;
  }
`;
