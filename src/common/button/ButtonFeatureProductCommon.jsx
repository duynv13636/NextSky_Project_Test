import React from "react";

const ButtonFeatureProductCommon = ({ textBtn }) => {
  return (
    <button
      className={
        "rounded-[30px] flex justify-center items-center cursor-pointer md:w-[160px] w-[120px] md:h-[50px] h-[50px] bg-white hover:bg-black hover:text-white transition-all"
      }>
      {textBtn ? textBtn : "Explore Now"}
    </button>
  );
};

export default ButtonFeatureProductCommon;
