import Image from "next/image";
import React from "react";

const HCard = ({ ele }: any) => {
  return (
    <>
      <div className="flex flex-col">
        <div className="gradText max-w-[1320px] pb-[50px] ml-[10px] mb-[-60px]">
          {ele.head}
        </div>
        <div
          className={`hcardBg h-[510px] w-[1274px] flex ${
            ele.reverse ? "flex-row-reverse" : "flex-row"
          }  justify-between items-center`}
        >
          <div className="flex flex-col gap-[35px] p-[64px] max-w-[700px]">
            {ele.country && (
              <ul className="font-bold text-[32px] leading-[44px]">
                <li>🟧Israel</li>
                <li>🟨Ukraine</li>
                <li>🟩Russia</li>
              </ul>
            )}
            {ele.p1 && (
              <p className="font-bold text-[32px] leading-[44px]">{ele.p1}</p>
            )}
            {ele.p2 && (
              <p className="font-bold text-[16px] leading-[26px]">{ele.p2}</p>
            )}

            {ele.btn && (
              <div className="font-bold bg-[#00bbc4] h-[58px] w-[178px] rounded-full flex justify-center items-center text-[16px] leading-[26px]">
                Our Packages
              </div>
            )}
            {ele.p3 && (
              <div className="font-bold text-[16px] leading-[26px]">
                {ele.p3}
              </div>
            )}
          </div>
          <div className="h-[476px] w-[534px] bg-contain bg-center flex justify-center items-center mx-[16px]">
            <Image
              src={`./images/${ele.src}.svg`}
              height={951}
              width={615}
              alt="logo"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HCard;
