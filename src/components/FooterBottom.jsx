import React from "react";
import DropdownIcon from "../common/icons/Dropdown";
import VisaIcon from "../common/icons/VisaIcon";
import MasterCardIcon from "../common/icons/MasterCardIcon";
import DisCoverIcon from "../common/icons/DisCoverIcon";
import WesternUnionIcon from "../common/icons/WesternUnionIcon";
import AmexIcon from "../common/icons/AmexIcon";
import CirrusIcon from "../common/icons/CirrusIcon";
import PayPalIcon from "../common/icons/PayPalIcon";

const FooterBottom = () => {
  return (
    <div className="px-[20px] md:max-w-[1410px] mx-auto text-base text-[#555555] flex items-center justify-between border-t border-[#EBEBEB] py-[30px] gap-[10px] flex-col md:flex-row">
      <div>
        <ul className="flex items-center gap-5">
          <li className="flex items-center gap-[5px]">
            English
            <span>
              <DropdownIcon />
            </span>
          </li>
          <li className="flex items-center gap-[5px]">
            United States (USD $)
            <span>
              <DropdownIcon />
            </span>
          </li>
        </ul>
      </div>
      <div>
        <p>© 2023 Umino Store. All Rights Reserved.</p>
      </div>
      <div className="flex items-center gap-[5px]">
        <VisaIcon />
        <MasterCardIcon />
        <DisCoverIcon />
        <WesternUnionIcon />
        <AmexIcon />
        <CirrusIcon />
        <PayPalIcon />
      </div>
    </div>
  );
};

export default FooterBottom;
