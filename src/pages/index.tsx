import React, { useEffect, useState } from "react";
import Head from "next/head";
import Header from "@/components/Header";
import Product from "@/components/Product";
import Footer from "@/components/Footer";
import { store } from "@/Context/store";
import { Provider, useSelector } from "react-redux";
import Cart from "@/components/Cart";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Head>
        <title>MKS Sistemas</title>
      </Head>
      <Provider store={store}>
        <Cart isOpen={isOpen} setIsOpen={setIsOpen} />
        <Header setIsOpen={setIsOpen} />
        <Product />
      </Provider>
      <Footer />
    </div>
  );
};

export default Home;
