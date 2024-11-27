import React from 'react';
import { FaFacebook, FaFacebookMessenger, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <>
            <footer>
                <div className="bg-neutral-700 p-5 md:px-20 md:py-20 footer-padding-bottom">
                    <div className="flex flex-wrap">
                        <div className="w-full md:w-1/4">
                            <a aria-label="Go home" title="Hafla" className="items-center" href="/">
                                <span>
                                    <h1 className="inline-block text-2xl text-blue-300 md:max-w-26"> Crescent</h1>
                                </span>
                            </a>
                            <div className="w-full mt-2 md:mt-3 font-normal text-xs md:text-lg text-white">Events Simplified</div>
                            <div class="md:justify-start pt-10 pb-4 hidden md:block"><ul class="list-none justify-start grid grid-flow-row grid-cols-5 grid-rows-2 gap-4 w-max">
                                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                    <FaFacebook size={24} color='white' />
                                </a>
                                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                    <FaLinkedin size={24} color='white' />
                                </a>
                                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                    <FaInstagram size={24} color='white' />
                                </a>
                                <a href="https://messenger.com" target="_blank" rel="noopener noreferrer">
                                    <FaFacebookMessenger size={24} color='white' />
                                </a>
                                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                    <FaTwitter size={24} color='white' />
                                </a>
                            </ul></div>


                        </div>
                        <div className="w-2/4 md:w-1/4 pt-4 md:pt-0">
                            <p className="text-xs font-bold md:text-lg uppercase text-white mb-3 md:mb-4">Company</p>
                            <hr style={{ height: 5, width: 80, borderRadius: 20, background: 'linear-gradient(90deg, rgb(243, 128, 35) -90.01%, rgb(221, 87, 157) 205.57%, rgb(238, 61, 36) 467.37%)' }} />
                            <ul className="pt:2 md:pt-3">
                                <li className="mt-1.5 md:mt-3 md:text-base max-w-max leading-4 text-white hover:text-white active:text-white font-thin text-sm">
                                    <a href="/about">About Crescent</a>
                                </li>
                                <li className="mt-1.5 md:mt-3 md:text-base font-extralight max-w-max leading-4 text-white hover:text-white active:text-white text-xs">
                                    <a href="https://www.hafla.com/blog/">Blog</a>
                                </li>
                                <li className="mt-1.5 md:mt-3 md:text-base font-extralight max-w-max leading-4 text-white hover:text-white active:text-white text-xs">
                                    <a href="/contact-us">Contact Us</a>
                                </li>
                            </ul>
                        </div>
                        <div className="w-2/4 md:w-1/4 pt-4 md:pt-0">
                            <p className="text-xs md:text-lg font-medium text-white uppercase mb-3">Explore</p>
                            <hr style={{ height: 5, width: 80, borderRadius: 20, background: 'linear-gradient(90deg, rgb(243, 128, 35) -90.01%, rgb(221, 87, 157) 205.57%, rgb(238, 61, 36) 467.37%)' }} />                            <ul className="pt:2 md:pt-3">
                                <li className="mt-1.5 md:mt-3 text-xs md:text-base font-extralight max-w-max leading-4 text-white hover:text-white active:text-white">
                                    <a href="/">Home</a>
                                </li>
                                <li className="mt-1.5 md:mt-3 text-xs md:text-base font-extralight max-w-max leading-4 text-white hover:text-white active:text-white">
                                    <a href="/events/corporate-events">Corporate Events</a>
                                </li>
                                <li className="mt-1.5 md:mt-3 text-xs md:text-base font-extralight max-w-max leading-4 text-white hover:text-white active:text-white">
                                    <a href="/events/wedding-events">Weddings & Engagements</a>
                                </li>
                                <li className="mt-1.5 md:mt-3 text-xs md:text-base font-extralight max-w-max leading-4 text-white hover:text-white active:text-white">
                                    <a href="/events/celebrations">Other Events</a>
                                </li>
                            </ul>
                        </div>
                        <div className="w-2/4 md:w-1/4 pt-4 md:pt-0">
                            <p className="text-xs md:text-lg font-medium text-white uppercase mb-3">Policy</p>
                            <hr style={{ height: 5, width: 80, borderRadius: 20, background: 'linear-gradient(90deg, rgb(243, 128, 35) -90.01%, rgb(221, 87, 157) 205.57%, rgb(238, 61, 36) 467.37%)' }} />                            <ul className="pt:2 md:pt-3">
                                <li className="mt-1.5 md:mt-3 text-xs md:text-base font-extralight max-w-max leading-4 text-white hover:text-white active:text-white">
                                    <a href="/terms-and-conditions">Terms & Conditions</a>
                                </li>
                                <li className="mt-1.5 md:mt-3 text-xs md:text-base font-extralight max-w-max leading-4 text-white hover:text-white active:text-white">
                                    <a href="/privacy-policy">Privacy Policy</a>
                                </li>
                                <li className="mt-1.5 md:mt-3 text-xs md:text-base font-extralight max-w-max leading-4 text-white hover:text-white active:text-white">
                                    <a href="/acceptable-use-policy">Acceptable Use Policy</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="mt-4 md:mt-10">
                        <p className="text-xs md:text-base text-slate-100 text-center md:text-left text-dim-gray"> Copyright 2024 Crescent. All rights reserved. </p>


                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;
