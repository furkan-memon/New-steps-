import React from 'react'
import Hero from "../components/Home/Hero/Hero";
import Products from '../components/Home/Products'
import LovedProduct from '../components/Home/Lovedproduct'
import PromoBanners from "../components/Home/Banners";
import FeaturedBrands from "../components/Home/FeaturedBrands ";
import DualBanners from "../components/Home/DualBanners";
import NewProduct from '../components/Home/NewProduct'
import Categoriesproducts from '../components/Home/Categoriesproducts'
import ShopByBrands from "../components/Home/ShopBrands";
import CategoryFavorites from "../components/Home/CategoryFavorites ";
import CarProducts from '../components/Home/CareProducts'
import ListingBlog from '../components/Home/LatestBlog'
const Home = () => {
  return (
        
      <main className="   ">
        <Hero />
        <Products />
        <LovedProduct />
        <PromoBanners />
        <FeaturedBrands />
        <DualBanners />
        <NewProduct />
        <Categoriesproducts />
        <ShopByBrands />
        <CategoryFavorites />
        <CarProducts />
        <ListingBlog />
      </main>
  )
}

export default Home