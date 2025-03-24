import React from "react";
import HomIcon from "../common/icons/HomIcon";
import ShopIcon from "../common/icons/ShopIcon";
import UserIcon from "../common/icons/User";
import FavoriteIcon from "../common/icons/Favorite";
import CartIcon from "../common/icons/Cart";

const NavFooterMobile = () => {
  return (
    <div className="sticky bottom-0 z-10 bg-white shadow-2xl py-[15px] md:hidden block">
      <div className="text-xs flex items-center justify-between px-[20px] ">
        <div className="text-center flex flex-col items-center justify-center">
          <HomIcon />
          <p>Home</p>
        </div>
        <div className="text-center flex flex-col items-center justify-center">
          <span>
            <ShopIcon />
          </span>
          <span>Shop</span>
        </div>
        <div className="text-center flex flex-col items-center justify-center">
          <span>
            <UserIcon />
          </span>
          <span>Account</span>
        </div>
        <div className="text-center flex flex-col items-center justify-center">
          <span>
            <FavoriteIcon />
          </span>
          <span>Wishlist</span>
        </div>
        <div className="text-center flex flex-col items-center justify-center">
          <span>
            <CartIcon />
          </span>
          <span>Cart</span>
        </div>
      </div>
    </div>
  );
};

export default NavFooterMobile;
