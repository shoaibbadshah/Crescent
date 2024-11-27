"use client"
import React, { useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';
const ProductCategory = () => {


    return (
        <div>

            <div className="font-google-basic my-10 text-2xl lg:text-45px text-nero latter-spacing-3 uppercase leading-8 lg:leading-16 text-center font-medium tracking-widest" style={{ letterSpacing: 3 }}>browse by category</div><hr style={{ height: 5, width: 80, borderRadius: 20, background: 'linear-gradient(90deg, rgb(243, 128, 35) -90.01%, rgb(221, 87, 157) 205.57%, rgb(238, 61, 36) 467.37%)', margin: '10px auto auto' }} />
            <div className="p-10 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-7 lg:grid-cols-7 xl:grid-cols-7 max-sm:grid-cols-2 gap-5">
                {/*Card 1*/}
                <div>
                    <Link href="/product/listing/event-furniture">
                        <Image
                            src="/images/event furniture.png"
                            decoding="async"
                            data-nimg="responsive"
                            className="img-center h-24 w-20 mx-auto object-fit"
                            width={96}
                            height={96}
                            alt='Event-Furniture'
                        />
                        <h2 className="title-font text-center my-3 font-medium text-xl text-gray-900">Event Furniture</h2>
                    </Link>
                </div>
                <div>
                    <Link href="/product/listing/bouncy-castle">
                        <Image
                            alt="Bouncy Castles"
                            src="/images/bounce caslte.png"
                            decoding="async"
                            data-nimg="responsive"
                            className="img-center h-24 w-24 mx-auto object-cover"
                            width={96}
                            height={96}
                        />
                        <h2 className="title-font text-center my-3 font-medium text-xl text-gray-900">Bouncy Castles</h2>
                    </Link>
                </div>
                <div>
                    <Link href="/product/listing/kids-entertainment">
                        <Image
                            alt="Kids Entertainment"
                            src="/images/kids entertainment.png"
                            decoding="async"
                            data-nimg="responsive"
                            className="img-center h-24 w-24 mx-auto object-fit"
                            width={96}
                            height={96}
                        />
                        <h2 className="title-font text-center my-3 font-medium text-xl text-gray-900">Kids Entertainment</h2>
                    </Link>
                </div>
                <div>
                    <Link href="/product/listing/ballon-decor">
                        <Image
                            alt="Balloon Decor"
                            src="/images/Ballon decore.png"
                            decoding="async"
                            data-nimg="responsive"
                            className="img-center h-24 w-24 mx-auto object-fit"
                            width={96}
                            height={96}
                        />
                        <h2 className="title-font text-center my-3 font-medium text-xl text-gray-900">Balloon Decor</h2>
                    </Link>
                </div>
                <div>
                    <Link href="/product/listing/people-services">
                        <Image
                            alt="People & Services"
                            src="/images/kids birthday.png"
                            decoding="async"
                            data-nimg="responsive"
                            className="img-center h-24 w-24 mx-auto object-fit"
                            width={96}
                            height={96}
                        />
                        <h2 className="title-font text-center my-3 font-medium text-xl text-gray-900">People & Services</h2>
                    </Link>
                </div>
                <div>
                    <Link href="/product/listing/food-beverages">
                        <Image
                            alt="Food & Beverages"
                            src="/images/food.png"
                            decoding="async"
                            data-nimg="responsive"
                            className="img-center h-24 w-24 mx-auto object-fit"
                            width={96}
                            height={96}
                        />
                        <h2 className="title-font text-center my-3 font-medium text-xl text-gray-900">Food & Beverages</h2>
                    </Link>
                </div>
                <div>
                    <Link href="/product/listing/venues">
                        <Image
                            alt="Venues"
                            src="/images/Venues.png"
                            decoding="async"
                            data-nimg="responsive"
                            className="img-center h-24 w-24 mx-auto object-fit"
                            width={96}
                            height={96}
                        />
                        <h2 className="title-font text-center my-3 font-medium text-xl text-gray-900">Venues</h2>
                    </Link>
                </div>
            </div>

            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">

                    <div className="flex flex-wrap -m-4 text-center">
                        <div className="p-4 md:w-1/4 sm:w-2/4 w-full">
                            <Link href="/events/wedding-events">
                                <Image alt="Wedding & Engagement" src="/images/weeding.png" decoding="async" data-nimg="responsive" className="img-center h-28 w-28 mx-auto object-fit" width={96} height={96}  />

                                <h2 className="title-font font-medium text-xl my-2 text-gray-900">Wedding & Engagement

                                </h2>
                            </Link>
                        </div>
                        <div className="p-4 md:w-1/4 sm:w-2/4 w-full">
                            <Link href="/events/corporate-events">
                                <div className=" mx-auto text-center"><Image alt="Corporate Events" src="/images/corporate event.png" decoding="async" data-nimg="responsive" className="img-center h-28 w-28 mx-auto object-fit" width={96} height={96} />
                                    <h2 className="title-font font-medium text-xl my-2 text-gray-900">Corporate Events

                                    </h2>

                                </div>
                            </Link>
                        </div>

                        <div className="p-4 md:w-1/4 sm:w-2/4 w-full">
                            <Link href="/events/ramadan-celebrations">
                                <div className=" mx-auto text-center">
                                    <Image alt="Ramadan" href="" src="/images/social event.png" decoding="async" data-nimg="responsive" className="mx-auto h-28 w-28 object-fit" width={96} height={96} />

                                    <h2 className="title-font font-medium text-xl my-2 text-gray-900">Social Event

                                    </h2>
                                </div>
                            </Link>
                        </div>
                        <div className="p-4 md:w-1/4 sm:w-2/4 w-full">
                            <Link href="/events/kids-birthday">
                                <Image alt="Kids Birthday" href="" src="/images/kids birthday.png" decoding="async" data-nimg="responsive" className="img-center h-28 w-28 mx-auto object-fit" width={96} height={96} />

                                <h2 className="title-font font-medium text-xl my-2 text-gray-900">Kids Birthday

                                </h2>
                            </Link>
                        </div>

                    </div>
                </div>
            </section>


        </div>
    )
}

export default ProductCategory
