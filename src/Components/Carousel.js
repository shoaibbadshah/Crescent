"use client"
import React, { useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function SimpleSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleBeforeChange = (oldIndex, newIndex) => {
    setCurrentSlide(newIndex);
    updateStepBackground(newIndex);
  };

  const updateStepBackground = (index) => {
    const stepButtons = document.querySelectorAll(".step-btn");
    stepButtons.forEach((button, i) => {
      if (i === index) {
        button.style.background = 'linear-gradient(90deg, rgb(243, 128, 35) -90.01%, rgb(221, 87, 157) 205.57%, rgb(238, 61, 36) 467.37%)';
      } else {
        button.style.background = 'white';
      }
    });
  };

  var settings = {
    infinite: false,
    dots: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true, // Enable arrows for navigation
    nextArrow: (
      <FaArrowRight className="bg-white border-2 border-black-400" size={28} color="black" />
    ),
    prevArrow: (
      <FaArrowLeft size={28} color="black" />
    ),
    beforeChange: handleBeforeChange
  };

  const calculateProgress = (currentSlide) => {
    return (currentSlide + 1) * (100 / 4);
  };

  return (
    <>
      <section className="text-gray-600 py-10 bg-slate-50 body-font">
        <div className="my-20">
        <div className="font-google-basic text-2xl lg:text-45px text-nero uppercase leading-8 lg:leading-16 text-center font-medium tracking-widest" style={{ letterSpacing: 3 }}>We love our clients</div><div className="text-nero text-xs md:text-xl leading-4 font-bold mt-1 text-center Montserrat " style={{ letterSpacing: 2 }}>and they love us too!</div><hr style={{ height: 5, width: 80, borderRadius: 20, background: 'linear-gradient(90deg, rgb(243, 128, 35) -90.01%, rgb(221, 87, 157) 205.57%, rgb(238, 61, 36) 467.37%)', margin: '10px auto auto' }} />
        </div>
        <div className="flex space-x-6 items-center mx-auto justify-center">
          <div className="flex items-center">
            <button className="w-10 h-10 rounded-full border border-black flex items-center justify-center bg-white text-black step-btn">
              1
            </button>
            <div className="ml-2">
              <span className="text-black max-sm:hidden">Get Inspired</span>
            </div>
          </div>

          <div className="flex items-center">
            <div className="relative">
              <span className="absolute left-0 top-1/2 transform -translate-y-1/2 h-0.5 bg-black w-full"></span>
            </div>
            <button className="w-10 h-10 rounded-full border border-black flex items-center justify-center bg-white text-black step-btn">
              2
            </button>
            <div className="ml-2">
              <span className="text-gray-500 max-sm:hidden">Consult with Experts</span>
            </div>
          </div>

          <div className="flex items-center">
            <div className="relative">
              <span className="absolute left-0 top-1/2 transform -translate-y-1/2 h-0.5 bg-black w-full"></span>
            </div>
            <button className="w-10 h-10 rounded-full border border-black flex items-center justify-center bg-white text-black step-btn">
              3
            </button>
            <div className="ml-2">
              <span className="text-gray-500 max-sm:hidden">Book your Crescent</span>
            </div>
          </div>

          <div className="flex items-center">
            <div className="relative">
              <span className="absolute left-0 top-1/2 transform -translate-y-1/2 h-0.5 bg-black w-full"></span>
            </div>
            <button className="w-10 h-10 rounded-full border border-black flex items-center justify-center bg-white text-black step-btn">
              4
            </button>
            <div className="ml-2">
              <span className="text-gray-500 max-sm:hidden">Celebrate!</span>
            </div>
          </div>
        </div>
        <div className="max-w-lg my-10 mx-auto relative">
          <Slider {...settings}>
            <div className="px-4">
              <Image src="https://s3.ap-south-1.amazonaws.com/production.media.hafla.com/static_images/host/how-does-it-work/hdw-1.svg" className="flex mx-auto" alt="" width={96} height={100} />
              <div className="bg-gray-50 rounded-lg shadow-xl p-4">

                <h3 className="text-xl font-semibold mb-2 text-center">Get Inspired</h3>
                <p className="px-10">Browse Our 10k Products, services, Packages, And Exclusive Deals.</p>
              </div>
            </div>

            <div className="px-4">
              < Image src="https://s3.ap-south-1.amazonaws.com/production.media.hafla.com/static_images/host/how-does-it-work/hdw-2.svg" className="flex mx-auto" alt="" width={100} height={100} />
              <div className="bg-gray-50 rounded-lg shadow-xl p-4">

                <h3 className="text-xl font-semibold mb-2 text-center">Consult With Experts</h3>
                <p className="px-10">Need help? Live Chat With Event Experts.</p>
              </div>
            </div>

            <div className="px-4">
              < Image src="https://s3.ap-south-1.amazonaws.com/production.media.hafla.com/static_images/host/how-does-it-work/hdw-3.svg" className="flex mx-auto" alt="" width={100} height={100} />
              <div className="bg-gray-50 rounded-lg shadow-xl p-4">

                <h3 className="text-xl font-semibold mb-2 text-center">Book your Crescent</h3>
                <p className="px-10">Select Your Items, Add-To-Cart, And Pay.</p>
              </div>
            </div>

            <div className="px-4">
              < Image src="https://s3.ap-south-1.amazonaws.com/production.media.hafla.com/static_images/host/how-does-it-work/hdw-4.svg" className="flex mx-auto" alt="" width={100} height={100} />
              <div className="bg-gray-50 rounded-lg shadow-xl p-4">

                <h3 className="text-xl font-semibold mb-2 text-center">Celebrate!</h3>
                <p className="px-10">Relax And Watch The Magic Unfold As You.</p>
              </div>
            </div>

          </Slider>
          <div className="progress-bar">
            <div
              className="progress"
              style={{ width: `${calculateProgress(currentSlide)}%` }}
            >
              <span style={{ color: calculateProgress(currentSlide) === 100 ? 'white' : 'white' }}>
                {calculateProgress(currentSlide)}%
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}





