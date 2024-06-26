import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Search from "./Search";

const data = [
  {
    img: `https://zameensquare.com/_next/static/media/Post-Property-Banner.f6ea47b2.jpg`,
  },
  {
    img: `https://zameensquare.com/_next/static/media/Get-Our-Mobile-App-Now-web(new).d119e432.gif`,
  },
  {
    img: `https://zameensquare.com/_next/static/media/homeHeaderImage.25bb3789.gif`,
  },
];

const TopHero = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
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
    <div className="relative w-[100%] h-[400px]">
      <div className="w-full m-auto mt-4">
        <Slider {...settings}>
          {data.map((elem, index) => (
            <div key={index} className="h-full text-black rounded-xl p-2">
              <div className="flex justify-center items-center rounded-t-xl h-[400px]">
                <img
                  src={elem.img}
                  className="w-full h-full object-cover rounded-xl"
                  alt=""
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <Search />
    </div>
  );
};

export default TopHero;
