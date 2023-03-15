import Image from "next/image";
import React from "react";
// import SCard from "../common/sCard";
// import { scards } from "@/data/sCard";
const SecSCards3 = () => {
  return (
    <>
      <div className="flex relative flex-col justify-center items-center mt-[311px] lg:mt-[201px]">
        <div className="font-bold max-w-[461px] text-center text-[25px] leading-[34px] lg:text-[32px] lg:leading-[44px]">
          Trendify Understands your Needs and have the{" "}
          <span className="text-[#038cc4]">solutions</span>
        </div>
        <div className="mt-[119px] flex flex-wrap justify-center items-center gap-[16px]">
          <div
            className={` rounded-[50px]  flex flex-col gap-[28px] w-[310px] lg:w-[313px] h-[406px] text-white pl-[32px] lg:pl-[52px] pb-[32px] justify-end bg-[url('/images/img1.svg')] bg-cover bg-center`}
          >
            <div className="font-bold text-[32px] leading-[44px]">PR</div>
          </div>
          <div
            className={` rounded-[50px]  flex flex-col gap-[28px] w-[310px] lg:w-[905px]  h-[470px] lg:h-[406px] text-white pl-[32px] lg:pl-[52px] pb-[32px] justify-end bg-[url('/images/img2.svg')] bg-cover bg-[90%]`}
          >
            <div className="bg-[#288eca] rounded-[50px] h-[38px] w-[160px] font-bold text-[16px] leading-[22px] flex justify-center items-center">
              Most Professional{" "}
            </div>
            <div className="font-bold text-[32px] leading-[44px]">
              Influencer Marketing provider
            </div>
          </div>
          <div
            className={` rounded-[50px]  flex flex-col gap-[28px] w-[310px] lg:w-[631.5px] h-[406px] text-white pl-[32px] lg:pl-[52px] pb-[32px] justify-end bg-[url('/images/img3.svg')] bg-cover bg-center`}
          >
            <div className="font-bold text-[32px] leading-[44px]">
              Regional community promotions
            </div>
          </div>
          <div
            className={` rounded-[50px]  flex flex-col gap-[28px] w-[310px] lg:w-[631.5px] h-[406px] text-white pl-[32px] lg:pl-[52px] pb-[32px] justify-end bg-[url('/images/img4.svg')] bg-cover bg-center`}
          >
            <div className="font-bold text-[32px] leading-[44px]">
              Content creation
            </div>
          </div>
          <div
            className={` rounded-[50px]  flex flex-col gap-[28px] w-[310px] lg:w-[522px] h-[406px] text-white pl-[32px] lg:pl-[52px] pb-[32px] justify-end bg-[url('/images/img5.svg')] bg-cover bg-center`}
          >
            <div className="font-bold text-[32px] leading-[44px]">
              Community building & management
            </div>
          </div>
          <div
            className={` rounded-[50px]  flex flex-col gap-[28px] w-[310px] lg:w-[362.5px] h-[406px] text-white pl-[32px] lg:pl-[52px] pb-[32px] justify-end bg-[url('/images/img6.svg')] bg-cover bg-center`}
          >
            <div className="font-bold text-[32px] leading-[44px]">
              Graphic design
            </div>
          </div>
          <div
            className={` rounded-[50px]  flex flex-col gap-[28px] w-[310px] lg:w-[362.5px] h-[406px] text-white pl-[32px] lg:pl-[52px] pb-[32px] justify-end bg-[url('/images/img7.svg')] bg-cover bg-center`}
          >
            <div className="font-bold text-[32px] leading-[44px]">
              Networking
            </div>
          </div>
        </div>
        <div className="absolute top-[200px] -z-10 right-0">
          <Image
            src={"./images/gradients/rightGrad.svg"}
            height={616}
            width={616}
            alt="logo"
          />
        </div>
        <div className="absolute left-[50%] translate-x-[-50%] -z-10 bottom-[-250px]">
          <Image
            src={"./images/gradients/centerGrad.svg"}
            height={616}
            width={616}
            alt="logo"
          />
        </div>
      </div>
    </>
  );
};

export default SecSCards3;
