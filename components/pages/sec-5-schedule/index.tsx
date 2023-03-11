import Image from "next/image";
import React from "react";

const SecSchedule5 = () => {
  return (
    <>
      <div className="relative mt-[153px] flex flex-col justify-center items-center gap-[144px]">
        <div
          className={`callBg h-[467px]  w-full flex flex-row justify-between items-center overflow-hidden p-[56px_139px_0px_139px]`}
        >
          <div className="flex flex-col gap-[20px] w-[660px] ">
            <p className="font-bold text-[48px] leading-[56px]">
              Sounds like we ll make a good match?
            </p>

            <p className="font-bold text-[32px] leading-[44px] opacity-80">
              Leave a message and get a quote back
            </p>

            <div className="font-bold bg-[#00bbc4] h-[85px] w-[398px] rounded-full flex justify-center items-center text-[16px] leading-[26px]">
              Schedule a Free Consultation Call
            </div>
          </div>
          <div className="h-[442px] w-[586px] bg-contain bg-center flex justify-center items-center mx-[16px]">
            <Image
              src={`./images/handMobile.svg`}
              height={442}
              width={586}
              alt="logo"
            />
          </div>
        </div>
        <div
          className={`hcardBg  h-[510px] w-[1272px] flex flex-col justify-center items-center gap-[16px]`}
        >
          <div className="text-center font-bold text-[32px] leading-[44px]">
            Long-term Approach as partners and Investors in
          </div>
          <div className="text-center font-bold text-[16px] w-[1056px] leading-[26px] opacity-60">
            At our agency, we believe in building long-term partnerships. We are
            proud to have partnered with some of the most reputable companies
            and investors in the industry, and we are committed to helping you
            too, achieve success.
          </div>
          <div className="w-[1143px] text-center justify-center mt-[58px] flex flex-wrap gap-[124.5px]">
            {[...Array(9)].map((ele: any, i: any) => {
              return (
                <div
                  key={i}
                  className="h-[29px] w-[121px] bg-contain bg-center flex justify-center items-center opacity-20"
                >
                  <Image
                    src={`./icons/logo-text.svg`}
                    height={29}
                    width={121}
                    alt="logo"
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="absolute left-[100px] top-[-300px]">
          <Image
            src={"./images/gradients/centerGradD.svg"}
            height={616}
            width={616}
            alt="logo"
          />
        </div>
      </div>
    </>
  );
};

export default SecSchedule5;
