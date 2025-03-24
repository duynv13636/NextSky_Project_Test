import classNames from "classnames/bind";
import React from "react";

const ButtonCommon = ({
  textBtn,
  bgBtn,
  widthBtn,
  heightBtn,
  colorBtn,
  widthMobile,
  heightMobile,
}) => {
  if (!widthBtn || !heightBtn || !widthMobile || !heightMobile) return;
  return (
    <button
      className={classNames(
        `rounded-[30px] flex justify-center items-center cursor-pointer md:w-[${widthBtn}px] w-[${widthMobile}px] md:h-[${heightBtn}px] h-[${heightMobile}px] hover:bg-white hover:text-black`
      )}
      style={{
        background: bgBtn,
        color: colorBtn,
      }}>
      {textBtn ? textBtn : "Explore Now"}
    </button>
  );
};

export default ButtonCommon;
