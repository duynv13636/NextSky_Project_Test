import React from "react";
import { BannerImage, BannerMobile } from "../assets";
import ButtonCommon from "../common/button/ButtonCommon";
import NextIcon from "../common/icons/NextIcon";
import PrevIcon from "../common/icons/PrevIcon";
import DotIcon from "../common/icons/Dot";

const Banner = () => {
  return (
    <div className="relative">
      <div className="md:flex hidden">
        <img src={BannerImage} alt="" />
      </div>
      <div className="md:hidden flex">
        <img className="w-full" src={BannerMobile} alt="" />
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 md:text-center text-left md:left-80 left-[21px]">
        <h1 className="md:text-[80px] md:leading-[80px] text-[40px] leading-[40px]">
          Stylish
        </h1>
        <p className="md:text-[80px] md:leading-[80px] text-[40px] leading-[40px]">
          Top Trending
        </p>
        <p className="text-base font-normal md:pt-5 pt-[10px]">
          So soft you don't want to take it off.
        </p>
        <div className="md:pt-[50px] pt-[30px] flex md:justify-center">
          <button
            className={`bg-[#111111] text-white rounded-[30px] flex justify-center items-center cursor-pointer md:w-[200px] w-[150px] md:h-[55px] h-[50px] hover:bg-white hover:text-black hover:border transition-all`}>
            Explore Now
          </button>
        </div>
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 left-[30px] md:flex hidden">
        <PrevIcon />
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 right-[30px] md:flex hidden">
        <NextIcon />
      </div>
      <div className="absolute left-1/2 right-1/2 bottom-[30px]">
        <DotIcon />
      </div>
    </div>
  );
};

export default Banner;
