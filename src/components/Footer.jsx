import React, { useState } from "react";
import LogoIcon from "../common/icons/Logo";
import InstagramIcon from "../common/icons/InstagramIcon";
import TikTokIcon from "../common/icons/TiktokIcon";
import YoutubeIcon from "../common/icons/YoutubeIcon";
import XIcon from "../common/icons/XIcon";
import FacebookIcon from "../common/icons/FacebookIcon";
import FavoriteFooterIcon from "../common/icons/FavoriteFooterIcon";
import LogoShopFooter from "../common/icons/LogoShopFooter";
import ButtonCommon from "../common/button/ButtonCommon";
import PlusIcon from "../common/icons/PlusIcon";
import MinusIcons from "../common/icons/MinusIcons";

const Footer = () => {
  const [isOpenTabFooter, setIsOpenTabFooter] = useState({
    tab1: true,
    tab2: true,
    tab3: true,
  });
  return (
    <div className="border-t border-[#EBEBEB] md:mt-[100px] mt-[60px] mx-[20px]">
      <div className="md:max-w-[1410px] md:mx-auto mx-5">
        <div className="md:grid md:grid-cols-4 gap-[30px] md:pb-[100px] pb-[20px] md:pt-[100px] pt-[60px]">
          <div>
            <LogoIcon />
            <div className="text-base pt-[30px]">
              <ul>
                <li>268 St, South New York/NY 98944, United States</li>
                <li> +222-1800-2628</li>
                <li>blueskytechcompany@gmail.com</li>
              </ul>
            </div>
            <div className="mt-[25px]">
              <ul className="flex gap-[10px] items-center">
                <li>
                  <InstagramIcon />
                </li>
                <li>
                  <TikTokIcon />
                </li>{" "}
                <li>
                  <YoutubeIcon />
                </li>{" "}
                <li>
                  <XIcon />
                </li>{" "}
                <li>
                  <FacebookIcon />
                </li>
              </ul>
            </div>
            <div className="mt-[25px] flex items-center gap-[10px]">
              <FavoriteFooterIcon />
              <p className="text-base text-[#555555]">Follow on</p>
              <LogoShopFooter />
            </div>
          </div>
          <div className="md:hidden block h-[1px] bg-[#EBEBEB] mt-[30px] mb-[20px]"></div>
          <div>
            <div className="md:block flex justify-between items-center">
              <h3 className="font-semibold text-[14px]">HOT CATEGORIES</h3>
              {!isOpenTabFooter.tab1 ? (
                <span
                  className="md:hidden"
                  onClick={() =>
                    setIsOpenTabFooter({
                      ...isOpenTabFooter,
                      tab1: !isOpenTabFooter.tab1,
                    })
                  }>
                  <PlusIcon />
                </span>
              ) : (
                <span
                  className="md:hidden"
                  onClick={() =>
                    setIsOpenTabFooter({
                      ...isOpenTabFooter,
                      tab1: !isOpenTabFooter.tab1,
                    })
                  }>
                  <MinusIcons />
                </span>
              )}
            </div>
            {isOpenTabFooter.tab1 && (
              <ul className="md:hidden block space-y-[15px] text-[#555555] text-base mt-[20px]">
                <li>Special Offers</li>
                <li className=" text-[#111111] ml-2">Performance</li>
                <li>T-shirts</li>
                <li>Underwear</li>
                <li>Top Brands</li>
                <li>Online Exclusive</li>
              </ul>
            )}
            <ul className="md:block hidden space-y-[15px] text-[#555555] text-base mt-[25px]">
              <li>Special Offers</li>
              <li className=" text-[#111111] ml-2">Performance</li>
              <li>T-shirts</li>
              <li>Underwear</li>
              <li>Top Brands</li>
              <li>Online Exclusive</li>
            </ul>
          </div>
          <div className="md:hidden block h-[1px] bg-[#EBEBEB] mt-[30px] mb-[20px]"></div>
          <div>
            <div className="md:block flex justify-between items-center">
              <h3 className="font-semibold text-[14px]">CUSTOMER SERVICE</h3>
              {!isOpenTabFooter.tab2 ? (
                <span
                  className="md:hidden"
                  onClick={() =>
                    setIsOpenTabFooter({
                      ...isOpenTabFooter,
                      tab2: !isOpenTabFooter.tab2,
                    })
                  }>
                  <PlusIcon />
                </span>
              ) : (
                <span
                  className="md:hidden"
                  onClick={() =>
                    setIsOpenTabFooter({
                      ...isOpenTabFooter,
                      tab2: !isOpenTabFooter.tab2,
                    })
                  }>
                  <MinusIcons />
                </span>
              )}
            </div>
            {isOpenTabFooter.tab2 && (
              <ul className="md:hidden block space-y-[15px] text-[#555555] text-base mt-[20px]">
                <li>Privacy Policy</li>
                <li>Refund Policy</li>
                <li>Shipping & Return</li>
                <li>Term & Conditions</li>
                <li>Advanced Search</li>
                <li>Theme FAQs</li>
                <li>Store Locations</li>
              </ul>
            )}
            <ul className="md:block hidden space-y-[15px] text-[#555555] text-base mt-[25px]">
              <li>Privacy Policy</li>
              <li>Refund Policy</li>
              <li>Shipping & Return</li>
              <li>Term & Conditions</li>
              <li>Advanced Search</li>
              <li>Theme FAQs</li>
              <li>Store Locations</li>
            </ul>
          </div>
          <div className="md:hidden block h-[1px] bg-[#EBEBEB] mt-[30px] mb-[20px]"></div>
          <div>
            <div className="md:block flex justify-between items-center">
              <h3 className="font-semibold text-[14px]">
                SIGN UP TO NEWSLETTER
              </h3>
              {!isOpenTabFooter.tab3 ? (
                <span
                  className="md:hidden"
                  onClick={() =>
                    setIsOpenTabFooter({
                      ...isOpenTabFooter,
                      tab3: !isOpenTabFooter.tab3,
                    })
                  }>
                  <PlusIcon />
                </span>
              ) : (
                <span
                  className="md:hidden"
                  onClick={() =>
                    setIsOpenTabFooter({
                      ...isOpenTabFooter,
                      tab3: !isOpenTabFooter.tab3,
                    })
                  }>
                  <MinusIcons />
                </span>
              )}
            </div>
            {isOpenTabFooter.tab3 && (
              <div className="2xl:hidden block">
                <p className="text-[#555555] text-base mb-4 mt-[20px]">
                  Enter your email address to get $10 off your first order and
                  free shipping. Updates information on Sales and Offers.
                </p>
                <div className="flex flex-col gap-[10px]">
                  <input
                    type="email"
                    placeholder="Enter your email..."
                    className="px-4 py-3 rounded-[30px] border-[1px] border-[#EBEBEB] outline-none w-full h-[50px]"
                  />
                  <button
                    className={`bg-[#111111] text-white rounded-[30px] flex justify-center items-center cursor-pointer w-[150px] h-[50px] hover:bg-white hover:text-black`}>
                    SUBSCRIBE
                  </button>
                </div>
              </div>
            )}

            <p className="text-[#555555] text-base mb-4  mt-[25px] 2xl:block hidden">
              Enter your email address to get $10 off your first order and free
              shipping. Updates information on Sales and Offers.
            </p>
            <div className="2xl:grid hidden grid-cols-[290px_1fr] gap-[10px]">
              <input
                type="email"
                placeholder="Enter your email..."
                className="px-4 py-3 rounded-[30px] border-[1px] border-[#EBEBEB] outline-none w-[290px] h-[50px]"
              />
              <button
                className={`bg-[#111111] text-white rounded-[30px] flex justify-center items-center cursor-pointer w-[150px] h-[50px] hover:bg-white hover:text-black hover:border transition-all`}>
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
