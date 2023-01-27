import React from "react";
import Head from "next/head";
import { useFetch } from "@/hooks/useFetch";

const Home = () => {
  const paramsURL = {
    page: 1,
    rows: 8,
    sortBy: "id",
    orderBy: "ASC",
  };

  const url = `https://mks-challenge-api-frontend.herokuapp.com/api/v1/products?page=${paramsURL.page}&rows=${paramsURL.rows}&sortBy=${paramsURL.sortBy}&orderBy=${paramsURL.orderBy}`;
  const { data, loading, error } = useFetch(url);

  return (
    <div>
      <Head>
        <title>MKS Sistemas</title>
      </Head>
    </div>
  );
};

export default Home;
