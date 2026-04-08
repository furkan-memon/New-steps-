
import { useNavigate } from 'react-router-dom';
import {Route,Routes} from 'react-router-dom'
import Home from './pages/Home';
import Navbar from "./components/Home/Navbar/Navbar"
import About from './pages/About';
import Footer from './components/Home/footer';
import ContectUs from './pages/ContectUs';
import Wishlist from './pages/Wishlist';
import ProductDetails from './components/ProductsDit';
import MobileBottomNav from './components/Home/Navbar/MobileBottomNav'
import { useState } from 'react';
import Login from './components/Home/Navbar/Login';
import Collection from './pages/collection';
import Checkout from './pages/Checkout';
import Bag from './components/Bag';

const App = () => {
  
  return (
    
    <div className="  bg-white">
      <Navbar />
      <MobileBottomNav  />
       <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<ContectUs />} />
        <Route path='/Wishlist' element={<Wishlist />} />
        <Route path='/product-details' element={<ProductDetails />} />
        <Route path='/login' element={<Login />} />
        <Route path='/collection' element={<Collection />} />
        <Route path='/Checkout' element={<Checkout/>} />
        <Route path='/cart' element={<Bag />} />
        
      </Routes>
      <Footer />
     
    </div>
  );
};

export default App;
{/* <Route path='/product' element={<Product />} >
<Route path= '*'element={<Not />} />
        <Route path='men' element={<Men />} />
        <Route path='women' element={<Women />} />
        </Route> */}