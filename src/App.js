import React from 'react'
import './App.css'
import Header from './Component/Header/Header'
import Home from './Pages/Home'
import Footer from './Component/Footer/Footer'
import { BiUpArrowAlt } from "react-icons/bi";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GetApp from './Pages/OfferBenar/GetApp'
import StoreEvent from './Pages/OfferBenar/StoreEvent'
import GiftCard from './Pages/OfferBenar/GiftCard'
import Help from './Pages/OfferBenar/Help'
import Categories from './Pages/CategoryBrands/Categories'
import Brands from './Pages/CategoryBrands/Brands'
import Luxe from './Pages/CategoryBrands/Luxe'
import NykaaFashion from './Pages/CategoryBrands/NykaaFashion'
import BeautyAdvice from './Pages/CategoryBrands/BeautyAdvice'
import MakeUp from './Pages/Menu/MakeUp'
import Skin from './Pages/Menu/Skin'
import Hair from './Pages/Menu/Hair'
import Appliances from './Pages/Menu/Appliances'
import BathBody from './Pages/Menu/BathBody'
import Natural from './Pages/Menu/Natural'
import MomBaby from './Pages/Menu/MomBaby'
import HealthWellness from './Pages/Menu/HealthWellness'
import Men from './Pages/Menu/Men'
import Fragrance from './Pages/Menu/Fragrance'
import Lingerie from './Pages/Menu/Lingerie'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <div className='h-content'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/getApp' element={<GetApp />} />
            <Route path='/storeEvent' element={<StoreEvent />} />
            <Route path='/giftCard' element={<GiftCard />} />
            <Route path='/help' element={<Help />} />
            <Route path='/category' element={<Categories />} />
            <Route path='/brands' element={<Brands />} />
            <Route path='/luxe' element={<Luxe />} />
            <Route path='/nykaaFashion' element={<NykaaFashion />} />
            <Route path='/makeUp' element={<MakeUp />} />
            <Route path='/skin' element={<Skin />} />
            <Route path='/hair' element={<Hair />} />
            <Route path='/appliances' element={<Appliances />} />
            <Route path='/bathBody' element={<BathBody />} />
            <Route path='/natural' element={<Natural />} />
            <Route path='/momBaby' element={<MomBaby />} />
            <Route path='/healthWellness' element={<HealthWellness />} />
            <Route path='/men' element={<Men />} />
            <Route path='/fragrance' element={<Fragrance />} />
            <Route path='/lingerie' element={<Lingerie />} />
          </Routes>
        </div>
        <Footer />
        <div className='iconContainer'>
          <BiUpArrowAlt />
        </div>
      </BrowserRouter>
    </>
  )
}

export default App