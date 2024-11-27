"use client";
import React, { useRef, useState } from 'react';
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NavbarThird from '@/Components/Headers/NavbarThird';
import { FaPlay, FaPause, FaLongArrowAltRight } from 'react-icons/fa';

const Page = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  let sliderRef = useRef(null);

  const togglePlayPause = () => {
    if (isPlaying) {
      sliderRef.slickPause();
    } else {
      sliderRef.slickPlay();
    }
    setIsPlaying(!isPlaying);
  };

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  };

  return (
    <>
      <div className="bg-gradient-to-r from-pink-500 via-orange-500 to-rose-600 py-3" role="region" aria-label="Announcement">
        <p className="text-base flex justify-center text-slate-100 font-semibold">
          RAMADAN KAREEM
        </p>
      </div>

      <NavbarThird />

      <div className="bg-gradient-to-r from-pink-700 via-orange-700 to-rose-700 py-3" role="region" aria-label="Announcement">
        <p className="text-4xl flex justify-center text-slate-100 font-semibold sm:text-base max-sm:text-base">Ramadan Celebrations?</p>
        <p className="text-xl flex justify-center text-slate-100 font-bold tracking-widest" >We got you covered</p>
      </div>
      <div className="max-w-full mx-auto mb-10 z-0 max-sm:max-w-96">
        <Slider ref={slider => (sliderRef = slider)} {...settings} className="dots mt-3">
          <div className="slick-slide">
            <div className="h-[70vh] flex flex-wrap justify-center items-center relative">
              <Image
                src="https://book.hafla.com/cdn/shop/files/Untitled_design_13.png?v=1710337684"
                className="object-cover h-full w-full opacity-85 max-sm:max-w-auto"
                alt=""
                layout="fill"
              />
              <div className="absolute inset-0 bg-black opacity-75"></div>
              <div className='absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center'>
                <h2 className='text-white text-5xl my-4 font-bold max-sm:text-xl'>Ramadan Venues</h2>
                <p className='text-xl my-4 text-white tracking-widest max-sm:text-sm'>Best Venues in UAE for your Iftar Dining</p>
                <button className="text-black bg-gradient-to-b from-slate-200 via-gray-300 to-gray-400 font-bold py-4 px-20 rounded-full shadow-2xl max-sm:px-10">
                  Explore
                </button>
              </div>
            </div>
          </div>
          <div className="slick-slide">
            <div className="h-[70vh] flex flex-wrap justify-center items-center relative">
              <Image
                src="https://book.hafla.com/cdn/shop/files/National_Day_Ramadan_Jean_2022_hafla05.jpg?v=1710334673"
                className="object-cover h-full w-full opacity-85 max-sm:max-w-auto"
                alt=""
                layout="fill"
              />
              <div className="absolute inset-0 bg-black opacity-75"></div>
              <div className='absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center'>
                <h2 className='text-white text-5xl my-4 font-bold max-sm:text-xl'>Ramadan Setups</h2>
                <p className='text-xl my-4 text-white tracking-widest max-sm:text-sm'>Perfect Tents & Majlis for your ramadan set-up</p>
                <button className="text-black bg-gradient-to-b from-slate-200 via-gray-300 to-gray-400 font-bold py-4 px-20 rounded-full max-sm:px-10">
                  Explore
                </button>
              </div>
            </div>
          </div>
          <div className="slick-slide">
            <div className="h-[70vh] flex flex-wrap justify-center items-center relative">
              <Image
                src="https://book.hafla.com/cdn/shop/files/Ramadan_set-up_1.jpg?v=1710334673"
                className="object-cover h-full w-full opacity-85 max-sm:max-w-auto"
                alt=""
                layout="fill"
              />
              <div className="absolute inset-0 bg-black opacity-75"></div>
              <div className='absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center'>
                <h2 className='text-white text-5xl my-4 font-bold max-sm:text-xl'>Ramadan Catering</h2>
                <p className='text-xl my-4 text-white tracking-widest max-sm:text-sm'>Iftar and Suhoor Buffet for your Home and Office</p>
                <button className="text-black bg-gradient-to-b from-slate-200 via-gray-300 to-gray-400 font-bold py-4 px-20 rounded-full max-sm:px-10">
                  Explore
                </button>
              </div>
            </div>
          </div>
          <div className="slick-slide">
            <div className="h-[70vh] flex flex-wrap justify-center items-center relative">
              <Image
                src="https://book.hafla.com/cdn/shop/files/WhatsApp_Image_2024-02-07_at_1.38.25_PM.jpg?v=1710343000"
                className="object-cover h-full w-full opacity-85 max-sm:max-w-auto"
                alt=""
                layout="fill"
              />
              <div className="absolute inset-0 bg-black opacity-75"></div>
              <div className='absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center'>
                <h2 className='text-white text-5xl my-4 font-bold max-sm:text-xl'>Ramadan Decoration & Fabrication</h2>
                <p className='text-xl my-4 text-white tracking-widest max-sm:text-sm'>For your Corporate Iftars or Charity</p>
                <button className="text-black bg-gradient-to-b from-slate-200 via-gray-300 to-gray-400 font-bold py-4 px-20 rounded-full max-sm:px-10">
                  Explore
                </button>
              </div>
            </div>
          </div>
        </Slider>
        <div className='flex mx-auto justify-center ml-40 max-sm:ml-40'>
          <div className="btn" onClick={togglePlayPause} style={{ background: 'none', border: 'none', marginLeft: "20px" }}>
            {isPlaying ? <FaPause /> : <FaPlay />}
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-r from-pink-500 via-orange-500 to-rose-600 py-3" role="region" aria-label="Announcement">
        <p className="text-4xl flex justify-center text-slate-100 font-semibold max-sm:text-xl">
          OUR RAMADAN SERVICES
        </p>
      </div>
      <div className='bg-white my-20 mx-20 max-sm:mx-1'>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          <div className="border-2 border-slate-200 bg-slate-100 shadow-xl p-8 cursor-pointer rounded-md overflow-hidden group">
            <div className="relative overflow-hidden h-96"> {/* Added h-full to make heights equal */}
              <Image width={100} height={100} alt="Ramadan Decor and Fabrication" src="https://book.hafla.com/cdn/shop/files/Untitled_design_13.png?v=1710337684" layout='responsive' className="w-full h-full object-cover group-hover:scale-125 transition-all duration-300" />
            </div>
            <div className="p-2">
              <h2 className='text-2xl my-3 border-b border-gray-800 border-spacing-4 w-fit font-semibold'>RAMADAN VENUES</h2>
              <h3 className="text-xl font-bold max-sm:text-sm">Savor Ramadan's flavors at our exquisite iftar venues</h3>
            </div>
          </div>
          <div className="border-2 border-slate-200 bg-slate-100 shadow-xl p-8 cursor-pointer rounded-md overflow-hidden group">
            <div className="relative overflow-hidden h-96"> {/* Added h-full to make heights equal */}
              <Image width={100} height={100} alt="Ramadan Decor and Fabrication" src="https://book.hafla.com/cdn/shop/files/shutterstock_1334439962.jpg?v=1710334676" layout='responsive' className="w-full h-full object-cover group-hover:scale-125 transition-all duration-300" />
            </div>
            <div className="p-2">
              <h2 className='text-2xl my-3 border-b border-gray-800 border-spacing-4 w-fit font-semibold'>RAMADAN DECOR & FABRICATION</h2>
              <h3 className="text-xl font-bold max-sm:text-sm">Illuminate your Ramadan with inspiring decor and bespoke fabrication</h3>
            </div>
          </div>
          <div className="border-2 border-slate-200 bg-slate-100 shadow-xl p-8 cursor-pointer rounded-md overflow-hidden group">
            <div className="relative overflow-hidden h-96"> {/* Added h-full to make heights equal */}
              <Image width={100} height={100} alt="Ramadan Decor and Fabrication" src="https://book.hafla.com/cdn/shop/files/Ramadan_set-up_1.jpg?v=1710334673" layout='responsive' className="w-full h-full object-cover group-hover:scale-125 transition-all duration-300" />
            </div>
            <div className="p-2">
              <h2 className='text-2xl my-3 border-b border-gray-800 border-spacing-4 w-fit font-semibold'>RAMADAN CATERING</h2>
              <h3 className="text-xl font-bold max-sm:text-sm">Where every dish is a celebration of tradition and taste.</h3>
            </div>
          </div>
          <div className="border-2 border-slate-200 bg-slate-100 shadow-xl p-8 cursor-pointer rounded-md overflow-hidden group">
            <div className="relative overflow-hidden h-96"> {/* Added h-full to make heights equal */}
              <Image width={100} height={100} alt="Ramadan Decor and Fabrication" src="https://book.hafla.com/cdn/shop/files/National_Day_Ramadan_Jean_2022_hafla05.jpg?v=1710334673" layout='responsive' className="w-full h-full object-cover group-hover:scale-125 transition-all duration-300" />
            </div>
            <div className="p-2">
              <h2 className='text-2xl my-3 border-b border-gray-800 border-spacing-4 w-fit font-semibold'>RAMADAN TENTS & SET-UP</h2>
              <h3 className="text-xl font-bold max-sm:text-sm">Creating an ambiance of serenity and tradition</h3>
            </div>
          </div>
          <div className="border-2 border-slate-200 bg-slate-100 shadow-xl p-8 cursor-pointer rounded-md overflow-hidden group">
            <div className="relative overflow-hidden h-96"> {/* Added h-full to make heights equal */}
              <Image width={100} height={100} alt="Ramadan Decor and Fabrication" src="https://book.hafla.com/cdn/shop/files/WhatsApp_Image_2024-02-07_at_1.38.25_PM.jpg?v=1710343000" layout='responsive' className="w-full h-full object-cover group-hover:scale-125 transition-all duration-300" />
            </div>
            <div className="p-2">
              <h2 className='text-2xl my-3 border-b border-gray-800 border-spacing-4 w-fit font-semibold'>IFTAR MEAL BOXES</h2>
              <h3 className="text-xl font-bold max-sm:text-sm">Brimming with love, flavor, and tradition</h3>
            </div>
          </div>
          <div className="border-2 border-slate-200 bg-slate-100 shadow-xl p-8 cursor-pointer rounded-md overflow-hidden group">
            <div className="relative overflow-hidden h-96"> {/* Added h-full to make heights equal */}
              <Image width={100} height={100} alt="Ramadan Decor and Fabrication" src="https://book.hafla.com/cdn/shop/files/Ramadan_Majlis_2023_14.jpg?v=1710334673" layout='responsive' className="w-full h-full object-cover group-hover:scale-125 transition-all duration-300" />
            </div>
            <div className="p-2">
              <h2 className='text-2xl my-3 border-b border-gray-800 border-spacing-4 w-fit font-semibold'>RAMADAN ARTISTS</h2>
              <h3 className="text-xl font-bold max-sm:text-sm">Brushing strokes of spirituality onto the canvas of Ramadan</h3>
            </div>
          </div>
        </div>

      </div>
      <div className="bg-gradient-to-r from-pink-500 via-orange-500 to-rose-600 py-3" role="region" aria-label="Announcement">
        <p className="text-2xl flex flex-wrap justify-center text-slate-100 font-semibold max-sm:text-sm">
          The best cuisines, in the month of blessings and happiness!
        </p>
      </div>
      <div className='my-20 mx-20 max-sm:mx-2'>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div className="bg-slate-100 shadow-xl cursor-pointer rounded-md overflow-hidden group">
            <Image src="https://book.hafla.com/cdn/shop/files/international_arabicbuffet.jpg?v=1709195487"
              width={100} height={100} alt='product' layout='responsive' />
            <div className='mx-6 my-6'>
              <h2 className='text-2xl flex gap-3 font-semibold max-sm:text-base'>Iftar Buffet Packages <FaLongArrowAltRight size={24} color='blue' />
              </h2>
            </div>
          </div>
          <div className="bg-slate-100 shadow-xl cursor-pointer rounded-md overflow-hidden group">
            <Image src="https://book.hafla.com/cdn/shop/files/emirati-buffet.jpg?v=1699853699"
              width={100} height={100} alt='product' layout='responsive' />
            <div className='mx-6 my-6'>
              <h2 className='text-2xl flex gap-3 font-semibold max-sm:text-base'>Emirati Buffet  <FaLongArrowAltRight size={24} color='blue' />
              </h2>
            </div>
          </div>
          <div className="bg-slate-100 shadow-xl cursor-pointer rounded-md overflow-hidden group">
            <Image src="https://book.hafla.com/cdn/shop/files/international-buffet.jpg?v=1689244934"
              width={100} height={100} alt='product' layout='responsive' />
            <div className='mx-6 my-6'>
              <h2 className='text-2xl flex gap-3 font-semibold max-sm:text-base'>Ramadan International Buffet  <FaLongArrowAltRight size={24} color='blue' />
              </h2>
            </div>
          </div>
          <div className="bg-slate-100 shadow-xl cursor-pointer rounded-md overflow-hidden group">
            <Image src="https://book.hafla.com/cdn/shop/products/shutterstock_533061895_1.jpg?v=1689231584"
              width={100} height={100} alt='product' layout='responsive' />
            <div className='mx-6 my-6'>
              <h2 className='text-2xl flex gap-3 font-semibold max-sm:text-base'>Ramadan International Finger Food  <FaLongArrowAltRight size={24} color='blue' />
              </h2>
            </div>
          </div>
          <div className="bg-slate-100 shadow-xl cursor-pointer rounded-md overflow-hidden group">
            <Image src="https://book.hafla.com/cdn/shop/files/ArabicFingerFood.jpg?v=1699852887"
              width={100} height={100} alt='product' layout='responsive' />
            <div className='mx-6 my-6'>
              <h2 className='text-2xl flex gap-3 font-semibold max-sm:text-base'>Ramadan Middle Eastern Finger Food  <FaLongArrowAltRight size={24} color='blue' />
              </h2>
            </div>
          </div>
          <div className="bg-slate-100 shadow-xl cursor-pointer rounded-md overflow-hidden group">
            <Image src="https://book.hafla.com/cdn/shop/files/middle-eastern-buffet_1_dea3f4ab-4e3a-44ae-a618-471cb6eed0d1.jpg?v=1689244255"
              width={100} height={100} alt='product' layout='responsive' />
            <div className='mx-6 my-6'>
              <h2 className='text-2xl flex gap-3 font-semibold max-sm:text-base'>Middle Eastern Buffet  <FaLongArrowAltRight size={24} color='blue' />
              </h2>
            </div>
          </div>
          <div className="bg-slate-100 shadow-xl cursor-pointer rounded-md overflow-hidden group">
            <Image src="https://book.hafla.com/cdn/shop/collections/live-station_2.jpg?v=1709358714"
              width={100} height={100} alt='product' layout='responsive' />
            <div className='mx-6 my-6'>
              <h2 className='text-2xl flex gap-3 font-semibold max-sm:text-base'>Ramadan Live Stations   <FaLongArrowAltRight size={24} color='blue' />
              </h2>
            </div>
          </div>
          <div className="bg-slate-100 shadow-xl cursor-pointer rounded-md overflow-hidden group">
            <Image src="https://book.hafla.com/cdn/shop/collections/chabab.jpg?v=1709358767"
              width={100} height={100} alt='product' layout='responsive' />
            <div className='mx-6 my-6'>
              <h2 className='text-2xl flex gap-3 font-semibold max-sm:text-base'>Emirati Live Stations   <FaLongArrowAltRight size={24} color='blue' />
              </h2>
            </div>
          </div>
        
        </div>
        <div className='my-20 flex flex-wrap mx-auto justify-center'>
            <a href="#" className="relative px-20 text-xl font-bold py-3 overflow-hidden text-gray-600 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group">
              <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-300 border-t-2 border-gray-600 group-hover:w-full ease" />
              <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-300 border-b-2 border-gray-600 group-hover:w-full ease" />
              <span className="absolute top-0 left-0 w-full h-0 transition-all duration-400 delay-300 bg-gray-600 group-hover:h-full ease" />
              <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-400 delay-300 bg-gray-600 group-hover:h-full ease" />
              <span className="absolute inset-0 w-full h-full duration-500 delay-200 bg-gray-900 opacity-0 group-hover:opacity-100" />
              <span className="relative transition-colors duration-500 delay-200 group-hover:text-white ease">View All</span>
            </a>

          </div>
      </div>
   
    </>
  );
};

export default Page;


