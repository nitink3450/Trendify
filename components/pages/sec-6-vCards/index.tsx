import { vcards } from "@/data/vCard";
import Image from "next/image";
import React from "react";
import VCard from "../common/vCard";

const SecVCards6 = () => {
  return (
    <>
      <div className="relative flex flex-col gap-[64px] mt-[100px] justify-center items-center">
        <div className="flex flex-col gap-[16px] justify-center items-center">
          <div className="font-bold text-[32px] leading-[44px] text-center">
            Our Blog
          </div>
          <div className="w-[943px] font-bold text-[16px] leading-[26px] text-center opacity-60">
            Stay up to date with the latest trends and insights in web3
            marketing by reading our blog. Our team of experts share their
            knowledge and experience on a wide range of topics to help you
            understand the decentralized market better.
          </div>
        </div>
        <div className="flex flex-wrap gap-[32px] justify-center items-center">
          {vcards &&
            vcards.map((vcard: any, i: any) => {
              return <VCard key={i} vcard={vcard} />;
            })}
        </div>
        <div className="h-[58px] w-[180px] rounded-[70px] bg-[#2B2D36] flex justify-center items-center font-bold text-[16px] leading-[26px]">
          View All Blogs
        </div>
        <div className="absolute top-[-400px] -z-10 right-0">
          <Image
            src={"./images/gradients/rightGrad.svg"}
            height={616}
            width={616}
            alt="logo"
          />
        </div>
      </div>
    </>
  );
};

export default SecVCards6;
