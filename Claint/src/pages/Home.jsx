import React from 'react'
import Hero from "../components/Home/Hero/Hero";
import LovedProduct from '../components/Home/Lovedproduct'
import DualBanners from "../components/Home/DualBanners";
import NewProduct from '../components/Home/NewProduct'
import Categoriesproducts from '../components/Home/Categoriesproducts'

const Home = () => {
  return (
        
        
      <main className=" ">
        <Hero />
        <LovedProduct />
        <NewProduct />
        <DualBanners />
        <Categoriesproducts />
      </main>
  )
}

export default Home