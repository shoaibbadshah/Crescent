"use client";
import React, { useState, useEffect, useContext } from 'react';
import { addToCart } from '@/Components/CartApi';
import { productById } from '@/Components/ProductApi';
import Link from 'next/link';
import { FaStar } from "react-icons/fa";
import { GlobalContext } from "@/Context/page";
import { toast } from "react-toastify";
import ComponentLevelLoader from "@/Components/ComponentLevelLoader";
import Notification from "@/Components/Notification";
import NavbarSecond from '@/Components/Headers/NavbarSecond';

export function CommonDetails({ item }) {
    const {
        setComponentLevelLoader,
        componentLevelLoader,
        user,
        setShowCartModal,
    } = useContext(GlobalContext);

    const [selectedImage, setSelectedImage] = useState(item.thumbnail);
    const [selectedThumbnail, setSelectedThumbnail] = useState(item.thumbnail);
    const [quantity, setQuantity] = useState(1);

    const handleThumbnailClick = (image) => {
        setSelectedImage(image);
        setSelectedThumbnail(image);
    };

    const handleDecrement = () => {
        setQuantity((prev) => (prev > 1 ? prev - 1 : prev));
    };

    const handleIncrement = () => {
        setQuantity((prev) => (prev < item.stock ? prev + 1 : prev));
    };

    async function handleAddToCart(getItem) {
        setComponentLevelLoader({ loading: true, id: "" });

        const res = await addToCart({ productID: getItem._id, userID: user._id, quantity });

        if (res.success) {
            toast.success(res.message, {
                position: 'top-right',
            });
            setComponentLevelLoader({ loading: false, id: "" });
            setShowCartModal(true);
        } else {
            toast.error(res.message, {
                position: 'top-right',
            });
            setComponentLevelLoader({ loading: false, id: "" });
            setShowCartModal(true);
        }
    }

    const renderRatingStars = (rating) => {
        const filledStars = Math.floor(rating);
        const remainingStars = 5 - filledStars;

        return (
            <>
                {[...Array(filledStars)].map((_, index) => (
                    <FaStar key={index} style={{ color: 'orange' }} />
                ))}
                {[...Array(remainingStars)].map((_, index) => (
                    <FaStar key={filledStars + index} />
                ))}
            </>
        );
    };

    return (
        <>
            <NavbarSecond />

            <section className="mx-auto max-w-screen-xl border-b-2 border-gray-500 px-4 mt-40 sm:px-6 lg:px-8">
                <nav className="flex" aria-label="Breadcrumb">
                    <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                        <li className="inline-flex items-center">
                            <Link href="/product/listing/all-product" className="inline-flex items-center text-lg font-bold text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                                <svg className="w-5 h-5 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                                </svg>
                                Home
                            </Link>
                        </li>
                        <li>
                            <div className="flex items-center">
                                <svg className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                                </svg>
                                <a href="#" className="ms-1 text-base font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white">
                                    {item.category}
                                </a>
                            </div>
                        </li>
                        <li aria-current="page">
                            <div className="flex items-center">
                                <svg className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                                </svg>
                                <span className="ms-1 text-md font-medium text-gray-500 md:ms-2 dark:text-gray-400">
                                    {item.title}
                                </span>
                            </div>
                        </li>
                    </ol>
                </nav>

                <div className="container mx-auto px-4">
                    <div className="lg:col-gap-12 xl:col-gap-16 mt-8 grid grid-cols-1 gap-12 lg:mt-12 lg:grid-cols-5 lg:gap-16">
                        <div className="lg:col-span-3 lg:row-end-1">
                            <div className="lg:flex lg:items-start">
                                <div className="lg:order-2 lg:ml-5">
                                    <div className="max-w-xl overflow-hidden rounded-lg">
                                        <img
                                            src={selectedImage}
                                            className="h-[450px] w-full object-cover"
                                            alt="Product Details"
                                        />
                                    </div>
                                </div>
                                <div className="mt-2 w-full lg:order-1 lg:w-32 lg:flex-shrink-0">
                                    <div className="flex flex-row items-start lg:flex-col">
                                        {[item.thumbnail, ...item.images].map((image, index) => (
                                            <button
                                                key={index}
                                                type="button"
                                                className={`flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 ${selectedThumbnail === image ? 'border-blue-600' : 'border-gray-100'
                                                    } text-center`}
                                                onClick={() => handleThumbnailClick(image)}
                                            >
                                                <img
                                                    src={image}
                                                    className="h-full w-full object-fit object-cover"
                                                    alt="Product Details"
                                                />
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <section className="mx-auto my-8 max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="container mx-auto px-4">
                    <div className="lg:col-span-2 lg:row-span-2 lg:row-end-2">
                        <h1 className="text-2xl font-bold text-gray-900">{item.title}</h1>
                        <div className="mt-10 flex flex-col items-center justify-between space-y-4 border-t border-b py-4 sm:flex-row sm:space-y-0">
                            <div className="flex items-end">
                                <h1 className="text-2xl line-through font-bold mr-2">AED{item.price}</h1>
                                <h1 className="text-2xl ml-3 font-bold text-red-700">{`AED${(
                                    item.price - item.price * (item.discountPercentage / 100)
                                ).toFixed(2)}`}</h1>
                            </div>
                            <button
                                type="button"
                                onClick={() => handleAddToCart(item)}
                                className="mt-1.5 inline-block bg-gray-400 rounded-lg px-6 py-3 text-xs font-medium tracking-wide uppercase text-white"
                            >
                                {componentLevelLoader && componentLevelLoader.loading ? (
                                    <ComponentLevelLoader
                                        text={"Adding to Cart"}
                                        color={"#ffffff"}
                                        loading={
                                            componentLevelLoader && componentLevelLoader.loading
                                        }
                                    />
                                ) : (
                                    "Add to Cart"
                                )}
                            </button>
                        </div>

                        <div className="lg:col-span-3 my-8 space-y-6">
                            <div className="border-b border-gray-400">
                                <nav className="flex gap-4">
                                    <a href="#" className="border-b-2 border-gray-900 py-4 text-md font-bold text-gray-900">Category</a>
                                    <p className='mt-4 text-base font-bold'>  : {item.category}</p>
                                </nav>
                            </div>
                            <div className="border-b border-gray-400">
                                <nav className="flex gap-4">
                                    <a href="#" className="border-b-2 border-gray-900 py-4 text-md font-bold text-gray-900">Available&nbsp; : </a>
                                     
                                    <div className='mt-2 text-base font-bold'>
                                        <form className="max-w-xs mx-auto">
                                            <div className="relative flex items-center max-w-[8rem]">
                                                <button
                                                    type="button"
                                                    onClick={handleDecrement}
                                                    className="bg-gray-100  hover:bg-orange-300 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100  focus:ring-2 focus:outline-none"
                                                >
                                                    <svg className="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h16" />
                                                    </svg>
                                                </button>
                                                <input
                                                    type="text"
                                                    value={quantity}
                                                    readOnly
                                                    className="bg-gray-100 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5"
                                                />
                                                <button
                                                    type="button"
                                                    onClick={handleIncrement}
                                                    className="bg-gray-100 hover:bg-orange-300 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100  focus:ring-2 focus:outline-none"
                                                >
                                                    <svg className="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 1v16M1 9h16" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </nav>
                            </div>
                            <div className="border-b border-gray-400">
                                <nav className="flex gap-4">
                                    <a href="#" className="border-b-2 border-gray-900 py-4 text-md font-bold text-gray-900">Sub Category</a>
                                    <p className='mt-4 text-base font-bold'>  : {item.subCategory}</p>
                                </nav>
                            </div>
                            <div className="border-b border-gray-400">
                                <nav className="flex gap-4">
                                    <a href="#" className="border-b-2 border-gray-900 py-4 text-md font-bold text-gray-900">Rating</a>
                                    <p className='mt-4 flex gap-2 text-base font-bold'>  : &nbsp; {renderRatingStars(item.rating)}</p>
                                </nav>
                            </div>
                        </div>
                    </div>

                    <div className="border-b border-gray-400">
                        <nav className="flex gap-4">
                            <a href="#" className="border-b-2 border-gray-900 py-4 text-base font-medium text-gray-900">Description</a>
                        </nav>
                    </div>
                    <div className="mt-8 flow-root sm:mt-12">{item.description}</div>
                </div>
            </section>
            <Notification />
        </>
    );
}

export default function ProductDetails({ params }) {
    const [loading, setLoading] = useState(true);
    const [productDetails, setProductDetails] = useState(null);

    useEffect(() => {
        async function fetchProductDetails() {
            setLoading(true);
            const productDetailsData = await productById(params.details);
            setProductDetails(productDetailsData.data);
            setLoading(false);
        }

        fetchProductDetails();
    }, [params.details]);

    if (loading) {
        return (
            <div className="flex justify-center py-40">
                <div className="flex gap-4 p-4 flex-wrap justify-center">
                    <img className="w-20 h-20 animate-spin" src="https://www.svgrepo.com/show/70469/loading.svg" alt="Loading icon" />
                </div>
            </div>
        );
    }

    return productDetails ? <CommonDetails item={productDetails} /> : <p>No product details found.</p>;
}
