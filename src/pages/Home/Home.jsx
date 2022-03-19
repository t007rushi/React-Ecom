import React from "react";
import Banner from "../../components/Banner/Banner";
import Category from "../../components/Category/Category";
import Footer from "../../components/Footer/Footer";
import ImgBanner from "../../components/ImgBanner/ImgBanner";

const Home = () => {
  return (
    <div>
      <Banner />
      <Category />
      <ImgBanner />
      <Footer />
    </div>
  );
};

export default Home;
