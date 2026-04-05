
import { useNavigate } from 'react-router-dom';
import {Route,Routes} from 'react-router-dom'
import Home from './pages/Home';
import Navbar from "./components/Home/Navbar/Navbar"
import About from './components/About/About';
import Footer from './components/Home/footer';
import Contect from './components/Contect/Contect';
import Wishlist from './components/Shop/Wishlist';
import ProductDetails from './components/Shop/ProductsDit';
import MobileBottomNav from './components/Home/Navbar/MobileBottomNav'
import { useState } from 'react';
import Login from './components/Home/Navbar/Login';
const App = () => {
  
  return (
    
    <div className="  bg-white">
      <Navbar />
      <MobileBottomNav  />
       <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contect />} />
        <Route path='/Wishlist' element={<Wishlist />} />
        <Route path='/product-details' element={<ProductDetails />} />
        <Route path='/login' element={<Login />} />

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