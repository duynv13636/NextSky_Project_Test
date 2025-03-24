import React from "react";
import WishListIconMobile from "../common/icons/WishListIconMobile";
import QuickViewIconMobile from "../common/icons/QuickViewIconMobile";
import AddCartIconMobile from "../common/icons/AddCartIconMobile";

const ProductCard = ({
  image,
  name,
  price,
  originalPrice,
  colors,
  rating,
  badge,
  badgeType,
  discount,
  indexPro,
}) => {
  return (
    <div className="rounded-lg relative">
      {discount && (
        <span
          className={`absolute top-[15px] left-[15px] px-[10.5px] py-[3px] text-[13px] rounded-[30px] bg-[#D73F0F] text-white`}>
          {discount}
        </span>
      )}
      {badge && (
        <span
          className={`absolute left-[15px] px-[10.5px] py-[3px] text-[13px] rounded-[30px] ${
            badgeType === "sold-out"
              ? "bg-[#757575] text-white top-[15px]"
              : badgeType === "pre-order"
              ? "bg-[#177983] text-white top-[46px]"
              : "bg-red-500 text-white"
          }`}>
          {badge}
        </span>
      )}
      <div className="md:hidden absolute right-[40px] flex flex-col gap-[5px] top-[-8px]">
        <div className="h-[40px] w-[40px]">
          <WishListIconMobile />
        </div>
        <div className="h-[40px] w-[40px]">
          <QuickViewIconMobile />
        </div>
        <div className="h-[40px] w-[40px]">
          <AddCartIconMobile />
        </div>
      </div>

      <div className="relative overflow-hidden">
        <img src={image} alt={name} className="rounded-lg" />
        {indexPro === 0 && (
          <div className="md:hidden text-xs font-medium flex items-center justify-between absolute h-8 bg-black text-white w-full bottom-0 rounded-bl-[10px] rounded-br-[10px]">
            <p>Hot Sale 10% Off</p>
            <span>
              <svg
                width={9}
                height={12}
                viewBox="0 0 9 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M8.45115 5.15038L3.46899 11.9004C3.44574 11.9318 3.41543 11.9574 3.38049 11.9751C3.34555 11.9927 3.30696 12.0019 3.26782 12.0019C3.23487 12.002 3.20223 11.9954 3.17187 11.9826C3.12021 11.9612 3.07723 11.9231 3.04983 11.8744C3.02242 11.8256 3.01218 11.7691 3.02075 11.7138L3.70849 7.25192H0.750003C0.703741 7.25192 0.658387 7.23909 0.618987 7.21484C0.579587 7.1906 0.547686 7.1559 0.526835 7.1146C0.505983 7.07331 0.496999 7.02704 0.500882 6.98094C0.504765 6.93484 0.521363 6.89072 0.548828 6.8535L5.53099 0.103519C5.56418 0.0585335 5.61149 0.0259722 5.66537 0.011038C5.71924 -0.00389616 5.77657 -0.000341354 5.82819 0.0211344C5.8798 0.0426102 5.92273 0.0807675 5.95011 0.129509C5.97749 0.178251 5.98775 0.234764 5.97924 0.290018L5.29149 4.75193H8.24998C8.29624 4.75193 8.3416 4.76476 8.38101 4.789C8.42041 4.81325 8.45232 4.84795 8.47317 4.88925C8.49402 4.93055 8.503 4.97683 8.49912 5.02293C8.49523 5.06903 8.47862 5.11315 8.45115 5.15038Z"
                  fill="#FFB800"
                />
              </svg>
            </span>
            <p>Hot Sale 10% Off</p>
          </div>
        )}
      </div>

      <div className="mt-4 text-left">
        <p className="text-base">{name}</p>

        <div className="flex mt-2">
          {Array.from({ length: rating }).map((_, i) => (
            <span key={i} className="text-black">
              ★
            </span>
          ))}
        </div>

        <div className="mt-2">
          <span
            className="text-[14px] font-medium"
            style={{ color: originalPrice ? "#D73F0F" : "#111111" }}>
            {price}
          </span>
          {originalPrice && (
            <span className="text-gray-400 line-through ml-2">
              {originalPrice}
            </span>
          )}
        </div>

        <div className="flex gap-2 mt-2">
          {colors.map((color, i) => (
            <div
              className="w-[25px] h-[25px] rounded-full border-1 p-[3px]"
              key={i}>
              <span
                key={i}
                className="rounded-full w-full h-full block"
                style={{ backgroundColor: color }}></span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
