import React from "react";
import Banner from "./Banner";
import Feature from "./Feature";
import Footer from "./Footer";
import FAQ from "./FAQ";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const category = useLoaderData();

  return (
    <div>
      <Banner />
      <Feature category={ category} />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Home;
