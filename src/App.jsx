
import { useNavigate } from 'react-router-dom';
import {Route,Routes} from 'react-router-dom'
import Home from './pages/Home';
import Navbar from "./components/Home/Navbar/Navbar"
import About from './components/About/About';
import Footer from './components/Home/footer';
import NotFound from './components/pages/NotFound'
import FAQHeader from './components/pages/FAQ';
import Contect from './components/Contect/Contect';
import Wishlist from './components/Shop/Wishlist';
import BlogPage from './components/Blogs/blogs';
import ProductDetails from './components/Shop/ProductsDit';
import MobileBottomNav from './components/Home/Navbar/MobileBottomNav';
import SidePanel from './components/Home/Navbar/Sidepanle';
import PanelContent from './components/Home/Navbar/PanelContent';
import { useState } from 'react';
const App = () => {
  let neviget = useNavigate()
   const btnClick = () =>{
  neviget('/')
    }
    
      const [panel, setPanel] = useState(null);
  return (
    
    <div className="  max-w-9xl overflow-hidden  bg-white">
      <Navbar />
      <MobileBottomNav panel={panel} setPanel={setPanel} />
       <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contect />} />
        <Route path='/Wishlist' element={<Wishlist />} />
        <Route path='/product-details' element={<ProductDetails />} />
      </Routes>
      <Footer />
      <SidePanel
        open={panel !== null}
        onClose={() => setPanel(null)}
        title="Menu"
      >
        <PanelContent panel={panel} setPanel={setPanel} />
      </SidePanel>
    </div>
  );
};

export default App;
{/* <Route path='/product' element={<Product />} >
<Route path= '*'element={<Not />} />
        <Route path='men' element={<Men />} />
        <Route path='women' element={<Women />} />
        </Route> */}