"use client"
import React, { useState, useEffect, useRef } from 'react';
import { MdOutlineKeyboardArrowUp, MdOutlineKeyboardArrowDown } from "react-icons/md";
import Link from 'next/link'
import { FaBars, FaSearch, FaTimes, FaRegTimesCircle } from 'react-icons/fa';
import { FiShoppingBag } from "react-icons/fi";



const NavbarThird = () => {
  const [menu, setMenu] = useState(false);
  const [dropdownStates, setDropdownStates] = useState([false, false, false, false, false, false]);
  const [searchVisible, setSearchVisible] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const dropdownRefs = [useRef(null), useRef(null), useRef(null)];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMenu(!menu);
  };

  const toggleSearch = () => {
    setSearchVisible(!searchVisible);
  };

  const toggleDropdown = (index) => {
    const updatedDropdownStates = dropdownStates.map((state, i) => (i === index ? !state : false));
    setDropdownStates(updatedDropdownStates);
  };


  return (
    <div className={`bg-gray-500 py-4 ${isSticky ? 'sticky top-0 z-50' : ''}`}>
      <nav className="bg-gray-500 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center max-sm:justify-between">
            <div className="flex items-center">
              <Link href='/'>
                <span className="bg-gradient-to-tr from-red-300 to-red-300 via-orange-300 bg-clip-text text-transparent text-xl font-semibold mr-6">Crescent</span>
              </Link>
              <a href="">
                <span className="text-white text-xl border-b mx-4 max-sm:hidden">Ramadan Offerings</span>
              </a>
              <button
                className="text-white focus:outline-none lg:hidden max-sm:hidden"
                onClick={() => setDropdownStates([false, false, false])} // Close all dropdowns
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
              </button>
            </div>
            <ul className="flex flex-wrap items-center justify-around max-sm:hidden">
              <li className="text-white mr-6 cursor-pointer relative" onClick={() => toggleDropdown(0)}>
                <span className='flex gap-2'>Event Equipment
                  {dropdownStates[0] ? <MdOutlineKeyboardArrowUp /> : <MdOutlineKeyboardArrowDown />}

                </span>
                <ul ref={dropdownRefs[0]} className={`dropdown-container absolute z-50 top-full left-0 bg-gray-300 rounded-lg p-2 mt-2 w-64 ${dropdownStates[0] ? 'block' : 'hidden'}`}>
                  <li className="text-gray-700 hover:bg-gray-700 hover:text-white px-3 py-2">Event Furniture</li>
                  <li className="text-gray-700 hover:bg-gray-700 hover:text-white px-3 py-2"> Bouncy & Games </li>
                  <li className="text-gray-700 hover:bg-gray-700 hover:text-white px-3 py-2"> Slides & Pool </li>
                  <li className="text-gray-700 hover:bg-gray-700 hover:text-white px-3 py-2"> Kids & Furniture </li>
                  <li className="text-gray-700 hover:bg-gray-700 hover:text-white px-3 py-2"> Tents & Marquees </li>
                  <li className="text-gray-700 hover:bg-gray-700 hover:text-white px-3 py-2"> Audio & Visuals </li>
                  <li className="text-gray-700 hover:bg-gray-700 hover:text-white px-3 py-2"> Catering & Food Display </li>
                  <li className="text-gray-700 hover:bg-gray-700 hover:text-white px-3 py-2">
                    Event Support Equipment
                  </li>
                  <li className="text-gray-700 hover:bg-gray-700 hover:text-white px-3 py-2">
                    Heaters, Coolers & ACs
                  </li>
                  <li className="text-gray-700 hover:bg-gray-700 hover:text-white px-3 py-2">

                    Exhibition Furniture

                  </li>
                  <li className="text-gray-700 hover:bg-gray-700 hover:text-white px-3 py-2">

                    Event Fabrication & Services
                  </li>
                </ul>
              </li>
              <li className="text-white mr-6 cursor-pointer relative" onClick={() => toggleDropdown(1)}>
                <span className='flex gap-1'>Decor
                  {dropdownStates[1] ? <MdOutlineKeyboardArrowUp /> : <MdOutlineKeyboardArrowDown />}

                </span>
                <ul ref={dropdownRefs[1]} className={`dropdown-container absolute z-50 top-full left-0 bg-gray-300 rounded-lg p-2 mt-2 w-64 ${dropdownStates[1] ? 'block' : 'hidden'}`}>
                  <li className="text-gray-700 hover:bg-gray-700 hover:text-white px-3 py-2">
                    Event Decor
                  </li>
                  <li className="text-gray-700 hover:bg-gray-700 hover:text-white px-3 py-2">
                    Themed Event Decor
                  </li>
                  <li className="text-gray-700 hover:bg-gray-700 hover:text-white px-3 py-2">
                    Wedding &amp; Engagement Decor
                  </li>
                  <li className="text-gray-700 hover:bg-gray-700 hover:text-white px-3 py-2">
                    Kid's Birthday Decor
                  </li>
                  <li className="text-gray-700 hover:bg-gray-700 hover:text-white px-3 py-2">
                    Kid's Birthday Decor
                  </li>
                  <li className="text-gray-700 hover:bg-gray-700 hover:text-white px-3 py-2">
                    Basic Balloon Decor
                  </li>
                  <li className="text-gray-700 hover:bg-gray-700 hover:text-white px-3 py-2">
                    Decor Accessories
                  </li>
                  <li className="text-gray-700 hover:bg-gray-700 hover:text-white px-3 py-2">
                    Decor Lighting Accessories
                  </li>
                  <li className="text-gray-700 hover:bg-gray-700 hover:text-white px-3 py-2">
                    Photo Booths
                  </li>
                  <li className="text-gray-700 hover:bg-gray-700 hover:text-white px-3 py-2">
                    Mandap & Shamiyana
                  </li>
                  <li className="text-gray-700 hover:bg-gray-700 hover:text-white px-3 py-2">
                    Linen & Table Cloth
                  </li>
                  <li className="text-gray-700 hover:bg-gray-700 hover:text-white px-3 py-2">
                    Carpets & Rugs
                  </li>
                </ul>
              </li>
              <li className="text-white mr-6 cursor-pointer relative" onClick={() => toggleDropdown(2)}>
                <span className='flex gap-2'>People & Services
                  {dropdownStates[2] ? <MdOutlineKeyboardArrowUp /> : <MdOutlineKeyboardArrowDown />}

                </span>
                <ul ref={dropdownRefs[2]} className={`dropdown-container absolute z-50 top-full left-0 bg-gray-300 rounded-lg p-2 mt-2 w-64 ${dropdownStates[2] ? 'block' : 'hidden'}`}>
                  <li className="text-gray-700 hover:bg-gray-700 hover:text-white px-3 py-2">Kids Entertainment</li>
                  <li className="text-gray-700 hover:bg-gray-700 hover:text-white px-3 py-2">DJ</li>
                  <li className="text-gray-700 hover:bg-gray-700 hover:text-white px-3 py-2">Emcee</li>
                  <li className="text-gray-700 hover:bg-gray-700 hover:text-white px-3 py-2">Singers</li>
                  <li className="text-gray-700 hover:bg-gray-700 hover:text-white px-3 py-2">Dancers</li>
                  <li className="text-gray-700 hover:bg-gray-700 hover:text-white px-3 py-2">
                    Musicians
                  </li>
                  <li className="text-gray-700 hover:bg-gray-700 hover:text-white px-3 py-2">Bands</li>
                  <li className="text-gray-700 hover:bg-gray-700 hover:text-white px-3 py-2">Special Acts</li>
                  <li className="text-gray-700 hover:bg-gray-700 hover:text-white px-3 py-2">
                    Standup Comedy
                  </li>
                  <li className="text-gray-700 hover:bg-gray-700 hover:text-white px-3 py-2">
                    Traditional Artists & Services
                  </li>
                  <li className="text-gray-700 hover:bg-gray-700 hover:text-white px-3 py-2">
                    Event Specialists
                  </li>
                  <li className="text-gray-700 hover:bg-gray-700 hover:text-white px-3 py-2">                               Hostesses
                  </li>
                  <li className="text-gray-700 hover:bg-gray-700 hover:text-white px-3 py-2">
                    Arts & Craft
                  </li>
                  <li className="text-gray-700 hover:bg-gray-700 hover:text-white px-3 py-2">
                    Wellness
                  </li>
                  <li className="text-gray-700 hover:bg-gray-700 hover:text-white px-3 py-2">Beauty</li>
                  <li className="text-gray-700 hover:bg-gray-700 hover:text-white px-3 py-2">
                    Photographers & Videographers
                  </li>
                  <li className="text-gray-700 hover:bg-gray-700 hover:text-white px-3 py-2">
                    Arabic Entertainers & Services
                  </li>
                </ul>
              </li>
              <li className="text-white mr-6 cursor-pointer relative" onClick={() => toggleDropdown(3)}>
                <span className='flex gap-2'>Food & Beverages
                  {dropdownStates[3] ? <MdOutlineKeyboardArrowUp /> : <MdOutlineKeyboardArrowDown />}

                </span>
                <ul ref={dropdownRefs[3]} className={`dropdown-container absolute z-50 top-full left-0 bg-gray-300 rounded-lg p-2 mt-2 w-64 ${dropdownStates[3] ? 'block' : 'hidden'}`}>
                  <li className="text-gray-700 hover:bg-gray-700 hover:text-white px-3 py-2">Buffet</li>
                  <li className="text-gray-700 hover:bg-gray-700 hover:text-white px-3 py-2">Food Boxes</li>
                  <li className="text-gray-700 hover:bg-gray-700 hover:text-white px-3 py-2">Gift Boxes</li>
                  <li className="text-gray-700 hover:bg-gray-700 hover:text-white px-3 py-2">Kid's Meal Boxes</li>
                  <li className="text-gray-700 hover:bg-gray-700 hover:text-white px-3 py-2">
                    Live Stations
                  </li>
                  <li className="text-gray-700 hover:bg-gray-700 hover:text-white px-3 py-2">

                    Food Kiosks

                  </li>
                  <li className="text-gray-700 hover:bg-gray-700 hover:text-white px-3 py-2">
                    Sharing Platters
                  </li>
                  <li className="text-gray-700 hover:bg-gray-700 hover:text-white px-3 py-2">
                    Cakes & Bakery
                  </li>

                </ul>
              </li>
              <li className="text-white mr-6 cursor-pointer relative" onClick={() => toggleDropdown(4)}>
                <span className='flex gap-2'>Venues
                  {dropdownStates[4] ? <MdOutlineKeyboardArrowUp /> : <MdOutlineKeyboardArrowDown />}

                </span>
                <ul ref={dropdownRefs[4]} className={`dropdown-container absolute z-50 top-full left-0 bg-gray-300 rounded-lg p-2 mt-2 w-64 ${dropdownStates[4] ? 'block' : 'hidden'}`}>
                  <li className="text-gray-700 hover:bg-gray-700 hover:text-white px-3 py-2">
                    Yacht Parties
                  </li>
                  <li className="text-gray-700 hover:bg-gray-700 hover:text-white px-3 py-2">
                    Ballrooms, Banquet & Party Halls
                  </li>
                  <li className="text-gray-700 hover:bg-gray-700 hover:text-white px-3 py-2">
                    Boardrooms & Conference Rooms
                  </li>
                  <li className="text-gray-700 hover:bg-gray-700 hover:text-white px-3 py-2">
                    Private Lawns
                  </li>
                  <li className="text-gray-700 hover:bg-gray-700 hover:text-white px-3 py-2">

                    Villas & Farmhouses

                  </li>
                  <li className="text-gray-700 hover:bg-gray-700 hover:text-white px-3 py-2">

                    Kids Party Venues


                  </li>
                  <li className="text-gray-700 hover:bg-gray-700 hover:text-white px-3 py-2">

                    Private Beaches

                  </li>


                </ul>
              </li>
              <li className="text-white mr-6 cursor-pointer relative" onClick={() => toggleDropdown(5)}>
                <span className='flex gap-2'>Packages
                  {dropdownStates[5] ? <MdOutlineKeyboardArrowUp /> : <MdOutlineKeyboardArrowDown />}

                </span>
                <ul ref={dropdownRefs[5]} className={`dropdown-container absolute z-50 top-full left-0 bg-gray-300 rounded-lg p-2 mt-2 w-64 ${dropdownStates[5] ? 'block' : 'hidden'}`}>
                  <li className="text-gray-700 hover:bg-gray-700 hover:text-white px-3 py-2">

                    Kid's Birthday All in 1 Packages

                  </li>
                  <li className="text-gray-700 hover:bg-gray-700 hover:text-white px-3 py-2">

                    Decoration Packages

                  </li>
                  <li className="text-gray-700 hover:bg-gray-700 hover:text-white px-3 py-2">

                    Kid's Birthday Theme Party Packages

                  </li>
                  <li className="text-gray-700 hover:bg-gray-700 hover:text-white px-3 py-2">

                    Crescent Exclusive

                  </li>
                  <li className="text-gray-700 hover:bg-gray-700 hover:text-white px-3 py-2">


                    Kid's Birthday Assorted Packages


                  </li>



                </ul>
              </li>


              <div className="lg:flex mx-4 lg:justify-end max-sm:hidden">
                <div className="relative">
                  <button className="text-white z-10 focus:outline-none transition-all delay-700 duration-300 ease-in-out" onClick={toggleSearch}>
                    <FaSearch size={24} />
                  </button>

                </div>
              </div>
              <div className="lg:flex mx-4 lg:justify-end max-sm:hidden">
                <Link href=''>
                  <FiShoppingBag size={28} color='white' />

                </Link>

              </div>
            </ul>

            <div className="-mr-2 flex justify-end md:hidden">
              <button
                onClick={toggleMobileMenu}
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 transition-all duration-1000 rounded-md text-sm font-medium focus:outline-none focus:bg-gray-700 focus:text-white"
              >
                {menu ? <FaTimes /> : <FaBars />}
              </button>
            </div>
          </div>




        </div>
        {menu && (
          <div className=" transition-all duration-1000 ease-in-out 
          md:hidden">
            <ul className="lg:flex lg:items-center my-10 mx-4 lg:justify-end">
              <li className="text-white mr-6 z-10 my-3 cursor-pointer relative">
                <span className='-z-10' onClick={() => toggleDropdown(0)}>Event Equipment</span>
                <ul className={`absolute top-full left-0 bg-white rounded-lg p-2 mt-2 w-64 ${dropdownStates[0] ? 'block' : 'hidden'}`}>
                  <li className="text-gray-700 hover:bg-gray-700 hover:text-white px-3 py-2">Event Furniture</li>
                  <li className="text-gray-700 hover:bg-gray-700 hover:text-white px-3 py-2"> Bouncy & Games </li>
                  <li className="text-gray-700 hover:bg-gray-700 hover:text-white px-3 py-2"> Slides & Pool </li>
                  <li className="text-gray-700 hover:bg-gray-700 hover:text-white px-3 py-2"> Kids & Furniture </li>
                  <li className="text-gray-700 hover:bg-gray-700 hover:text-white px-3 py-2"> Tents & Marquees </li>
                  <li className="text-gray-700 hover:bg-gray-700 hover:text-white px-3 py-2"> Audio & Visuals </li>
                  <li className="text-gray-700 hover:bg-gray-700 hover:text-white px-3 py-2"> Catering & Food Display </li>
                  <li className="text-gray-700 hover:bg-gray-700 hover:text-white px-3 py-2">
                    Event Support Equipment
                  </li>
                  <li className="text-gray-700 hover:bg-gray-700 hover:text-white px-3 py-2">
                    Heaters, Coolers & ACs
                  </li>
                  <li className="text-gray-700 hover:bg-gray-700 hover:text-white px-3 py-2">

                    Exhibition Furniture

                  </li>
                  <li className="text-gray-700 hover:bg-gray-700 hover:text-white px-3 py-2">

                    Event Fabrication & Services
                  </li>
                </ul>
              </li>
              <li className="text-white mr-6 z-10 cursor-pointer my-3 relative">
                <span className='-z-10' onClick={() => toggleDropdown(1)}>Decor</span>
                <ul className={`absolute top-full left-0 bg-white rounded-lg p-2 mt-2 w-64 ${dropdownStates[1] ? 'block' : 'hidden'}`}>
                  <li className="text-gray-700 hover:bg-gray-700 hover:text-white px-3 py-2">
                    Event Decor
                  </li>
                  <li className="text-gray-700 hover:bg-gray-700 hover:text-white px-3 py-2">
                    Themed Event Decor
                  </li>
                  <li className="text-gray-700 hover:bg-gray-700 hover:text-white px-3 py-2">
                    Wedding &amp; Engagement Decor
                  </li>
                  <li className="text-gray-700 hover:bg-gray-700 hover:text-white px-3 py-2">
                    Kid's Birthday Decor
                  </li>
                  <li className="text-gray-700 hover:bg-gray-700 hover:text-white px-3 py-2">
                    Kid's Birthday Decor
                  </li>
                  <li className="text-gray-700 hover:bg-gray-700 hover:text-white px-3 py-2">
                    Basic Balloon Decor
                  </li>
                  <li className="text-gray-700 hover:bg-gray-700 hover:text-white px-3 py-2">
                    Decor Accessories
                  </li>
                  <li className="text-gray-700 hover:bg-gray-700 hover:text-white px-3 py-2">
                    Decor Lighting Accessories
                  </li>
                  <li className="text-gray-700 hover:bg-gray-700 hover:text-white px-3 py-2">
                    Photo Booths
                  </li>
                  <li className="text-gray-700 hover:bg-gray-700 hover:text-white px-3 py-2">
                    Mandap & Shamiyana
                  </li>
                  <li className="text-gray-700 hover:bg-gray-700 hover:text-white px-3 py-2">
                    Linen & Table Cloth
                  </li>
                  <li className="text-gray-700 hover:bg-gray-700 hover:text-white px-3 py-2">
                    Carpets & Rugs
                  </li>
                </ul>
              </li>
              <li className="text-white mr-6 z-10 cursor-pointer my-3 relative">
                <span onClick={() => toggleDropdown(2)}>People & Services</span>
                <ul className={`absolute top-full left-0 bg-white -z-10 rounded-lg p-2 mt-2 w-64 ${dropdownStates[2] ? 'block' : 'hidden'}`}>
                  <li className="text-gray-700 hover:bg-gray-700 hover:text-white px-3 py-2">Kids Entertainment</li>
                  <li className="text-gray-700 hover:bg-gray-700 hover:text-white px-3 py-2">DJ</li>
                  <li className="text-gray-700 hover:bg-gray-700 hover:text-white px-3 py-2">Emcee</li>
                  <li className="text-gray-700 hover:bg-gray-700 hover:text-white px-3 py-2">Singers</li>
                  <li className="text-gray-700 hover:bg-gray-700 hover:text-white px-3 py-2">Dancers</li>
                  <li className="text-gray-700 hover:bg-gray-700 hover:text-white px-3 py-2">
                    Musicians
                  </li>
                  <li className="text-gray-700 hover:bg-gray-700 hover:text-white px-3 py-2">Bands</li>
                  <li className="text-gray-700 hover:bg-gray-700 hover:text-white px-3 py-2">Special Acts</li>
                  <li className="text-gray-700 hover:bg-gray-700 hover:text-white px-3 py-2">
                    Standup Comedy
                  </li>
                  <li className="text-gray-700 hover:bg-gray-700 hover:text-white px-3 py-2">
                    Traditional Artists & Services
                  </li>
                  <li className="text-gray-700 hover:bg-gray-700 hover:text-white px-3 py-2">
                    Event Specialists
                  </li>
                  <li className="text-gray-700 hover:bg-gray-700 hover:text-white px-3 py-2">                               Hostesses
                  </li>
                  <li className="text-gray-700 hover:bg-gray-700 hover:text-white px-3 py-2">
                    Arts & Craft
                  </li>
                  <li className="text-gray-700 hover:bg-gray-700 hover:text-white px-3 py-2">
                    Wellness
                  </li>
                  <li className="text-gray-700 hover:bg-gray-700 hover:text-white px-3 py-2">Beauty</li>
                  <li className="text-gray-700 hover:bg-gray-700 hover:text-white px-3 py-2">
                    Photographers & Videographers
                  </li>
                  <li className="text-gray-700 hover:bg-gray-700 hover:text-white px-3 py-2">
                    Arabic Entertainers & Services
                  </li>
                </ul>
              </li>

            </ul>
            <div className="bg-white flex px-1 py-1 rounded-full border border-blue-500 overflow-hidden max-w-md mx-2 font-[sans-serif]">
              <input type="email" placeholder="Search Something..." className="w-full outline-none bg-white pl-4 text-sm" />
              <button type="button" onClick={toggleSearch} className="bg-blue-600 hover:bg-blue-700 transition-all text-white text-sm rounded-full px-5 py-2.5">
                Search
              </button>
            </div>
          </div>
        )}
      </nav>
      <div className="flex justify-center items-center transition-all delay-700 duration-300 ease-in-out">
        {searchVisible && (
          <div className="bg-white w-full py-20 absolute top-0 transition-all delay-700 duration-300 ease-in-out">
            <div className="bg-white flex px-1 py-1 rounded-full border border-blue-500 overflow-hidden max-w-md mx-auto font-[sans-serif]">
              <input type="email" placeholder="Search Something..." className="w-full outline-none bg-white pl-4 text-sm" />
              <button type="button" onClick={toggleSearch} className="bg-blue-600 hover:bg-blue-700 transition-all text-white text-sm rounded-full px-5 py-2.5">
                Search
              </button>
            </div>
            <button onClick={toggleSearch} className="flex fixed top-10 right-60 items-center justify-center ml-2 text-gray-600 hover:text-gray-800 focus:outline-none">
              <FaRegTimesCircle size={28} />
            </button>
          </div>
        )}
      </div>


    </div>
  );
};

export default NavbarThird;
