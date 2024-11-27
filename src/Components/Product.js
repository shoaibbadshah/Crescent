import React from 'react';
import Image from 'next/image';

const Product = () => {
    return (
        <>
            <section className="py-7 md:py-10 px-5 md:px-20 md:mb-5 pt-10 mx-10">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                    <div>
                        <div className="font-Montserrat text-nero text-sm md:text-xl leading-4 font-bold mt-1 text-start my-4">Our top picks for the season.</div>
                        <div className="flex flex-row items-center">
                            <div className="font-google-basic text-lg md:text-4xl text-nero uppercase leading-8 lg:leading-16 text-start tracking-wider flex flex-row" style={{ letterSpacing: 7 }}>Trending Collections</div>
                            <hr className="h-1 md:h-5 w-16 md:w-80 ml-2 md:ml-5 rounded-full" style={{ height: 5, width: 80, borderRadius: 20, background: 'linear-gradient(50deg, rgb(220, 124, 10) 7.01%, rgb(202, 87, 121) 56.57%, rgb(205, 76, 91) 100.37%)', alignSelf: 'center' }} />
                        </div>
                    </div>
                    <div className="self-end mt-4 md:mt-0">
                        <button className="md:h-auto bg-purple-950 md:w-auto text-white text-sm md:text-base focus:outline-none ml-0 md:ml-5 font-bold rounded-full uppercase px-8 py-2 tracking-wider" >View all</button>
                    </div>
                </div>


                <div className="max-w-screen-2xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
                        <div className="border-2 border-slate-200 shadow-md p-2 cursor-pointer rounded-md overflow-hidden group">
                            <div className="relative overflow-hidden">
                                <  Image width={100} height={100} alt="Ramadan Decor and Fabrication" src="https://www.hafla.com/_next/image?url=https%3A%2F%2Fs3.ap-south-1.amazonaws.com%2Fproduction.media.hafla.com%2Fdb%2Fcollections%2FRAMADAN_12345.jpg&w=1200&q=75" className="w-full h-60 object-cover group-hover:scale-125 transition-all duration-300" />
                            </div>
                            <div className="p-2">
                                <h3 className="text-xl font-bold max-sm:text-sm">Ramadan Decor and Fabrication</h3>
                            </div>
                        </div>
                        <div className="border-2 border-slate-200 shadow-md p-2 cursor-pointer rounded-md overflow-hidden group">
                            <div className="relative overflow-hidden">
                                <  Image width={100} height={100} alt="Ramadan Decor and Fabrication" src="https://www.hafla.com/_next/image?url=https%3A%2F%2Fs3.ap-south-1.amazonaws.com%2Fproduction.media.hafla.com%2Fdb%2Fcollections%2FRAMADAN_111.jpg&w=1200&q=75" className="w-full h-60 object-cover group-hover:scale-125 transition-all duration-300" />
                            </div>
                            <div className="p-2">
                                <h3 className="text-xl font-bold max-sm:text-sm">Ramadan Tents and Equipment</h3>
                            </div>
                        </div>
                        <div className="border-2 border-slate-200 shadow-md p-2 cursor-pointer rounded-md overflow-hidden group">
                            <div className="relative overflow-hidden">
                                <  Image width={100} height={100} alt="Ramadan Decor and Fabrication" src="https://www.hafla.com/_next/image?url=https%3A%2F%2Fs3.ap-south-1.amazonaws.com%2Fproduction.media.hafla.com%2Fdb%2Fcollections%2FRAMADAN_909090.jpg&w=1200&q=75" className="w-full h-60 object-cover group-hover:scale-125 transition-all duration-300" />
                            </div>
                            <div className="p-2">
                                <h3 className="text-xl font-bold max-sm:text-sm">Ramadan Premium Furniture Collection</h3>
                            </div>
                        </div>
                    </div>
                </div>

            </section >
            <section className="py-7 md:py-10 px-5 md:px-20 md:mb-5 pt-10 mx-10">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                    <div>
                        <div className="font-Montserrat text-nero text-sm md:text-xl leading-4 font-bold mt-1 text-start my-4">Book everything you need for your business events.</div>
                        <div className="flex flex-row items-center">
                            <div className="font-google-basic text-lg md:text-4xl text-nero uppercase leading-8 lg:leading-16 text-start tracking-wider flex flex-row" style={{ letterSpacing: 7 }}>CORPORATE EVENTS</div>
                            <hr className="h-1 md:h-5 w-16 md:w-80 ml-2 md:ml-5 rounded-full" style={{ height: 5, width: 80, borderRadius: 20, background: 'linear-gradient(50deg, rgb(220, 124, 10) 7.01%, rgb(202, 87, 121) 56.57%, rgb(205, 76, 91) 100.37%)', alignSelf: 'center' }} />
                        </div>
                    </div>
                    <div className="self-end mt-4 md:mt-0">
                        <button className="md:h-auto bg-purple-950 md:w-auto text-white text-sm md:text-base focus:outline-none ml-0 md:ml-5 font-bold rounded-full uppercase px-8 py-2 tracking-wider" >Consult Event Expert</button>
                    </div>
                </div>


                <div className="max-w-screen-2xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
                        <div className="border-2 border-slate-200 shadow-md p-2 cursor-pointer rounded-md overflow-hidden group">
                            <div className="relative overflow-hidden">
                                <  Image width={100} height={100} alt="Ramadan Decor and Fabrication" src="https://s3.ap-south-1.amazonaws.com/production.media.hafla.com/static_images/host/events/corporate-event/corp-1.svg" className="w-full h-60 object-cover group-hover:scale-125 transition-all duration-300" />
                            </div>
                            <div className="p-2">
                                <h3 className="text-xl font-bold max-sm:text-sm">Catering & Entertainment</h3>
                            </div>
                        </div>
                        <div className="border-2 border-slate-200 shadow-md p-2 cursor-pointer rounded-md overflow-hidden group">
                            <div className="relative overflow-hidden">
                                <  Image width={100} height={100} alt="Ramadan Decor and Fabrication" src="https://www.hafla.com/_next/image?url=https%3A%2F%2Fs3.ap-south-1.amazonaws.com%2Fproduction.media.hafla.com%2Fstatic_images%2Fhost%2Fevents%2Fcorporate-event%2Fcorp-2.jpg&w=1200&q=75" className="w-full h-60 object-cover group-hover:scale-125 transition-all duration-300" />
                            </div>
                            <div className="p-2">
                                <h3 className="text-xl font-bold max-sm:text-sm">Equipment & Furniture</h3>
                            </div>
                        </div>
                        <div className="border-2 border-slate-200 shadow-md p-2 cursor-pointer rounded-md overflow-hidden group">
                            <div className="relative overflow-hidden">
                                <  Image width={100} height={100} alt="Ramadan Decor and Fabrication" src="https://s3.ap-south-1.amazonaws.com/production.media.hafla.com/static_images/host/events/corporate-event/corp-3.svg" className="w-full h-60 object-cover group-hover:scale-125 transition-all duration-300" />
                            </div>
                            <div className="p-2">
                                <h3 className="text-xl font-bold max-sm:text-sm">Decorations & Setup</h3>
                            </div>
                        </div>
                    </div>
                </div>



            </section >
            <section className="py-7 md:py-10 px-5 md:px-20 md:mb-5 pt-10 mx-10">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                    <div>
                        <div className="font-Montserrat text-nero text-sm md:text-xl leading-4 font-bold mt-1 text-start my-4">A tour of events we have executed.</div>
                        <div className="flex flex-row items-center">
                            <div className="font-google-basic text-lg md:text-4xl text-nero uppercase leading-8 lg:leading-16 text-start tracking-wider flex flex-row" style={{ letterSpacing: 7 }}>A Glimpse into our Events</div>
                            <hr className="h-1 md:h-5 w-16 md:w-80 ml-2 md:ml-5 rounded-full" style={{ height: 5, width: 80, borderRadius: 20, background: 'linear-gradient(50deg, rgb(220, 124, 10) 7.01%, rgb(202, 87, 121) 56.57%, rgb(205, 76, 91) 100.37%)', alignSelf: 'center' }} />
                        </div>
                    </div>
                    <div className="self-end mt-4 md:mt-0">
                        <button className="md:h-auto bg-purple-950 md:w-auto text-white text-sm md:text-base focus:outline-none ml-0 md:ml-5 font-bold rounded-full uppercase px-8 py-2 tracking-wider" >Consult Event Expert</button>
                    </div>
                </div>


                <div className="max-w-screen-2xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">
                        <div className="border-2 border-slate-200 shadow-md p-2 cursor-pointer rounded-md overflow-hidden group">
                            <div className="relative overflow-hidden">
                                <  Image width={100} height={100} alt="Ramadan Decor and Fabrication" src="https://s3.ap-south-1.amazonaws.com/production.media.hafla.com/static_images/host/events/corporate-event/corp-1.svg" className="w-full h-60 object-cover group-hover:scale-125 transition-all duration-300" />
                            </div>
                            <div className="p-2">
                                <h3 className="text-base font-bold max-sm:text-sm">Baby Shower</h3>
                            </div>
                        </div>
                        <div className="border-2 border-slate-200 shadow-md p-2 cursor-pointer rounded-md overflow-hidden group">
                            <div className="relative overflow-hidden">
                                <  Image width={100} height={100} alt="Ramadan Decor and Fabrication" src="https://www.hafla.com/_next/image?url=https%3A%2F%2Fs3.ap-south-1.amazonaws.com%2Fproduction.media.hafla.com%2Fstatic_images%2Fhost%2Fevents%2Fcorporate-event%2Fcorp-2.jpg&w=1200&q=75" className="w-full h-60 object-cover group-hover:scale-125 transition-all duration-300" />
                            </div>
                            <div className="p-2">
                                <h3 className="text-base font-bold max-sm:text-sm">Kids’ Birthdays</h3>
                            </div>
                        </div>
                        <div className="border-2 border-slate-200 shadow-md p-2 cursor-pointer rounded-md overflow-hidden group">
                            <div className="relative overflow-hidden">
                                <  Image width={100} height={100} alt="Ramadan Decor and Fabrication" src="https://s3.ap-south-1.amazonaws.com/production.media.hafla.com/static_images/host/events/corporate-event/corp-3.svg" className="w-full h-60 object-cover group-hover:scale-125 transition-all duration-300" />
                            </div>
                            <div className="p-2">
                                <h3 className="text-base font-bold max-sm:text-sm">Casual Get-Together</h3>
                            </div>
                        </div>
                        <div className="border-2 border-slate-200 shadow-md p-2 cursor-pointer rounded-md overflow-hidden group">
                            <div className="relative overflow-hidden">
                                <  Image width={100} height={100} alt="Ramadan Decor and Fabrication" src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRxF8hKfrG3lMXF8vo27RsUm79bypqF8_ggBRl_gQHJWEecmBUA" className="w-full h-60 object-cover group-hover:scale-125 transition-all duration-300" />
                            </div>
                            <div className="p-2">
                                <h3 className="text-base font-bold max-sm:text-sm">Corporate Events</h3>
                            </div>
                        </div>
                    </div>
                </div>



            </section >

        </>
    )
}

export default Product;


