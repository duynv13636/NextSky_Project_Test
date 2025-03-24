import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import FeaturedProduct from "../components/FeaturedProduct";
import NewArrivals from "../components/NewArrivals";
import Footer from "../components/Footer";
import FooterBottom from "../components/FooterBottom";
import NavFooterMobile from "../components/NavFooterMobile";
import ChatsComponent from "../components/ChatsComponent";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <FeaturedProduct />
      <NewArrivals />
      <Footer />
      <FooterBottom />
      <NavFooterMobile />
      <ChatsComponent />
    </div>
  );
};

export default HomePage;
