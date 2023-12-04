import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { homesData } from '../../constant/data';
import { FaStar } from 'react-icons/fa';

const Homes = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots) => (
        <div className="absolute bottom-40 w-full text-center opacity-40 hover:opacity-100">
          <ul className="m-0 p-0">{dots}</ul>
        </div>
      ),
      
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 m-4">
      {homesData.map((home, index) => (
        <div key={index} className="border-gray-100 rounded-md text-left ">
          <Slider {...sliderSettings}>
            {home.image.map((image, imageIndex) => (
              <img key={imageIndex} src={image} alt={`Home ${index + 1}`} className="w-full object-cover mb-1 rounded-md" />
            ))}
          </Slider>

          <div className='flex items-center justify-between mt-3'>
            <h3 className="text-lg font-semibold pl-4 mb-2">{home?.location.city} {home?.location.country}</h3>
            <p className='text-lg font-semibold p-2 flex items-center'>{home?.ratings} <FaStar className="ml-1" /></p>
          </div>

          <h3 className="mb-2 pl-4">{`${home?.distanceFromCity} KM away`} </h3>
          <h3 className="mb-2 pl-4">₹{home?.rentPerNight.amount} per night</h3>
          <h3 className="text-lg font-semibold pl-4 mb-2">{home?.category}: {home?.rooms}</h3>
        </div>
      ))}
    </div>
  );
};

export default Homes;
