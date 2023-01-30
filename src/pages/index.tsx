import React, { useState } from "react";
import Head from "next/head";
import Header from "@/components/Header";
import Product from "@/components/Product";
import Footer from "@/components/Footer";
import { store } from "@/reducer/store";
import { Provider } from "react-redux";
import Cart from "@/components/Cart";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <title>MKS Sistemas</title>
      </Head>
      <Provider store={store}>
        <Cart isOpen={isOpen} setIsOpen={setIsOpen} />
        <Header setIsOpen={setIsOpen} />
        <Product />
      </Provider>
      <Footer />
    </>
  );
};

export default Home;
