import Image from "next/image";
import React from "react";

const VCard = ({ vcard }: any) => {
  return (
    <>
      <div className="vcardBg h-fit lg:h-[713px] w-[95%] lg:w-[403.33px]">
        <div className=" rounded-[30px]  h-fit w-fit ">
          <Image
            src={`./images/${vcard.src}.svg`}
            height={494}
            width={403.33}
            alt="logo"
          />
        </div>
        <div className="flex flex-col p-[16px] gap-[5px]">
          <p className="font-bold text-[14px] leading-[19px] opacity-30">
            12 june 2022
          </p>
          <div className="font-bold text-[26px] leading-[35px] lg:text-[30px] lg:leading-[44px]">
            Praesent purus convallis egestas scelerisque
          </div>
          <p className="font-bold text-[15px] leading-[26px] opacity-60">
            Blandit at sed quis sapien sit lacinia ornare. Ultrices vitae mi
            vulputate dignissim euismod ut...
          </p>
        </div>
      </div>
    </>
  );
};

export default VCard;
