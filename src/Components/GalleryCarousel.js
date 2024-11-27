"use client"
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight, FaTimesCircle } from "react-icons/fa";
import Image from "next/image";

function GalleryCarousel() {

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
            <section className="text-gray-600 py-10 bg-slate-50 body-font">
            <div className="flex flex-col md:flex-row justify-around items-start md:items-center max-sm:block px-10">
                    <div>
                        <div className="flex flex-row items-center">
                            <div className="font-google-basic text-lg md:text-4xl text-nero uppercase leading-8 lg:leading-16 text-start tracking-wider flex flex-row" style={{ letterSpacing: 7 }}>A GLIMPSE OF PAST EVENTS</div>
                            <hr className="h-1 md:h-5 w-16 md:w-80 ml-2 md:ml-5 rounded-full" style={{ height: 5, width: 80, borderRadius: 20, background: 'linear-gradient(50deg, rgb(220, 124, 10) 7.01%, rgb(202, 87, 121) 56.57%, rgb(205, 76, 91) 100.37%)', alignSelf: 'center' }} />
                        </div>
                    </div>
                    <div className="self-end mt-4 md:mt-0">
                        <button className="md:h-auto bg-purple-950 md:w-auto text-white text-sm md:text-base focus:outline-none ml-0 md:ml-5 font-bold rounded-full uppercase px-8 py-2 tracking-wider" >View all</button>
                    </div>
                </div>

                {showModal && (
                    <div className="fixed top-0 left-0 z-50 w-full h-full flex items-center justify-center bg-black bg-opacity-75">
                        <div className="relative max-w-screen-md mx-auto p-4">
                            <button className="absolute -top-2 -right-10 text-white" onClick={() => toggleModal('')}>
                                <FaTimesCircle size={28} />
                            </button>
                            <img src={modalContent} alt="modal" className="rounded-lg" />
                        </div>
                    </div>
                )}
                <div className="max-w-screen-2xl px-24 my-10 mx-auto relative">
                    
                    <Slider {...settings}>
                        
                        <div className="px-4">
                            <div className="relative cursor-pointer rounded-lg overflow-hidden flex-shrink-0 me-3 w-96 h-40 md:h-80 md:w-96 bg-cover" style={{ backgroundImage: 'url("https://s3.ap-south-1.amazonaws.com/production.media.hafla.com/static_images/host/gallery/home/HALLOWEEN-PARTY.jpg")' }} onClick={() => toggleModal('https://s3.ap-south-1.amazonaws.com/production.media.hafla.com/static_images/host/gallery/home/HALLOWEEN-PARTY.jpg')}>
                                <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-0 hover:bg-opacity-70 transition duration-500 ease-in-out opacity-0 hover:opacity-100">
                                    <p className="text-white text-sm md:text-lg font-semibold leading-4 max-w-72">HALLOWEEN-PARTY</p>
                                </div>
                            </div>
                        </div>
                        <div className="px-4">
                            <div className="relative cursor-pointer rounded-lg overflow-hidden flex-shrink-0 me-3 w-96 h-40 md:h-80 md:w-96 bg-cover" style={{ backgroundImage: 'url("https://s3.ap-south-1.amazonaws.com/production.media.hafla.com/static_images/host/gallery/home/HALLOWEEN-PARTY2.jpg")' }} onClick={() => toggleModal('https://s3.ap-south-1.amazonaws.com/production.media.hafla.com/static_images/host/gallery/home/HALLOWEEN-PARTY2.jpg')} >
                                <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-0 hover:bg-opacity-70 transition duration-500 ease-in-out opacity-0 hover:opacity-100">
                                    <p className="text-white text-sm md:text-lg font-semibold leading-4 max-w-72">HALLOWEEN-PARTY2</p>
                                </div>
                            </div>
                        </div>
                        <div className="px-4">
                            <div className="relative cursor-pointer rounded-lg overflow-hidden flex-shrink-0 me-3 w-96 h-40 md:h-80 md:w-96 bg-cover" style={{ backgroundImage: 'url("https://s3.ap-south-1.amazonaws.com/production.media.hafla.com/static_images/host/gallery/home/PIRATE-BDAY-THEME.jpg")' }} onClick={() => toggleModal('https://s3.ap-south-1.amazonaws.com/production.media.hafla.com/static_images/host/gallery/home/PIRATE-BDAY-THEME.jpg')}>
                                <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-0 hover:bg-opacity-70 transition duration-500 ease-in-out opacity-0 hover:opacity-100">
                                    <p className="text-white text-sm md:text-lg font-semibold leading-4 max-w-72">PIRATE-BDAY-THEME</p>
                                </div>
                            </div>
                        </div>
                        <div className="px-4">
                            <div className="relative cursor-pointer rounded-lg overflow-hidden flex-shrink-0 me-3 w-96 h-40 md:h-80 md:w-96 bg-cover" style={{ backgroundImage: 'url("https://s3.ap-south-1.amazonaws.com/production.media.hafla.com/static_images/host/gallery/home/PIRATE-THEME-BDAY.jpg")' }} onClick={() => toggleModal('https://s3.ap-south-1.amazonaws.com/production.media.hafla.com/static_images/host/gallery/home/PIRATE-THEME-BDAY.jpg')}>
                                <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-0 hover:bg-opacity-70 transition duration-500 ease-in-out opacity-0 hover:opacity-100">
                                    <p className="text-white text-sm md:text-lg font-semibold leading-4 max-w-72">PIRATE-BDAY-THEME2</p>
                                </div>
                            </div>
                        </div>



                    </Slider>

                </div >
            </section >
        </>
    );
}



export default GalleryCarousel

