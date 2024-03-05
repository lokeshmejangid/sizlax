import React from "react";
import "./App.css";
import Header from "./Component/Header/Header";
import Home from "./Pages/SalesOfferPages/Home";
import Footer from "./Component/Footer/Footer";
import { BiUpArrowAlt } from "react-icons/bi";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GetApp from "./Pages/SalesOfferPages/GetApp";
import StoreEvent from "./Pages/SalesOfferPages/StoreEvent";
import GiftCard from "./Pages/SalesOfferPages/GiftCard";
import Help from "./Pages/SalesOfferPages/Help";
import Categories from "./Pages/MainPages/Categories";
import Brands from "./Pages/MainPages/Brands";
import Luxe from "./Pages/MainPages/Luxe";
import NykaaFashion from "./Pages/MainPages/NykaaFashion";
import BeautyAdvice from "./Pages/MainPages/BeautyAdvice";
import MakeUp from "./Pages/NavPages/MakeUp";
import Skin from "./Pages/NavPages/Skin";
import Hair from "./Pages/NavPages/Hair";
import Appliances from "./Pages/NavPages/Appliances";
import BathBody from "./Pages/NavPages/BathBody";
import Natural from "./Pages/NavPages/Natural";
import MomBaby from "./Pages/NavPages/MomBaby";
import HealthWellness from "./Pages/NavPages/HealthWellness";
import Men from "./Pages/NavPages/Men";
import Fragrance from "./Pages/NavPages/Fragrance";
import Lingerie from "./Pages/NavPages/Lingerie";
import Slider from "./Component/Home/Slider";
import "react-multi-carousel/lib/styles.css";

const App = () => {
  const handleScroll = () => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }
  
  return (
    <>
    
      <BrowserRouter>
        <Header />
        <div className="h-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/getApp" element={<GetApp />} />
            <Route path="/storeEvent" element={<StoreEvent />} />
            <Route path="/giftCard" element={<GiftCard />} />
            <Route path="/help" element={<Help />} />
            <Route path="/category" element={<Categories />} />
            <Route path="/brands" element={<Brands />} />
            <Route path="/luxe" element={<Luxe />} />
            <Route path="/nykaaFashion" element={<NykaaFashion />} />
            <Route path="/makeUp" element={<MakeUp />} />
            <Route path="/skin" element={<Skin />} />
            <Route path="/hair" element={<Hair />} />
            <Route path="/appliances" element={<Appliances />} />
            <Route path="/bathBody" element={<BathBody />} />
            <Route path="/natural" element={<Natural />} />
            <Route path="/momBaby" element={<MomBaby />} />
            <Route path="/healthWellness" element={<HealthWellness />} />
            <Route path="/men" element={<Men />} />
            <Route path="/fragrance" element={<Fragrance />} />
            <Route path="/lingerie" element={<Lingerie />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
      <div className="iconContainer" onClick={handleScroll}>
        <BiUpArrowAlt />
      </div>
    </>
  );
};

export default App;
