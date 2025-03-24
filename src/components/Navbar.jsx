import React from "react";
import LogoIcon from "../common/icons/Logo";
import SearchIcon from "../common/icons/Search";
import UserIcon from "../common/icons/User";
import ClockIcon from "../common/icons/Clock";
import FavoriteIcon from "../common/icons/Favorite";
import CartIcon from "../common/icons/Cart";
import DropdownIcon from "../common/icons/Dropdown";
import MenuMobileIcon from "../common/icons/MenuMobileIcon";

const Navbar = () => {
  return (
    <div>
      <div className="md:flex hidden text-base justify-between items-center px-[30px] py-[25px]">
        <div>
          <LogoIcon />
        </div>
        <div>
          <ul className="flex items-center gap-[30px] cursor-pointer">
            <li className="flex items-center gap-[5px] hover:text-gray-400">
              Home{" "}
              <span>
                <DropdownIcon />
              </span>
            </li>
            <li className="flex items-center gap-[5px] hover:text-gray-400">
              Shop{" "}
              <span>
                <DropdownIcon />
              </span>
            </li>
            <li className="flex items-center gap-[5px] hover:text-gray-400">
              Products{" "}
              <span>
                <DropdownIcon />
              </span>
            </li>
            <li className="flex items-center gap-[5px] hover:text-gray-400">
              Pages{" "}
              <span>
                <DropdownIcon />
              </span>
            </li>
            <li className="flex items-center gap-[5px] hover:text-gray-400">
              Blog{" "}
              <span>
                <DropdownIcon />
              </span>
            </li>
            <li className="hover:text-gray-400">Sale</li>
            <li className="hover:text-gray-400">Buy Umino!</li>
          </ul>
        </div>
        <div className="flex items-center gap-5">
          <SearchIcon />
          <UserIcon />
          <ClockIcon />
          <FavoriteIcon />
          <CartIcon />
        </div>
      </div>
      <div className="md:hidden flex text-base justify-between items-center px-[30px] py-[25px]">
        <div>
          <MenuMobileIcon />
        </div>
        <div>
          <LogoIcon />
        </div>
        <div className="flex items-center gap-5">
          <SearchIcon />
          <CartIcon />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
