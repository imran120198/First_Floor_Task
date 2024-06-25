import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const data = [
  {
    img: `https://zameensquare.com/_next/static/media/Post-Property-Banner.f6ea47b2.jpg`,
  },
  {
    img: `https://zameensquare.com/_next/static/media/Get-Our-Mobile-App-Now-web(new).d119e432.gif`,
  },
];

const TopHero = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 5000,
    slidesToShow: 1,
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
    <div className="w-full h-[350px] p-8">
      <div className="w-[100%] m-auto mt-8">
        <div className="mt-4 ">
          <Slider {...settings}>
            {data.map((elem) => (
              <div className=" h-[100%] text-black rounded-xl p-2">
                <div className="flex justify-center items-center rounded-t-xl">
                  <img
                    src={elem.img}
                    className="w-full h-full object-cover  rounded-xl"
                    alt=""
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default TopHero;
