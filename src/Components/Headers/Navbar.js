"use client";
import React, { useState, useEffect, useRef } from 'react';
import Link from "next/link";
import Image from 'next/image';
import SubHeader from "./SubHeader"
import { FaPhoneAlt, FaRegUserCircle, FaBars, FaTimes, FaSearch, FaWhatsapp } from 'react-icons/fa';
import { AiOutlineShopping } from "react-icons/ai";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";



const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [showSearchInput, setShowSearchInput] = useState(false);
    const [showSubHeader, setShowSubHeader] = useState(false);
    const iconColor = scrollPosition > 350 ? 'orange' : 'white';

    const toggleMenu = () => {
        setOpen(!open);
    };

    useEffect(() => {
        const handleScroll = () => {
            const currentPosition = window.pageYOffset;
            setScrollPosition(currentPosition);

            // Show search input when scrolled beyond 300px
            if (currentPosition > 350) {
                setShowSearchInput(true);
                setShowSubHeader(true);
            } else {
                setShowSearchInput(false);
                setShowSubHeader(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <section className="shadow-lg font-poppins dark:bg-gray-800">
            <div className="max-w-full z-0 mx-auto">
                <Image
                    className={`relative top-0 left-0 z-0 max-sm:h-48 transition-opacity duration-500 ${scrollPosition > 350 ? 'opacity-20' : 'opacity-100'}`}
                    src="/images/banner.jpg"
                    alt=""
                    layout="responsive" // Added layout="responsive"
                    width={100}
                    height={100}
                />

                <div className="inset-x-0 flex items-center justify-center z-10">
                    <div className="absolute flex px-3 sm:px-6 py-2 w-[500px] mb-40 border border-gray-700 bg-slate-100 rounded-full dark:border-gray-400 max-sm:mb-4 max-sm:w-80">
                        <button className="flex items-center text-gray-700 dark:text-gray-400 dark:hover:text-blue-500 hover:text-blue-700">
                            <span className="mr-1 ml-2">
                                <FaSearch color='orange' />
                            </span>
                        </button>
                        <input
                            type="text"
                            className="w-full xl:p-2 sm:p-0 text-base text-gray-700 border-0 outline-none bg-slate-100 dark:text-gray-400 dark:bg-gray-800 placeholder-text-100"
                            placeholder="search..."
                        />
                    </div>
                </div>



                <nav className={`flex fixed top-0 left-0 right-0 z-50 items-center justify-between md:px-20 max-sm:px-6 transition-all duration-500 py-4 ${scrollPosition > 350 ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
                    <div className='flex gap-6 py-1 z-10'> <Link href='/' className='bg-gradient-to-tr from-blue-200 to-blue-300 via-pink-400 bg-clip-text text-transparent mt-2 text-3xl font-semibold'>Crescent </Link>
                        {showSearchInput && (
                            <div className="items-center hidden pl-2 ml-auto mr-8 lg:flex lg:ml-0 lg:mr-0">
                                <div className="flex px-6 w-[500px] py-1 border border-gray-700 rounded-full dark:border-gray-400">
                                    <input
                                        type="text"
                                        className="w-full p-2 pr-4 text-base text-gray-700 border-0 outline-none bg-white dark:text-gray-400 dark:bg-gray-800 placeholder-text-100"
                                        placeholder="search..."
                                    />
                                    <button className="flex items-center text-gray-700 dark:text-gray-400 dark:hover:text-blue-500 hover:text-blue-700">
                                        <span className="mr-1 ml-2">
                                            <FaSearch />
                                        </span>
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="flex lg:hidden">
                        <button
                            className="flex items-center px-3 py-2 text-blue-600 border border-blue-200 rounded dark:text-gray-400 hover:text-blue-800 hover:border-blue-300"
                            onClick={toggleMenu}
                        >
                            {open ? (
                                <FaTimes />
                            ) : (
                                <FaBars />
                            )}
                        </button>
                    </div>

                    <ul
                        className={`hidden lg:w-auto lg:space-x-8 lg:items-center lg:flex ${open ? "block" : "hidden"
                            }`}
                    >
                        <li>
                            <Link
                                href="/"
                                className="text-sm text-gray-700 hover:text-blue-700 dark:text-gray-400 dark:hover:text-blue-500">
                                <FaPhoneAlt color={iconColor} size={24} />
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="#"
                                className="text-sm text-gray-700 hover:text-blue-700 dark:text-gray-400 dark:hover:text-blue-500"
                            >
                                <FaWhatsapp color={iconColor} size={28} />
                            </Link>
                        </li>

                        <li>
                            <Link
                                href="/login"
                                className="text-sm flex gap-2 text-gray-700 hover:text-blue-700 dark:text-gray-400 dark:hover:text-blue-500">
                                <FaRegUserCircle color={iconColor} size={28} /> Sign In
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/cart"
                                className="text-sm text-gray-700 hover:text-blue-700 dark:text-gray-400 dark:hover:text-blue-500">
                                <AiOutlineShopping color={iconColor} size={28} />
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/cart"
                                className="text-sm flex gap-2 text-gray-700 hover:text-blue-700 dark:text-gray-400 dark:hover:text-blue-500">
                                Cart <MdOutlineKeyboardArrowDown color={iconColor} size={24} />

                            </Link>
                        </li>
                    </ul>

                </nav>
                {showSubHeader && <SubHeader isVisible={showSubHeader} />}
                {/* Mobile Sidebar */}
                <div
                    className={`absolute inset-0 w-full  opacity-25 dark:bg-gray-400 lg:hidden ${open
                        ? "ease-in-opacity-100 translate-x-0"
                        : "ease-out opacity-0 -translate-x-full"
                        }`}
                ></div>
                <div
                    className={`fixed inset-0 z-10 h-screen p-3 text-gray-700 duration-500 transform shadow-md dark:bg-gray-800 bg-blue-50 w-80 lg:hidden lg:transform-none lg:relative ${open
                        ? "ease-in-opacity-100 translate-x-0"
                        : "ease-out opacity-0 -translate-x-full"
                        }`}
                >

                    <ul className="px-5 text-left mt-20">
                        <li className="pb-3">
                            <Link
                                href="/"
                                className="text-sm text-gray-700 hover:text-blue-400 dark:text-gray-400"
                            >
                                Home
                            </Link>
                        </li>
                        <li className="pb-3">
                            <Link
                                href="/"
                                className="text-sm text-gray-700 hover:text-blue-400 dark:text-gray-400"
                            >
                                About us
                            </Link>
                        </li>

                        <li className="pb-3">
                            <Link
                                href="/product/listing/all-product"
                                className="text-sm text-gray-700 hover:text-blue-400 dark:text-gray-400"
                            >
                                Product
                            </Link>
                        </li>
                        <li className="pb-3">
                            <Link
                                href="/"
                                className="text-sm text-gray-700 hover:text-blue-400 dark:text-gray-400"
                            >
                                Cart
                            </Link>
                        </li>
                    </ul>
                    <div className="flex items-center lg:hidden mt-7">
                        <div className="flex px-6 py-2 border border-gray-700 rounded-full dark:border-gray-400">
                            <input
                                type="text"
                                className="w-full border-0 outline-none pr-4 text-sm text-gray-700 bg-blue-50 dark:text-gray-400 dark:bg-gray-800 placeholder-text-100"
                                placeholder="search..."
                            />
                            <button className="flex items-center text-gray-700 dark:text-gray-400 dark:hover:text-blue-500 hover:text-blue-700">
                                <span className="mr-1 ml-2">Go</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    className="bi bi-arrow-right"
                                    viewBox="0 0 16 16"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

            </div>


        </section>
    );
};

export default Navbar;
