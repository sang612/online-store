import React from "react";
import Slider from "react-slick";
import banner1 from "../../assets/img/banner1.jpg";
import banner2 from "../../assets/img/banner2.jpg";
import banner3 from "../../assets/img/banner3.png";
import banner4 from "../../assets/img/banner4.webp";

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    accessibility: true,
    pauseOnHover: false,
  };

  return (
    <div className="mb-20 mt-11">
      <Slider {...settings}>
        <div>
          <div
            style={{ backgroundImage: `url(${banner1})` }}
            className="w-full h-80 md:h-screen bg-center bg-no-repeat bg-contain md:bg-cover"
          ></div>
        </div>

        <div>
          <div
            style={{ backgroundImage: `url(${banner2})` }}
            className="w-full h-80 md:h-screen bg-center bg-no-repeat bg-contain md:bg-cover"
          ></div>
        </div>

        <div>
          <div
            style={{ backgroundImage: `url(${banner3})` }}
            className="w-full h-80 md:h-screen bg-center bg-no-repeat bg-contain md:bg-cover"
          ></div>
        </div>

        <div>
          <div
            style={{ backgroundImage: `url(${banner4})` }}
            className="w-full h-80 md:h-screen bg-center bg-no-repeat bg-contain md:bg-cover"
          ></div>
        </div>
      </Slider>
    </div>
  );
};

export default Banner;
