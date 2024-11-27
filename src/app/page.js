import React from 'react';
import ProductCategory from '@/Components/ProductCategory';
import Banner from '@/Components/Banner';
import Product from '@/Components/Product';
import ProductCard2 from '@/Components/ProductCard2';
import Carousel from '@/Components/Carousel';
import GalleryCarousel from "@/Components/GalleryCarousel";
import HeroSection from '@/Components/HeroSection'
import Navbar from '@/Components/Headers/Navbar';




const page = () => {
  return (
    <>
    <Navbar/>
      <ProductCategory />
      <Banner title={"Premium Event Planning Services"} btn={"Book a free consultation"} />
      <Product />
      <Banner title={"Become A Partner"} text={"3 Easy Steps To Join the Crescent!"} btn={"Start Here"} />
       <Carousel/>
       <ProductCard2/>
       <GalleryCarousel/>
       <HeroSection/>
     
    </>
  )
}

export default page