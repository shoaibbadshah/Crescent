import React from 'react';

const SubHeader = ({ isVisible }) => {
    return (
        <div className={`fixed top-24 p-2 left-0 right-0 bg-gray-100 z-30 max-sm:hidden transition-all duration-300 ${isVisible ? 'opacity-100' : 'opacity-0 -translate-y-full'}`}>


            <header className="text-gray-600 body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                 
                    <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 flex flex-wrap items-center text-base justify-center">
                        <a className="mr-5 md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 hover:text-gray-900">Event Equipment</a>
                        <a className="mr-5 md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 hover:text-gray-900">Food & Beverages</a>
                        <a className="mr-5 md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 hover:text-gray-900">People & Services</a>
                        <a className="mr-5 md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 hover:text-gray-900">Venues</a>
                        <a className="mr-5 md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 hover:text-gray-900">Packages</a>
                        <a className="mr-5 md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 hover:text-gray-900">Kid's Birthdays</a>
                    </nav>
                   
                </div>
            </header>

        </div>

    );
};

export default SubHeader;
