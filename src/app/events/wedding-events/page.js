"use client"
import Navbar2 from '@/Components/Headers/Navbar2'
import React, { useState } from 'react';
import Marquee from "react-fast-marquee";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight, FaStar, FaTimesCircle } from "react-icons/fa";



const page = () => {


  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState('');

  const toggleModal = (content) => {
    setModalContent(content);
    setShowModal(!showModal);
  };

  var settings = {
    infinite: true,
    dots: false,
    speed: 1000,
    slidesToShow: 3, // Default number of slides to show
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <FaArrowRight size={28} color="black" />,
    prevArrow: <FaArrowLeft size={28} color="black" />,
    responsive: [
      {
        breakpoint: 678, // Breakpoint for mobile screens
        settings: {
          slidesToShow: 1, // Show only 1 slide on mobile screens
        },
      },
    ],
  };


  return (
    <>
      <Navbar2 />
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
        <div className="w-full bg-cover bg-center object-fill h-96" style={{ backgroundImage: 'url("https://s3.ap-south-1.amazonaws.com/production.media.hafla.com/static_images/host/banners/wedding-event-banner.jpg")' }}>
          <div className="md:max-h-96 h-full xl:max-h-96 md:min-h-96 flex items-center justify-start bg-opacity-50 px-5 md:px-20 bg-no-repeat bg-cover bg-top">
            <div className='block'>
              <div className="text-black text-6xl font-semibold max-sm:text-xl">FOREVER STARTS TODAY! <br /> WE GOT THIS.</div>
              <a href="" target="_blank" className="py-4 mt-4 rounded-full bg-white px-10 text-black text-center uppercase cursor-pointer max-sm:text-center max-sm:px-4 inline-block" rel="noreferrer">
                BOOK FREE CONSULTATION
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-8  mx-40 my-10 flex-col md:flex-row justify-between items-start md:items-center max-sm:mx-4">
        <Marquee>
          <div className="px-4">
            <img alt="Sponsors" src="/_next/image?url=https%3A%2F%2Fs3.ap-south-1.amazonaws.com%2Fproduction.media.hafla.com%2Fstatic_images%2Fhost%2Flogos%2Fwedding%2Fabb.jpg&w=384&q=75" decoding="async" data-nimg="fixed" className="max-w-34 w-full mx-auto cursor-pointer" />
          </div>
          <div className="px-4">
            <img alt="Sponsors" src="/_next/image?url=https%3A%2F%2Fs3.ap-south-1.amazonaws.com%2Fproduction.media.hafla.com%2Fstatic_images%2Fhost%2Flogos%2Fwedding%2Famerican-university.jpg&w=384&q=75" decoding="async" data-nimg="fixed" className="max-w-34 w-full mx-auto cursor-pointer" />
          </div>
          <div className="px-4">
            <img alt="Sponsors" src="/_next/image?url=https%3A%2F%2Fs3.ap-south-1.amazonaws.com%2Fproduction.media.hafla.com%2Fstatic_images%2Fhost%2Flogos%2Fwedding%2Fbcg.jpg&w=384&q=75" decoding="async" data-nimg="fixed" className="max-w-34 w-full mx-auto cursor-pointer" />
          </div>
          <div className="px-4">
            <img alt="Sponsors" src="/_next/image?url=https%3A%2F%2Fs3.ap-south-1.amazonaws.com%2Fproduction.media.hafla.com%2Fstatic_images%2Fhost%2Flogos%2Fwedding%2Fchoithrams.jpg&w=384&q=75" decoding="async" data-nimg="fixed" className="max-w-34 w-full mx-auto cursor-pointer" />
          </div>
          <div className="px-4">
            <img alt="Sponsors" src="/_next/image?url=https%3A%2F%2Fs3.ap-south-1.amazonaws.com%2Fproduction.media.hafla.com%2Fstatic_images%2Fhost%2Flogos%2Fwedding%2Femaar.jpg&w=384&q=75" decoding="async" data-nimg="fixed" className="max-w-34 w-full mx-auto cursor-pointer" />
          </div>
          <div className="px-4">
            <img alt="Sponsors" src="/_next/image?url=https%3A%2F%2Fs3.ap-south-1.amazonaws.com%2Fproduction.media.hafla.com%2Fstatic_images%2Fhost%2Flogos%2Fwedding%2Fgems.jpg&w=384&q=75" decoding="async" data-nimg="fixed" className="max-w-34 w-full mx-auto cursor-pointer" />
          </div>
          <div className="px-4">
            <img alt="Sponsors" src="/_next/image?url=https%3A%2F%2Fs3.ap-south-1.amazonaws.com%2Fproduction.media.hafla.com%2Fstatic_images%2Fhost%2Flogos%2Fwedding%2Fhilton.jpg&w=384&q=75" decoding="async" data-nimg="fixed" className="max-w-34 w-full mx-auto cursor-pointer" />
          </div>
          <div className="px-4">
            <img alt="Sponsors" src="/_next/image?url=https%3A%2F%2Fs3.ap-south-1.amazonaws.com%2Fproduction.media.hafla.com%2Fstatic_images%2Fhost%2Flogos%2Fwedding%2Fshuruq.jpg&w=384&q=75" decoding="async" data-nimg="fixed" className="max-w-34 w-full mx-auto cursor-pointer" />
          </div>
        </Marquee>
      </div>
      <div className='bg-slate-50'>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="mx-auto my-20 block mb-7 md:mb-10 text-center">
            <h3 className="text-2xl font-semibold md:text-5xl text-nero leading-5 md:leading-20 mb-2">YOU NAME IT, <br /> WE DO IT!</h3>
            <p className="text-base md:text-base font-semibold">Let’s Get Planning!</p>
          </div>
        </div>
        <div className="max-w-4xl mx-auto my-20 pb-10 block">
          <div className="flex flex-col md:flex-row justify-between items-center md:p-10">
            <div className="w-full p-10 md:w-1/5 max-w-15 mx-auto md:max-w-full md:mx-none order-1 md:order-2">
              <img alt="events" src="https://s3.ap-south-1.amazonaws.com/production.media.hafla.com/static_images/host/icons/engagement.svg" decoding="async" />
            </div>
            <div className="w-full md:w-4/5 text-center md:text-left md:max-w-116.5 block md:hidden">
              <h3 className="my-4 capitalize text-lg md:text-28px font-normal font-Montserrat text-black leading-5 md:leading-8 mb-3"> Engagement </h3>
              <div className="border-solid border-b-2 border-nero w-5 md:w-15 mb-3 md:mb-7 mx-auto" />
            </div>
            <div className="w-full md:w-4/5 text-center md:text-left md:max-w-116.5 order-2 md:order-1">
              <div className="hidden md:block">
                <h3 className="capitalize text-lg md:text-28px font-normal font-Montserrat text-black leading-5 md:leading-8 mb-2"> Engagement </h3>
                <div className="border-solid border-b-2 border-nero w-5 md:w-15 mb-3 md:mb-7" />
              </div>
              <p className="text-sm md:text-base font-medium text-dim-gray">Gearing up for sleepless nights and multiple sessions of a diaper change. No worries, we are here to make things a little easier for you!</p>
              <p className="italic text-sm md:text-base font-medium text-dim-gray mt-4">Furniture / Decoration / Cutlery / Food &amp; Beverages</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center md:p-10 border-t border-dashed border-gray mt-10">
            <div className="w-full p-10 md:w-1/5 max-w-15 mx-auto md:max-w-full md:mx-none">
              <img alt="events" src="https://s3.ap-south-1.amazonaws.com/production.media.hafla.com/static_images/host/icons/sangeet-night.svg" decoding="async" />
            </div>
            <div className="w-full md:w-4/5 text-center md:text-left md:max-w-116.5 block md:hidden">
              <h3 className="my-4 capitalize text-lg md:text-28px font-normal font-Montserrat text-black leading-5 md:leading-8 mb-3"> Sangeet Night </h3>
              <div className="border-solid border-b-2 border-nero w-5 md:w-15 mb-3 md:mb-7 mx-auto" />
            </div>
            <div className="w-full md:w-4/5 text-center md:text-left md:max-w-116.5">
              <div className="hidden md:block">
                <h3 className="capitalize text-lg md:text-28px font-normal font-Montserrat text-black leading-5 md:leading-8 mb-2"> Sangeet Night </h3>
                <div className="border-solid border-b-2 border-nero w-5 md:w-15 mb-3 md:mb-7" />
              </div>
              <p className="text-sm md:text-base font-medium text-dim-gray">What’s a wedding without some stage performances, a warm blend of love and romance, groovy beats, and happiness. Make your Dress classy, dance cheesy, and leave the rest to us.</p>
              <p className="italic text-sm md:text-base font-medium text-dim-gray mt-4">Karaoke &amp; DJ Night / Dance Floor / Food &amp; Bar Counter / Photo &amp; videographer / Photobooth / Games</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center md:p-10 border-t border-dashed border-gray mt-10">
            <div className="w-full p-10 md:w-1/5 max-w-15 mx-auto md:max-w-full md:mx-none order-1 md:order-2">
              <img alt="events" src="https://s3.ap-south-1.amazonaws.com/production.media.hafla.com/static_images/host/icons/heena.svg" decoding="async" />
            </div>
            <div className="w-full md:w-4/5 text-center md:text-left md:max-w-116.5 block md:hidden">
              <h3 className="my-4 capitalize text-lg md:text-28px font-normal font-Montserrat text-black leading-5 md:leading-8 mb-3"> Henna </h3>
              <div className="border-solid border-b-2 border-nero w-5 md:w-15 mb-3 md:mb-7 mx-auto" />
            </div>
            <div className="w-full md:w-4/5 text-center md:text-left md:max-w-116.5 order-2 md:order-1">
              <div className="hidden md:block">
                <h3 className="capitalize text-lg md:text-28px font-normal font-Montserrat text-black leading-5 md:leading-8 mb-2"> Henna </h3>
                <div className="border-solid border-b-2 border-nero w-5 md:w-15 mb-3 md:mb-7" />
              </div>
              <p className="text-sm md:text-base font-medium text-dim-gray">Henna is an integral part of any wedding. They say "if he loves you it will show on your palms". We have partnered with 100+ artists to make this occasion a memorable one.</p>
              <p className="italic text-sm md:text-base font-medium text-dim-gray mt-4">Themed Decoration / Henna artist / Photo &amp; videographer / Furniture</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center md:p-10 border-t border-dashed border-gray mt-10">
            <div className="w-full p-10 md:w-1/5 max-w-15 mx-auto md:max-w-full md:mx-none">
              <img alt="events" src="https://s3.ap-south-1.amazonaws.com/production.media.hafla.com/static_images/host/icons/bachelor-and-cocktail-party.svg" decoding="async" />
            </div>
            <div className="w-full md:w-4/5 text-center md:text-left md:max-w-116.5 block md:hidden">
              <h3 className="my-4 capitalize text-lg md:text-28px font-normal font-Montserrat text-black leading-5 md:leading-8 mb-3"> Bachelor &amp; Cocktail Party </h3>
              <div className="border-solid border-b-2 border-nero w-5 md:w-15 mb-3 md:mb-7 mx-auto" />
            </div>
            <div className="w-full md:w-4/5 text-center md:text-left md:max-w-116.5">
              <div className="hidden md:block">
                <h3 className="capitalize text-lg md:text-28px font-normal font-Montserrat text-black leading-5 md:leading-8 mb-2"> Bachelor &amp; Cocktail Party </h3>
                <div className="border-solid border-b-2 border-nero w-5 md:w-15 mb-3 md:mb-7" />
              </div>
              <p className="text-sm md:text-base font-medium text-dim-gray">It's your last night of freedom so party hard! Modern and chic or classically elegant, cocktail parties have always been the highlights of our social calendars.</p>
              <p className="italic text-sm md:text-base font-medium text-dim-gray mt-4">Food &amp; Bar Counter / Furniture / Garden Decoration / DJ Night</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center md:p-10 border-t border-dashed border-gray mt-10 last:pb-0">
            <div className="w-full p-10 md:w-1/5 max-w-15 mx-auto md:max-w-full md:mx-none order-1 md:order-2">
              <img alt="events" src="https://s3.ap-south-1.amazonaws.com/production.media.hafla.com/static_images/host/icons/wedding-ceremony.svg" decoding="async" />
            </div>
            <div className="w-full md:w-4/5 text-center md:text-left md:max-w-116.5 block md:hidden">
              <h3 className="my-4 capitalize text-lg md:text-28px font-normal font-Montserrat text-black leading-5 md:leading-8 mb-3"> Wedding Ceremony </h3>
              <div className="border-solid border-b-2 border-nero w-5 md:w-15 mb-3 md:mb-7 mx-auto" />
            </div>
            <div className="w-full md:w-4/5 text-center md:text-left md:max-w-116.5 order-2 md:order-1">
              <div className="hidden md:block">
                <h3 className="capitalize text-lg md:text-28px font-normal font-Montserrat text-black leading-5 md:leading-8 mb-2"> Wedding Ceremony </h3>
                <div className="border-solid border-b-2 border-nero w-5 md:w-15 mb-3 md:mb-7" />
              </div>
              <p className="text-sm md:text-base font-medium text-dim-gray">Your big day can be as much of a blast to plan as it is to throw. Our event experts are here to make sure your wedding is personalized in ways you never thought possible!</p>
              <p className="italic text-sm md:text-base font-medium text-dim-gray mt-4">Flowers &amp; decoration / Photography / Furniture / Stage &amp; DJ</p>
            </div>
          </div>

        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
        <div className="mx-auto my-10 block mb-7 md:mb-10 text-center">
          <h3 className="text-2xl font-semibold md:text-5xl text-nero leading-5 md:leading-20 mb-2">Why Crescent ?</h3>
          <p className="text-xl font-bold my-4">We are the world's first AI-powered event organising platform</p>
          <div className="mx-auto my-20 block">
            <div className="block md:grid gap-10 md:grid-flow-col md:grid-cols-3 mb-7 md:mb-14">
              <div className="flex gap-10 text-center md:block md:max-w-42 mx-auto space-x-5 md:space-x-0 mb-3 md:mb-0">
                <span className="inline-block overflow-hidden w-28 h-28 relative">
                  <img alt="why hafla icons" src="https://s3.ap-south-1.amazonaws.com/production.media.hafla.com/static_images/host/icons/option-matching.svg" decoding="async" className="block text-center mx-auto max-w-15 md:max-w-28" />
                </span>
                <p className="text-left md:text-center font-brandon text-sm md:text-base mt-1.5 md:mt-9 block">GET PERSONALISED OPTIONS <br /> MATCHING YOUR IDEAS</p>
              </div>
              <div className="flex gap-10 text-center md:block md:max-w-42 mx-auto space-x-5 md:space-x-0 mb-3 md:mb-0">
                <span className="inline-block overflow-hidden w-28 h-28 relative">
                  <img alt="why hafla icons" src="https://s3.ap-south-1.amazonaws.com/production.media.hafla.com/static_images/host/icons/organise-place.svg" decoding="async" className="block text-center mx-auto max-w-15 md:max-w-28" />
                </span>
                <p className="text-left md:text-center font-brandon text-sm md:text-base mt-1.5 md:mt-9 block">IDEATE, COLLABORATE, <br /> AND ORGANISE AT ONE PLACE</p>
              </div>
              <div className="flex gap-10 text-center md:block md:max-w-42 mx-auto space-x-5 md:space-x-0 mb-3 md:mb-0">
                <span className="inline-block overflow-hidden w-28 h-28 relative">
                  <img alt="why hafla icons" src="https://s3.ap-south-1.amazonaws.com/production.media.hafla.com/static_images/host/icons/payments.svg" decoding="async" className="block text-center mx-auto max-w-15 md:max-w-28" />
                </span>
                <p className="text-left md:text-center font-brandon text-sm md:text-base mt-1.5 md:mt-9 block">MANAGE LOGISTICS AND PAYMENTS <br /> WITH A FEW CLICKS</p>
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-bold text-center leading-8 md:leading-16">WANT TO KNOW US BETTER?</h2>
              <div className="block md:flex w-full mt-4 md:mt-10 md:space-x-7 space-y-3 md:space-y-0">
                <a href="">
                  <button className="text-xs md:text-base bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  text-white font-brandon p-2.5 md:p-5 hover:text-black focus:text-black rounded-md block items-center justify-center cursor-pointer hover:opacity-90 hover:no-underline focus:outline-none focus:ring-0 w-full" >
                    <span className="flex justify-center items-center ">SCHEDULE FREE CONSULTATION</span>
                  </button>
                </a>
                <a href="https://s3.ap-south-1.amazonaws.com/production.media.hafla.com/static_images/host/files/company-profile.pdf" rel="noopener noreferrer" target="_blank" className="w-full block h-full group" download>
                  <button className="w-full text-xs md:text-base bg-gradient-to-l from-red-500 via-blue-400 to-pink-600 text-white font-brandon p-2.5 md:p-5 bg-b2b-btn hover:bg-b2b-hover hover:text-black focus:text-black rounded-md flex items-center justify-center cursor-pointer hover:opacity-90 hover:no-underline focus:outline-none focus:ring-0" >
                    <span className="flex justify-center gap-4 items-center">
                      <img alt="Download Brochure" src="https://s3.ap-south-1.amazonaws.com/production.media.hafla.com/static_images/host/icons/download-white.svg" className="block" />
                      DOWNLOAD BROCHURE
                    </span>
                  </button>
                </a>
              </div>


            </div>

          </div>
        </div>
      </div>

      <div className="flex bg-slate-100 py-10 flex-col md:flex-row justify-between items-start md:items-center">
        <div className="container mx-auto block md:flex">
          <div className="w-full max-w-68 mx-auto md:max-w-full md:w-1/2">
            <div className="max-w-md">
              <p className="text-xl md:text-5xl leading-9 md:leading-12 font-Montserrat font-normal text-black text-center md:text-left mb-2 md:mb-4 " style={{ letterSpacing: 4 }}>
                We work with the passion to deliver amazing event experiences
              </p>
              <p className="text-center md:text-left text-dim-gray leading-5 font-Montserrat text-sm md:text-lg font-semibold mt-7 md:mt-4 block max-sm:px-5 ">
                UAE’s highest rated biggest event service provider with the
                largest inventory from venues to catering, equipment and services!
              </p>
            </div>
          </div>
          <div className="w-full max-w-68 mx-auto md:max-w-full md:w-1/2 md:flex md:flex-wrap justify-center items-center pt-4 md:pt-10">
            <div className="block md:flex w-full space-y-3 md:space-y-0">
              <div className="text-center w-full md:w-1/2 mx-auto">
                <h5 className="text-4xl md:text-7xl md:mb-4 block">
                  <span className="bg-gradient-to-r font-semibold from-pink-500 to-purple-500 text-transparent bg-clip-text">
                    11,000+
                  </span>
                </h5>
                <p className="text-sm font-normal md:text-lg text-center capitalize ">
                  events since 2018
                </p>
              </div>
              <div className="text-center w-full md:w-1/2 mx-auto">
                <h5 className="text-4xl md:text-7xl font-brandon md:mb-4 block">
                  <span className="bg-gradient-to-r font-semibold from-pink-500 to-purple-500 text-transparent bg-clip-text">7,500+</span>
                </h5>
                <p className="text-sm font-normal md:text-lg text-center capitalize ">
                  products &amp; services
                </p>
              </div>
            </div>
            <div className="mt-4 md:mt-11 block w-full text-center">
              <ul className="flex items-center gap-4 justify-center w-full text-center mb-2 md:mb-4">
                <li>
                  <FaStar color='purple' size={32} />
                </li>
                <li>
                  <FaStar color='purple' size={32} />
                </li>
                <li>
                  <FaStar color='purple' size={32} />
                </li>
                <li>
                  <FaStar color='purple' size={32} />
                </li>
                <li>
                  <FaRegStarHalfStroke color='purple' size={32} />
                </li>
              </ul>

              <p className="text-sm font-normal md:text-lg text-center capitalize ">
                rating &amp; reviews
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex bg-white py-10 flex-col md:flex-row justify-around items-start md:items-center">
        <div>
          <div className="flex flex-row items-center">
            <div className="font-google-basic text-lg md:text-4xl text-nero uppercase leading-8 lg:leading-16 text-start tracking-wider flex flex-row" style={{ letterSpacing: 4 }}>SOME OF OUR PAST WEDDING EVENTS</div>
            <hr className="h-1 md:h-5 w-16 md:w-80 ml-2 md:ml-5 rounded-full" style={{ height: 5, width: 80, borderRadius: 20, background: 'linear-gradient(50deg, rgb(220, 124, 10) 7.01%, rgb(202, 87, 121) 56.57%, rgb(205, 76, 91) 100.37%)', alignSelf: 'center' }} />
          </div>
        </div>
        <div className="self-end mt-4 md:mt-0">
          <button className="md:h-auto bg-gradient-to-r from-light-orange via-dark-orange to-rose md:w-auto text-white text-sm md:text-base focus:outline-none ml-0 md:ml-5 font-bold rounded-full uppercase px-8 py-2 tracking-wider" style={{ background: 'linear-gradient(50deg, rgb(220, 124, 10) 7.01%, rgb(202, 87, 121) 56.57%, rgb(205, 76, 91) 100.37%)' }}>View all</button>
        </div>
        </div>
        <div className="w-full max-w-68 mx-auto md:max-w-full md:w-1/2 md:flex md:flex-wrap justify-center items-center pt-4 md:pt-10">

        {showModal && (
          <div className="fixed top-0 left-0 z-50 w-full h-full flex items-center justify-center bg-black bg-opacity-75">
            <div className="relative max-w-screen-md mx-auto p-4">
              <button className="absolute -top-20 -right-20 text-white" onClick={() => toggleModal('')}>
                <FaTimesCircle size={28} />
              </button>
              <img src={modalContent} alt="modal" className="rounded-lg" />
            </div>
          </div>
        )}
        <div className="max-w-screen-2xl px-24 my-10 mx-auto relative">

          <Slider {...settings}>

            <div className="px-4">
              <div className="relative cursor-pointer rounded-lg overflow-hidden flex-shrink-0 me-3 w-96 h-40 md:h-80 md:w-96 bg-cover" style={{ backgroundImage: 'url("https://s3.ap-south-1.amazonaws.com/production.media.hafla.com/static_images/host/gallery/wedding-events/Wedding.jpeg")' }} onClick={() => toggleModal('https://s3.ap-south-1.amazonaws.com/production.media.hafla.com/static_images/host/gallery/wedding-events/Wedding.jpeg')}>
                <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-0 hover:bg-opacity-70 transition duration-500 ease-in-out opacity-0 hover:opacity-100">
                  <p className="text-white text-sm md:text-lg font-semibold leading-4 max-w-72">HALLOWEEN-PARTY</p>
                </div>
              </div>
            </div>
            <div className="px-4">
              <div className="relative cursor-pointer rounded-lg overflow-hidden flex-shrink-0 me-3 w-96 h-40 md:h-80 md:w-96 bg-cover" style={{ backgroundImage: 'url("https://s3.ap-south-1.amazonaws.com/production.media.hafla.com/static_images/host/gallery/wedding-events/Wedding%20Reception.jpeg")' }} onClick={() => toggleModal('https://s3.ap-south-1.amazonaws.com/production.media.hafla.com/static_images/host/gallery/wedding-events/Wedding%20Reception.jpeg')} >
                <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-0 hover:bg-opacity-70 transition duration-500 ease-in-out opacity-0 hover:opacity-100">
                  <p className="text-white text-sm md:text-lg font-semibold leading-4 max-w-72">HALLOWEEN-PARTY2</p>
                </div>
              </div>
            </div>
            <div className="px-4">
              <div className="relative cursor-pointer rounded-lg overflow-hidden flex-shrink-0 me-3 w-96 h-40 md:h-80 md:w-96 bg-cover" style={{ backgroundImage: 'url("https://s3.ap-south-1.amazonaws.com/production.media.hafla.com/static_images/host/gallery/wedding-events/Wedding%20Ceremony(1).jpeg")' }} onClick={() => toggleModal('https://s3.ap-south-1.amazonaws.com/production.media.hafla.com/static_images/host/gallery/wedding-events/Wedding%20Ceremony(1).jpeg')}>
                <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-0 hover:bg-opacity-70 transition duration-500 ease-in-out opacity-0 hover:opacity-100">
                  <p className="text-white text-sm md:text-lg font-semibold leading-4 max-w-72">PIRATE-BDAY-THEME</p>
                </div>
              </div>
            </div>
            <div className="px-4">
              <div className="relative cursor-pointer rounded-lg overflow-hidden flex-shrink-0 me-3 w-96 h-40 md:h-80 md:w-96 bg-cover" style={{ backgroundImage: 'url("https://s3.ap-south-1.amazonaws.com/production.media.hafla.com/static_images/host/gallery/wedding-events/Reception%20Indian%20Wedding(1).jpeg")' }} onClick={() => toggleModal('https://s3.ap-south-1.amazonaws.com/production.media.hafla.com/static_images/host/gallery/wedding-events/Reception%20Indian%20Wedding(1).jpeg')}>
                <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-0 hover:bg-opacity-70 transition duration-500 ease-in-out opacity-0 hover:opacity-100">
                  <p className="text-white text-sm md:text-lg font-semibold leading-4 max-w-72">PIRATE-BDAY-THEME2</p>
                </div>
              </div>
            </div>
            <div className="px-4">
              <div className="relative cursor-pointer rounded-lg overflow-hidden flex-shrink-0 me-3 w-96 h-40 md:h-80 md:w-96 bg-cover" style={{ backgroundImage: 'url("https://s3.ap-south-1.amazonaws.com/production.media.hafla.com/static_images/host/gallery/wedding-events/Wedding%20Ceremony(1).jpeg")' }} onClick={() => toggleModal('https://s3.ap-south-1.amazonaws.com/production.media.hafla.com/static_images/host/gallery/wedding-events/Wedding%20Ceremony(1).jpeg')}>
                <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-0 hover:bg-opacity-70 transition duration-500 ease-in-out opacity-0 hover:opacity-100">
                  <p className="text-white text-sm md:text-lg font-semibold leading-4 max-w-72">PIRATE-BDAY-THEME2</p>
                </div>
              </div>
            </div>



          </Slider>

        </div >
      </div>

    </>
  )
}

export default page



