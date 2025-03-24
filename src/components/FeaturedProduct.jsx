import React from "react";
import {
  ImageBottom,
  ImageBottomMobile,
  ImageLeft,
  ImageLeftMobile,
  ImageRight,
  ImageRightMobile,
  ImageTop,
  ImageTopMobile,
} from "../assets";
import ButtonFeatureProductCommon from "../common/button/ButtonFeatureProductCommon";
const FeaturedProductItem = ({ imgSrc, textBtn }) => {
  if (!imgSrc) return;
  return (
    <div className="relative">
      <img src={imgSrc} alt={textBtn} className="w-full" />
      <div className="absolute md:bottom-[30px] bottom-[20px] left-1/2 transform -translate-x-1/2">
        <ButtonFeatureProductCommon textBtn={textBtn} />
      </div>
    </div>
  );
};
const FeaturedProduct = () => {
  return (
    <div className="mx-auto md:max-w-[1410px]">
      <h1 className="md:text-[45px] text-[30px] font-normal md:leading-[32px] leading-[25px] md:mt-[100px] mt-[60px] text-center">
        Featured Collections
      </h1>
      <p className="text-base font-normal md:pt-[25px] pt-[15px] text-center">
        Elevate your style with our chic featured collection—where fashion meets
        flair effortlessly.
      </p>
      <div className="md:flex hidden gap-[30px] mt-[40px]">
        <div>
          <FeaturedProductItem imgSrc={ImageLeft} textBtn={"Clothing"} />
        </div>
        <div className="flex flex-col gap-[30px]">
          <div>
            <FeaturedProductItem imgSrc={ImageTop} textBtn={"Sunglasses"} />
          </div>
          <div>
            <FeaturedProductItem imgSrc={ImageBottom} textBtn={"Bags"} />
          </div>
        </div>
        <div>
          <FeaturedProductItem imgSrc={ImageRight} textBtn={"Sneaker"} />
        </div>
      </div>
      <div className="md:hidden flex gap-5 px-5 mt-5 justify-center">
        <div className="flex flex-col gap-5">
          <FeaturedProductItem imgSrc={ImageLeftMobile} textBtn={"Clothing"} />
          <FeaturedProductItem imgSrc={ImageTopMobile} textBtn={"Sunglasses"} />
        </div>
        <div className="flex flex-col gap-5">
          <FeaturedProductItem imgSrc={ImageBottomMobile} textBtn={"Bags"} />
          <FeaturedProductItem imgSrc={ImageRightMobile} textBtn={"Sneaker"} />
        </div>
      </div>
    </div>
  );
};

export default FeaturedProduct;
