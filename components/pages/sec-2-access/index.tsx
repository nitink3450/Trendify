import Image from "next/image";
import React from "react";

const SecAccess2 = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center mt-[162px]">
        <div className="flex flex-col justify-center items-center gap-[16px]">
          <p className="text-center font-bold text-[42px] leading-[44px] ">
            Access to new markets at your fingertips.
          </p>
          <p className="text-center max-w-[749px] font-bold text-[16px] leading-[26px] opacity-80">
            It took us 3 years to build ourselves. enjoy the fruits of our hard
            work - and access our knowledge, network & experience in
            <span className="text-[#00C2CB] ml-[5px]">one click</span>.
          </p>
        </div>
        <div className="h-fit w-full mt-[23px] relative">
          <Image
            src={"./images/earth.svg"}
            height={671}
            width={2000}
            alt="logo"
          />
          <div className="absolute h-fit w-fit top-[100px] left-[50%] translate-x-[-50%] z-[-10]">
            <Image
              src={"./images/gradients/earthGrad.svg"}
              height={802}
              width={802}
              alt="logo"
            />
          </div>
        </div>
        <div className="relative mt-[200px] w-full flex justify-center items-center">
          <div className="">
            <p className="text-center max-w-[749px] font-bold text-[46px] leading-[95px] tracking-[0.0703846px]">
              much
            </p>
            <div className="moreText h-fit w-fit text-center font-black leading-[95px] text-[277px]">
              more
            </div>
            <p className="text-center max-w-[749px] font-bold text-[46px] leading-[65px] tracking-[0.0703846px]">
              than a marketing agency
            </p>
          </div>
          <div className="absolute flex justify-center items-center h-full w-full bottom-[80px] left-[50%] translate-x-[-50%]  z-[-10]">
            <Image
              src={"./images/gradients/moreGrad.svg"}
              height={1525}
              width={1925}
              alt="logo"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SecAccess2;
