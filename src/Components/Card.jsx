import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { PiBathtub } from "react-icons/pi";
import { TbArmchair2 } from "react-icons/tb";
import { LuBedDouble } from "react-icons/lu";
import { FiMapPin } from "react-icons/fi";

const data = [
  {
    id: 1,
    image:
      "https://s3.ap-south-1.amazonaws.com/zs2.0/PropertyImages/61292250-72f5-423d-8848-aff300950061.jpg",
    price: "₹ 45,000",
    name: "2 BHK Apartment for Rent in HSR Layout, Bengaluru",
    location: "HSR Layout, Bengaluru, Karnataka - 560102",
    beds: 2,
    baths: 2,
    furnished: "Furnished",
    postedOn: "31 Aug 2023",
  },
  {
    id: 2,
    image:
      "https://s3.ap-south-1.amazonaws.com/zs2.0/PropertyImages/95ab0f65-8c6a-4984-8df5-e9100c4564cc.png",
    price: "₹ 90.00 Lac",
    name: "2 BHK Apartment for Sale in Bellandur, Bengaluru",
    location: "WMJH+59C, Bellandur, Bengaluru, Karnataka 560103, India",
    beds: 2,
    baths: 2,
    furnished: "Furnished",
    postedOn: "17 Aug 2023",
  },
  {
    id: 3,
    image:
      "https://s3.ap-south-1.amazonaws.com/zs2.0/PropertyImages/bf30e5c6-98ae-4b67-8e2e-f7b73335e662.png",
    price: "₹ 1.75 CR",
    name: "3 BHK Apartment for Sale in 24th Main Road, Bengaluru",
    location: "DSR Rainbow Heights, 24th Main Rd, ITI Layout, Sector 7",
    beds: 3,
    baths: 2,
    furnished: "Furnished",
    postedOn: "21 Jul 2023",
  },
  {
    id: 4,
    image:
      "https://s3.ap-south-1.amazonaws.com/zs2.0/PropertyImages/b74bf034-b68a-4608-ba3e-6b1579612cb0.png",
    price: "₹ 1.20 Lac",
    name: "4 BHK Apartment for Rent in Muneshwara Nagar, Bengaluru Urban",
    location: "78/9, near Friends Bakery, Sector 6, Muneshwara Nagar",
    beds: 4,
    baths: 3,
    furnished: "Furnished",
    postedOn: "23 Aug 2023",
  },
  {
    id: 5,
    image:
      "https://s3.ap-south-1.amazonaws.com/zs2.0/PropertyImages/a208b751-5b1a-4e8b-90d2-d5c4da9aaad7.jpg",
    price: "₹ 55,000",
    name: "3 BHK Apartment for Rent in Basaveshwar Nagar, Bengaluru Urban",
    location: "Mahatma Gandhi Nagar, Basaveshwar Nagar, Bengaluru",
    beds: 3,
    baths: 1,
    furnished: "Furnished",
    postedOn: "15 Aug 2023",
  },
  {
    id: 6,
    image:
      "https://s3.ap-south-1.amazonaws.com/zs2.0/PropertyImages/9fda6aba-7d6b-4901-aa53-a8f1da1021e1.jpeg",
    price: "₹ 2.00 Lac",
    name: "3 BHK Apartment for Rent in Sivanchetti Gardens, Bengaluru Urban",
    location:
      "Yellappa Chetty Layout,Sivanchetti Gardens,Bengaluru, Karnataka 560042",
    beds: 3,
    baths: 3,
    furnished: "Furnished",
    postedOn: "12 Aug 2023",
  },
  {
    id: 7,
    image:
      "https://s3.ap-south-1.amazonaws.com/zs2.0/PropertyImages/f419d58e-81bf-401d-945e-fd76fa6667cf.jpeg",
    price: "₹ 1.25 CR",
    name: "3 BHK Apartment for Sale in Richards Town, Bengaluru",
    location: "Richards Town, Bengaluru, Karnataka - 560005",
    beds: 3,
    baths: 3,
    furnished: "Furnished",
    postedOn: "12 Aug 2023",
  },
];

const Card = () => {
  const [filter, setFilter] = useState("All");

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const filteredData =
    filter === "All"
      ? data
      : data.filter((item) => item.beds === parseInt(filter));

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2000,
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
    <div className="w-full h-[500px] p-8 mb-10 mt-[100px]">
      <div className="w-[95%] m-auto mt-8">
        <div className="flex items-center mb-4">
          <h2 className="lg:text-2xl font-bold text-gray-600 sm:text-md">
            Popular Apartments in Bengaluru
          </h2>
          <div className="flex space-x-2 ml-4">
            <button
              className={`px-3 py-1 ${
                filter === "All"
                  ? "bg-green-500 text-white"
                  : "bg-gray-200 text-gray-700"
              } rounded`}
              onClick={() => handleFilterChange("All")}
            >
              All
            </button>
            <button
              className={`px-3 py-1 ${
                filter === "2"
                  ? "bg-green-500 text-white"
                  : "bg-gray-200 text-gray-700"
              } rounded`}
              onClick={() => handleFilterChange("2")}
            >
              2 BHK
            </button>
            <button
              className={`px-3 py-1 ${
                filter === "3"
                  ? "bg-green-500 text-white"
                  : "bg-gray-200 text-gray-700"
              } rounded`}
              onClick={() => handleFilterChange("3")}
            >
              3 BHK
            </button>
          </div>
        </div>
        <div className="mt-4">
          <Slider {...settings}>
            {filteredData.map((elem, index) => (
              <div key={index} className="h-[33%] rounded-xl p-2">
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img
                    src={elem.image}
                    alt={elem.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-xl flex font-semibold text-blue-600">
                      <span className="text-lg">{elem.price}</span>
                    </h3>
                    <h4 className="text-md font-medium mt-1 text-left">
                      {elem.name.length > 40
                        ? `${elem.name.substring(0, 40)}...`
                        : elem.name}
                    </h4>
                    <p className="text-sm flex text-gray-500 mt-1">
                      <FiMapPin size={20} className="mr-1 mt-1" />
                      <span className="text-sm text-left">
                        {elem.location.length > 40
                          ? `${elem.location.substring(0, 40)}...`
                          : elem.location}
                      </span>
                    </p>
                    <div className="flex justify-between mt-3">
                      <div className="flex items-center">
                        <LuBedDouble
                          size={20}
                          className="mr-1"
                          color="#609CE6"
                        />
                        <span className="text-sm">{elem.beds} Beds</span>
                      </div>
                      <div className="flex items-center">
                        <PiBathtub size={20} className="mr-1" color="#609CE6" />
                        <span className="text-sm">{elem.baths} Baths</span>
                      </div>
                      <div className="flex items-center">
                        <TbArmchair2
                          size={20}
                          className="mr-1"
                          color="#609CE6"
                        />
                        <span className="text-sm">{elem.furnished}</span>
                      </div>
                    </div>

                    <div className="flex justify-between items-start">
                      <div className="text-sm text-black mt-3">
                        <p className="text-gray-500 text-sm text-left ">
                          Posted On:
                        </p>
                        <p>{elem.postedOn}</p>
                      </div>
                      <div className="mt-4">
                        <button className="w-full bg-[#0d6efd] text-white py-2 px-4 rounded">
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
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
