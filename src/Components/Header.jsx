"use client";
import { useState } from "react";

import Navbar from "./Navbar";
import MobileManue from "./MobileManue";


import { BiMenuAltRight } from "react-icons/bi";
import { VscChromeClose } from "react-icons/vsc";

function Header() {
  const [mobileManue, setMobileManue] = useState(false);
  
  

  return (
    <header
      className={`w-full h-[50px] md:h-[80px] bg-white flex items-center justify-between z-20 sticky top-0 transition-transform duration-300 gap-6`}
    >
      <div className="w-full h-[50px] md:h-[80px] bg-white flex items-center justify-between z-20 sticky top-0 transition-transform duration-300 py-3 px-2">
        <a href="/">
          <h2 className="font-extrabold  text-[28px]">Gallery</h2>
        </a>
        <Navbar className="w-[100%]" />
        {mobileManue && <MobileManue />}
        <div className="flex items-center gap-2 text-black">
          {/* mobile icon start */}
          <div className="w-8 md:w-12 md:hidden h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black[0.07] cursor-pointer relative -mr-2">
            {mobileManue ? (
              <VscChromeClose
                className="text-[16px]"
                onClick={() => setMobileManue(false)}
              />
            ) : (
              <BiMenuAltRight
                className="text-[24px]"
                onClick={() => setMobileManue(true)}
              />
            )}
          </div>
          {/* mobile icon end */}
        </div>
      </div>
    </header>
  );
}

export default Header;
