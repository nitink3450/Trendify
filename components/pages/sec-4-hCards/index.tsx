import { hcards } from "@/data/hCard";
import Image from "next/image";
import React from "react";
import HCard from "../common/hCard";

const SecHCards4 = () => {
  return (
    <>
      <div className="relative flex flex-col lg:gap-[150px] gap-[64px] justify-center items-center mt-[100px]">
        {hcards &&
          hcards.map((ele: any, i: any) => {
            return <HCard key={i} ele={ele} />;
          })}
        <div className="absolute top-[-150px] -z-10 right-0">
          <Image
            src={"./images/gradients/rightGrad.svg"}
            height={616}
            width={616}
            alt="logo"
          />
        </div>
        <div className="absolute top-[1250px] -z-10 right-0">
          <Image
            src={"./images/gradients/rightGrad.svg"}
            height={616}
            width={616}
            alt="logo"
          />
        </div>
        <div className="absolute top-[450px] -z-10 left-0">
          <Image
            src={"./images/gradients/leftGrad.svg"}
            height={616}
            width={616}
            alt="logo"
          />
        </div>
      </div>
    </>
  );
};

export default SecHCards4;
