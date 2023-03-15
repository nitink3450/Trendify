import Image from "next/image";
import React from "react";

const SecSchedule5 = () => {
  return (
    <>
      <div className="relative mt-[153px] flex flex-col justify-center items-center gap-[144px]">
        <div
          className={`callBg h-fit lg:h-[467px] w-full flex flex-col-reverse lg:flex-row justify-between items-center p-0 lg:p-[56px_139px_0px_139px] relative`}
        >
          <div className="flex flex-col gap-[20px] w-full p-[13.5px] lg:p-0 lg:w-[660px] ">
            <p className="font-bold text-[28px] leading-[38px] lg:text-[48px] lg:leading-[56px] text-center lg:text-start">
              Sounds like we will make a good match?
            </p>

            <p className="font-bold text-[16px] leading-[26px] lg:text-[32px] lg:leading-[44px] opacity-80 text-center lg:text-start">
              Leave a message and get a quote back
            </p>

            <div className="font-bold bg-[#00bbc4] h-[53px] lg:h-[85px] w-full lg:w-[398px] rounded-full flex justify-center items-center text-[16px] leading-[26px]">
              Schedule a Free Consultation Call
            </div>
          </div>
          <div className="absolute hidden lg:flex right-[100px] bottom-[-81px] h-fit w-fit justify-center items-center ">
            <Image
              src={`./images/ironMan.svg`}
              height={750}
              width={750}
              alt="logo"
            />
          </div>
          <div className="lg:hidden mt-[-100px] flex h-fit w-fit justify-center items-center ">
            <Image
              src={`./images/ironManMobile.svg`}
              height={750}
              width={750}
              alt="logo"
            />
          </div>
        </div>
        <div
          className={`hcardBgWO  h-fit lg:h-[510px] w-[95%] lg:w-[1272px] flex flex-col justify-center items-center gap-[16px] p-[56px_21px] border`}
        >
          <div className="text-center font-bold text-[29px] leading-[44px] lg:text-[32px] lg:leading-[44px]">
            Long-term Approach as partners and Investors in
          </div>
          <div className="text-center font-bold text-[16px] w-full lg:w-[1056px] leading-[26px] opacity-60">
            At our agency, we believe in building long-term partnerships. We are
            proud to have partnered with some of the most reputable companies
            and investors in the industry, and we are committed to helping you
            too, achieve success.
          </div>
          <div className="w-full lg:w-[1143px] text-center justify-center mt-[58px] flex flex-wrap gap-[33px] lg:gap-[124.5px]">
            {[...Array(9)].map((ele: any, i: any) => {
              return (
                <div
                  key={i}
                  className="h-[29px] w-[121px] bg-contain bg-center flex justify-center items-center opacity-20"
                >
                  <Image
                    src={`./icons/Logo-text.svg`}
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
