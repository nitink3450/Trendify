import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <>
      <div className="w-full h-[86px] bg-transparent sticky top-0 left-0 right-0 z-50 flex justify-between items-center  text-white">
        <div className="w-[75%] flex flex-row justify-between items-center ">
          <div className="h-fit w-fit ml-[120px]">
            <Image
              src={"./icons/trendify-logo.svg"}
              height={27.7}
              width={117.96}
              alt="logo"
            />
          </div>
          <ul className="flex flex-row justify-between items-center gap-[71px]">
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">Our Services</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Contact us</a>
            </li>
          </ul>
        </div>
        <button className="border h-[54px] w-[200px] rounded-full mr-[16px]">
          Free Consultation
        </button>
      </div>
    </>
  );
};

export default Header;
