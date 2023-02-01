import React, { useState } from "react";
import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { RootState, store } from "@/reducer/store";
import { Provider, useSelector } from "react-redux";
import Cart from "@/components/Cart";
import { useFetch } from "@/hooks/useFetch";
import { url } from "@/lib/product";
import Products from "@/components/Products";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { data, loading } = useFetch(url);
  const { items } = useSelector((state: RootState) => state.cart);

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <title>MKS Sistemas</title>
      </Head>
      <Cart data={items} isOpen={isOpen} setIsOpen={setIsOpen} />
      <Header setIsOpen={setIsOpen} />
      <Products data={data} loading={loading} />
      <Footer />
    </>
  );
};

export default Home;
