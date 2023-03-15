import Image from "next/image";
import React from "react";

const HCard = ({ ele }: any) => {
  return (
    <>
      <div className="flex flex-col justify-center lg:items-start items-center">
        <div className="gradText text-[55px] tracking-[-3px] lg:tracking-[-10px] leading-[56px] lg:text-[152px] lg:leading-[111px] text-center lg:text-start max-w-[1320px] pb-[50px] lg:ml-[10px] mb-[-60px]">
          {ele.head}
        </div>
        <div
          className={`hcardBgWO lg:hcardBgW h-fit lg:h-[510px] w-[95%] lg:w-[1274px] flex flex-col-reverse ${
            ele.reverse ? "lg:flex-row-reverse" : "lg:flex-row"
          }  justify-between items-center`}
        >
          <div className="flex flex-col gap-[35px] lg:p-[64px] p-[50px_16px] justify-center items-center lg:items-start max-w-[700px]">
            {ele.country && (
              <ul className="font-bold text-[32px] leading-[44px]">
                <li>🟧Israel</li>
                <li>🟨Ukraine</li>
                <li>🟩Russia</li>
              </ul>
            )}
            {ele.p1 && (
              <p className="font-bold text-[25px] leading-[34px] lg:text-[32px] lg:leading-[44px]">{ele.p1}</p>
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
          <div className=" h-fit lg:h-[476px] w-[95%] lg:w-[534px] bg-contain bg-center flex justify-center rounded-[50px] items-center mx-[16px] pt-[15px]">
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
