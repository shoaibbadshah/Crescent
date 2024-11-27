"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function ProductTile({ item }) {


  const router = useRouter();
  const [isHovering, setIsHovering] = useState(false);
  const [hoveredCardIndex, setHoveredCardIndex] = useState(-1);

  const settings = {
    dots: isHovering,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    speed: 2000,
    autoplaySpeed: 4000,
  };

  return (
    <div onMouseEnter={() => setHoveredCardIndex()}
      onMouseLeave={() => setHoveredCardIndex(-1)}>
      <div className=" aspect-w-1 aspect-h-2 gap-2 h-auto rounded-md overflow-hidden" onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}>
        <Slider {...settings} className="slick-dots-wrapper">
          <div onClick={() => router.push(`/product/${item._id}`)}>
            <img
              src={item.thumbnail}
              alt=""
              className="h-56 w-full transition-transform duration-300 object-fill"
            />
          </div>

          <div>
            <img
              src={item.images[0]}
              alt=""
              className="h-56 w-full transition-transform duration-300 object-fill"
            />
          </div>

          <div>
            <img
              src={item.images[1]}
              alt=""
              className="h-56 w-full transition-transform duration-300 object-fill"
            />
          </div>
          <div>
            <img
              src={item.images[2]}
              alt=""
              className="h-56 w-full transition-transform duration-300 object-fill"
            />
          </div>

        </Slider>
        <div className="my-2 mx-auto flex w-10/12 flex-col items-start justify-between">
          <div className="mt-10 mx-auto items-start justify-between">
            <div className="mb-2 mx-3 flex items-center gap-10 justify-between">
              <p className="mr-3 line-through text-md font-semibold">{`AED ${item.price}`}</p>
              <p className="mr-3 text-sm font-semibold text-red-700">{`AED ${(item.price - item.price * (item.discountPercentage / 100)).toFixed(2)}`}</p>
            </div>

          </div>
          <h3 className="md-2 text-gray-400 text-md">{item.title}</h3>

        </div>
      </div>
 
    </div>
  );
}
