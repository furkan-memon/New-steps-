
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
const App = () => {
  let neviget = useNavigate()
   const btnClick = () =>{
  neviget('/')
    }
  return (
    
    <div className="  overflow-hidden  bg-white">
      <Navbar />
       <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contect />} />
        <Route path='/Wishlist' element={<Wishlist />} />
        <Route path='/product-details' element={<ProductDetails />} />
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