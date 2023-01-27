import React from "react";
import Head from "next/head";
import Header from "@/components/Header";
import Product from "@/components/Product";

const Home = () => {
  return (
    <div>
      <Head>
        <title>MKS Sistemas</title>
      </Head>
      <Header />
      <Product />
    </div>
  );
};

export default Home;
