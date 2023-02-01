import React from "react";
import "../styles/globals.ts";
import type { AppProps } from "next/app";
import { GlobalStyle } from "@/styles/globals";
import { Provider } from "react-redux";
import { store } from "@/reducer/store";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider store={store}>
        <GlobalStyle />
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default MyApp;
