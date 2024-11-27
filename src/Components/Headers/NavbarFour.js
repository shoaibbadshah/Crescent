"use client";
import React, { useState, useRef } from 'react';
import Link from "next/link";
import { FaPhoneAlt, FaRegUserCircle, FaBars, FaTimes, FaSearch, FaWhatsapp, FaChevronDown } from 'react-icons/fa';
import { AiOutlineShopping } from "react-icons/ai";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";



const NavbarFour = () => {
    const [open, setOpen] = useState(false);
    const [dropdownStates, setDropdownStates] = useState([false, false, false, false, false, false]);
    const dropdownRefs = [useRef(null), useRef(null), useRef(null)];


    const toggleMenu = () => {
        setOpen(!open);
    };

    const toggleDropdown = (index) => {
        const updatedDropdownStates = dropdownStates.map((state, i) => (i === index ? !state : false));
        setDropdownStates(updatedDropdownStates);
    };


    return (
        <section className="shadow-lg z-0 font-poppins dark:bg-gray-800">
            <div className="max-w-full mx-auto">

                <nav className="flex fixed top-0 left-0 right-0 z-50 items-center justify-between md:px-20 max-sm:px-6 transition-all duration-500 py-4 bg-white shadow-lg bg-transparent">
                    <div className='flex gap-6 py-1 z-10'> <Link href='/' className='bg-gradient-to-tr from-orange-700 to-blue-300 via-orange-950 bg-clip-text text-transparent text-2xl font-semibold drop-shadow-lg' >Crescent </Link>

                        <div className="items-center hidden pl-2 ml-auto mr-8 lg:flex lg:ml-0 lg:mr-0">
                            <div className="flex px-6 w-[500px] border border-gray-700 rounded-full dark:border-gray-400">
                                <input
                                    type="text"
                                    className="w-full pr-4 text-base text-gray-700 border-0 outline-none bg-white dark:text-gray-400 dark:bg-gray-800 placeholder-text-100"
                                    placeholder="search..."
                                />
                                <button className="flex items-center text-gray-700 dark:text-gray-400 dark:hover:text-blue-500 hover:text-blue-700">
                                    <span className="mr-1 ml-2">
                                        <FaSearch />
                                    </span>
                                </button>
                            </div>
                        </div>

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
                        className={`hidden lg:w-auto lg:space-x-8 lg:items-center lg:flex ${open ? "block" : "hidden"}`}
                    >
                        <li>
                            <Link
                                href="/"
                                className="text-sm text-gray-700 hover:text-blue-700 dark:text-gray-400 dark:hover:text-blue-500"
                            >
                                <FaPhoneAlt color="#ed116c" size={24} />
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/about"
                                className="text-sm text-gray-700 hover:text-blue-700 dark:text-gray-400 dark:hover:text-blue-500"
                            >
                                <FaWhatsapp color="#ed116c" size={28} />
                            </Link>
                        </li>

                        <li>
                            <Link
                                href="/product"
                                className="text-sm flex gap-2 text-gray-700 hover:text-blue-700 dark:text-gray-400 dark:hover:text-blue-500"
                            >
                                <FaRegUserCircle color="#ed116c" size={28} /> Sign In
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/cart"
                                className="text-sm text-gray-700 hover:text-blue-700 dark:text-gray-400 dark:hover:text-blue-500"
                            >
                                <AiOutlineShopping color="#ed116c" size={28} />
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/cart"
                                className="text-sm flex gap-2 text-gray-700 hover:text-blue-700 dark:text-gray-400 dark:hover:text-blue-500"
                            >
                                Cart <MdOutlineKeyboardArrowDown color="#ed116c" size={24} />
                            </Link>
                        </li>
                    </ul>


                </nav>

                <div className="fixed top-20 left-0 right-0 bg-gray-100 z-50 max-sm:hidden transition-all duration-300">


                    <header className="text-gray-600 body-font">
                        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">

                            <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 flex flex-wrap cursor-pointer items-center text-base justify-center" >
                                <a className="mr-5 flex gap-1 md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 hover:text-gray-900 relative" onClick={() => toggleDropdown(0)}>
                                    Event Equipment <FaChevronDown className={`mt-1 ${dropdownStates[0] ? 'transform rotate-180' : ''} `} />
                                    <ul ref={dropdownRefs[0]} className={`dropdown-container absolute z-50 top-full left-0 bg-gray-50 shadow-lg rounded-lg p-4 mt-2 w-[900px] grid grid-cols-4 gap-2 ${dropdownStates[0] ? 'block' : 'hidden'}`}>
                                        <li className="text-gray-700 hover:bg-gray-700 rounded-lg hover:text-white px-3 py-2">Event Furniture</li>
                                        <li className="text-gray-700 hover:bg-gray-700 rounded-lg hover:text-white px-3 py-2">Bouncy & Games</li>
                                        <li className="text-gray-700 hover:bg-gray-700 rounded-lg hover:text-white px-3 py-2">Slides & Pool</li>
                                        <li className="text-gray-700 hover:bg-gray-700 rounded-lg hover:text-white px-3 py-2">Kids & Furniture</li>
                                        <li className="text-gray-700 hover:bg-gray-700 rounded-lg hover:text-white px-3 py-2">Tents & Marquees</li>
                                        <li className="text-gray-700 hover:bg-gray-700 rounded-lg hover:text-white px-3 py-2">Audio & Visuals</li>
                                        <li className="text-gray-700 hover:bg-gray-700 rounded-lg hover:text-white px-3 py-2">Catering & Food Display</li>
                                    </ul>
                                </a>

                                <a className="mr-5 md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 hover:text-gray-900">Food & Beverages</a>
                                <a className="mr-5 flex gap-1 md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 hover:text-gray-900 relative" onClick={() => toggleDropdown(1)}>
                                People & Services <FaChevronDown className={`mt-1 ${dropdownStates[1] ? 'transform rotate-180' : ''} `} />
                                    <ul ref={dropdownRefs[1]} className={`dropdown-container absolute z-50 top-full left-0 bg-gray-50 shadow-lg rounded-lg p-4 mt-2 w-[900px] grid grid-cols-4 gap-2 ${dropdownStates[1] ? 'block' : 'hidden'}`}>
                                        <li className="text-gray-700 hover:bg-gray-700 rounded-lg hover:text-white px-3 py-2">Event Furniture</li>
                                        <li className="text-gray-700 hover:bg-gray-700 rounded-lg hover:text-white px-3 py-2">Bouncy & Games</li>
                                        <li className="text-gray-700 hover:bg-gray-700 rounded-lg hover:text-white px-3 py-2">Slides & Pool</li>
                                        <li className="text-gray-700 hover:bg-gray-700 rounded-lg hover:text-white px-3 py-2">Kids & Furniture</li>
                                        <li className="text-gray-700 hover:bg-gray-700 rounded-lg hover:text-white px-3 py-2">Tents & Marquees</li>
                                        <li className="text-gray-700 hover:bg-gray-700 rounded-lg hover:text-white px-3 py-2">Audio & Visuals</li>
                                        <li className="text-gray-700 hover:bg-gray-700 rounded-lg hover:text-white px-3 py-2">Catering & Food Display</li>
                                    </ul>
                                </a>
                                <a className="mr-5 md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 hover:text-gray-900">Venues</a>
                                <a className="mr-5 md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 hover:text-gray-900">Packages</a>
                                <a className="mr-5 md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 hover:text-gray-900">Kid's Birthdays</a>
                            </nav>

                        </div>
                    </header>

                </div>
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
                                href="/about"
                                className="text-sm text-gray-700 hover:text-blue-400 dark:text-gray-400"
                            >
                                About us
                            </Link>
                        </li>

                        <li className="pb-3">
                            <Link
                                href="/product"
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

export default NavbarFour;


