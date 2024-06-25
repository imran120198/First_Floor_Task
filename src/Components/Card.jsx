import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const data = [
  {
    name: `3 BHK Apartment for Sale in 24th Main Road, Bengaluru`,
    img: `https://s3.ap-south-1.amazonaws.com/zs2.0/PropertyImages/61292250-72f5-423d-8848-aff300950061.jpg`,
    price: `₹ 1.75 CR`,
  },
  {
    name: `2 BHK Apartment for Sale in Bellandur, Bengaluru`,
    img: `https://s3.ap-south-1.amazonaws.com/zs2.0/PropertyImages/95ab0f65-8c6a-4984-8df5-e9100c4564cc.png`,
    price: `₹ 90.00 Lac`,
  },
  {
    name: `4 BHK Apartment for Rent in Muneshwara Nagar, Bengaluru Urban`,
    img: `https://s3.ap-south-1.amazonaws.com/zs2.0/PropertyImages/b74bf034-b68a-4608-ba3e-6b1579612cb0.png`,
    price: `₹ 1.20 Lac`,
  },
  {
    name: `3 BHK Apartment for Sale in 24th Main Road, Bengaluru`,
    img: `https://s3.ap-south-1.amazonaws.com/zs2.0/PropertyImages/61292250-72f5-423d-8848-aff300950061.jpg`,
    price: `1.75 CR`,
  },
];

const Card = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 5000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="w-full h-[500px] p-8">
      <div className="w-[100%] m-auto mt-8">
        <h1 className="w-[100%] text-left font-sans text-3xl font-medium mx-2">
          Popular Apartments in Bangalore
        </h1>
        <div className="mt-4">
          <Slider {...settings}>
            {data.map((elem, index) => (
              <div key={index} className="h-[33%] rounded-xl p-2">
                <div className="flex flex-col justify-center rounded-t-xl">
                  <img
                    src={elem.img}
                    className="w-full h-72 object-cover rounded-xl"
                    alt={elem.name}
                  />
                </div>
                <div className="p-2">
                  <p className="text-xl text-blue-500 text-left">
                    {elem.price}
                  </p>
                  <p className="text-xl text-left">{elem.name}</p>
                </div>
                <div className="p-2">
                  <button className="text-lg text-white bg-blue-500 px-4 py-2 rounded-md">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Card;
