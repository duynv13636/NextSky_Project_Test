import React from "react";
import ProductCard from "./Product";
import {
  ProductImage1,
  ProductImage2,
  ProductImage3,
  ProductImage4,
} from "../assets";
import NextIconMobile from "../common/icons/NextIconMobile";
import PrevMobileIcon from "../common/icons/PrevMobileIcon";
const products = [
  {
    image: ProductImage1,
    name: "Square Textured Striped",
    price: "$150.00",
    colors: ["#272D43", "#A93A3A", "#E1D6C7"],
    rating: 4,
    badge: "Sold Out",
    badgeType: "sold-out",
  },
  {
    image: ProductImage2,
    name: "Square Textured Striped",
    price: "$150.00",
    originalPrice: "$490.00",

    colors: ["#EEEEEE", "#D6D6D6", "#C2CADF"],
    rating: 5,
  },
  {
    image: ProductImage3,
    name: "Square Textured Striped",
    price: "$150.00",
    colors: ["#08382C", "#492919", "#DFD3C2"],
    rating: 5,
    badge: "Pre-Order",
    badgeType: "pre-order",
    discount: "-10%",
  },
  {
    image: ProductImage4,
    name: "Square Textured Striped",
    price: "$150.00",
    colors: ["#08382C", "#492919", "#DFD3C2"],
    rating: 4,
  },
];
const NewArrivals = () => {
  return (
    <div className="md:max-w-[1410px] mx-auto md:pt-[100px] pt-[60px] text-center">
      <h2 className="md:text-[45px] md:leading-[32px] text-[36px] leading-[25px]">
        New Arrivals
      </h2>
      <p className="text-base text-[#555555] pt-[25px]">
        Here's some of our new arrivals products people are in love with.
      </p>
      <div className="md:hidden flex justify-center gap-[10px] mt-5">
        <PrevMobileIcon />
        <NextIconMobile />
      </div>
      <div className="pt-[40px] flex flex-wrap justify-center gap-[30px]">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} indexPro={index} />
        ))}
      </div>
    </div>
  );
};

export default NewArrivals;
