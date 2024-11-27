import React from 'react';
import Image from 'next/image';

const HeroSection = () => {
    return (
        <div>
            <div className="about-section-main">
                <div className="grid grid-rows-2 grid-flow-col gap-1 max-sm:block px-20">
                    <div className="row-span-3">
                        <div className="flex items-center justify-center space-x-8">
                            <div className="circle-container z-10">
                                <div className="circle-main">
                                    <div className="circle-text-container">
                                        <div className="font-about text-2xl uppercase max-sm:text-sm" style={{ letterSpacing: 5 }}>About Crescent </div>
                                        <div><hr className="about-title-hr-border" /></div>
                                        <div className="about-text mt-7 " style={{ letterSpacing: 4 }}>a one-stop-shop for event Organizers to discover, book, and pay for everything they need for an event</div>
                                        <div className="about-hafla-text mt-5 max-sm:hidden">Crescent tech platform is bringing together event planners, venues, equipment rental companies, caterers, artists, and a long tail of service providers to transact seamlessly.</div>
                                        <div className="flex justify-center mt-10">
                                            <button className="md:h-auto bg-purple-950 md:w-auto text-white text-sm md:text-base focus:outline-none ml-0 md:ml-5 font-bold rounded-full uppercase px-8 py-2 tracking-wider" >Learn More</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row-span-3 py-32 grid-flow-col gap-1 font-medium z-10">
                        <div>
                            <div className="flex mr-0.5 ">
                                <Image className="block" alt="About Hafla" src="https://s3.ap-south-1.amazonaws.com/production.media.hafla.com/static_images/host/icons/graphic-one.svg" width={30} height={30} />
                                <ul className="mx-7">
                                    <li className="font-google-basic text-section">Crescent delivers an e-commerce-like, easy, fast, and</li>
                                    <li className="font-google-basic text-section">trusted experience in an otherwise low-tech, high</li>
                                    <li className="font-google-basic text-section">fragmentation, high friction industry</li>
                                </ul>
                            </div>
                            <div className="flex">
                                <hr className="about-delivery-hr z-20" />
                            </div>
                        </div>
                        <div>
                            <div className="flex mr-0.5 ">
                                <Image className="block" alt="About Hafla" src="https://s3.ap-south-1.amazonaws.com/production.media.hafla.com/static_images/host/icons/graphic-two.svg" width={50} height={50} />
                                <ul className="mx-7">
                                    <li className="font-google-basic text-section">Crescent is for events what Expedia is for travel-</li>
                                    <li className="font-google-basic text-section">aggregating and digitizing a $1Tn+n industry</li>
                                </ul>
                            </div>
                            <div className="flex">
                                <hr className="about-event-start-hr" />
                                <hr className="about-event-end-hr" />
                            </div>
                        </div>
                        <div>
                            <div className="flex mr-0.5 ">
                                <Image className="block" alt="About Hafla" src="https://s3.ap-south-1.amazonaws.com/production.media.hafla.com/static_images/host/icons/graphic-three.svg" width={50} height={50} />
                                <ul className="mx-7">
                                    <li className="font-google-basic text-section">Crescent minimizes the stress in event planning so</li>
                                    <li className="font-google-basic text-section">that everyone can celebrate more</li>
                                    <div><hr className="about-title-hr-border" /></div>

                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div className="-mt-16 -mb-2 " style={{ position: 'relative', backgroundImage: 'url("https://www.hafla.com/_next/image?url=https%3A%2F%2Fs3.ap-south-1.amazonaws.com%2Fproduction.media.hafla.com%2Fstatic_images%2Fhost%2Fbanners%2Fyour_event.jpg&w=1920&q=75")', backgroundSize: 'cover', backgroundPosition: 'center', width: '100%', height: '390px', opacity: '50', }}>

                <div className="flex flex-row items-center justify-around h-full max-sm:block px-10 py-10">
                    <div className=" text-white text-3xl font-semibold">Your Event Is Just A Click Away!</div>
                    <a href="" target="_blank" className="py-2 rounded-full bg-purple-950 px-10 text-white text-center uppercase cursor-pointer max-sm:text-center" rel="noreferrer">
                        Get Started<span className="text-brand uppercase ml-2" style={{ fontSize: '19px' }}>→</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
