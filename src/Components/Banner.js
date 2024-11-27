import React from 'react'

const Banner = ({ title, text, btn }) => {
    return (
        <>
            <div className="justify-items-center mt-10 mb-5 bg-gray-800 w-full bg-nero text-center flex items-center h-52 justify-around max-sm:block max-sm:py-4">
                <div>
                    <div className="font-bold text-white text-4xl max-sm:text-xl">{title}</div>
                    <p className="font-bold text-white text-base max-sm:text-xl">{text}</p>
                </div>
                <button className="md:h-auto bg-purple-950  max-sm:px-2 max-sm:py-1 max-sm:text-sm text-white text-sm md:text-md focus:outline-none ml-0 md:ml-5 font-bold rounded-full px-6 md:py-3 h-11 tracking-wider w-full md:w-auto" >
                    {btn}
                </button>
            </div>


        </>
    )
}

export default Banner
