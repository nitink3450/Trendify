import Image from "next/image";
import React from "react";

const SecBanner1 = () => {
  return (
    <>
      <div className="relative flex flex-col justify-center items-center w-full gap-[42px] lg:gap-[207px]  mt-[18px] lg:mt-[80px]">
        <div className="h-fit lg:hidden flex w-fit ml-[20px]">
          <Image
            src={"./images/fullCube.svg"}
            height={267}
            width={250}
            alt="logo"
          />
        </div>
        <div className="wrapper w-full flex justify-start flex-col gap-[31px]">
          <div className="max-w-[650px] font-bold text-[28px]  lg:text-[48px] leading-[38px] lg:leading-[61px]">
            Your bootstrap Partners for a professional, successful Go-to-market
            launch.
          </div>
          <div className="max-w-[683px] font-bold text-[15px] leading-[22px] lg:text-[16px] lg:leading-[26px] opacity-80">
            We have extensive experience in investing and digital marketing, and
            have assisted over 30+ blockchain startups in fundraising,
            increasing public awareness, and implementing their projects during
            the pre-IDO and post-IDO stages.
          </div>
        </div>
        <div className="font-bold text-[22px] leading-[37px] lg:text-[42px] lg:leading-[44px] flex justify-center items-center p-[45px_16px] lg:p-[79.5px_109px] max-w-[1374px] rounded-[30px] bg-[#0000004d] text-center backdrop-blur-[10px] mx-[10px] z-10">
          We take a long-term approach and invest significant time and resources
          to support and guide our partners throughout their development.
        </div>
        <div className="absolute z-[1] bottom-[-260px] lg:bottom-[-210px] left-0">
          <Image
            src={"./images/gradients/bannerGrad1.svg"}
            height={616}
            width={616}
            alt="logo"
          />
        </div>
        <div className="absolute flex lg:hidden bottom-[90px] left-0">
          <Image
            src={"./images/leftCube.svg"}
            height={268.25}
            width={250.25}
            alt="logo"
          />
        </div>
      </div>
    </>
  );
};

export default SecBanner1;
