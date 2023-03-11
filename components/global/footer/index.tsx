import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <>
      <div className="flex flex-col mt-[112px] h-[289px] w-full text-white font-Manrope font-bold text-[12px] p-[54.5px_120px]  gap-[27.3px] leading-[26px] bg-[#4b4b4b66]">
        <div className="flex flex-row gap-[55px]">
          <div className="w-[225px]">
            <div className="h-fit w-fit mb-[16px]">
              <Image
                src={"./icons/trendify-logo.svg"}
                height={27.7}
                width={117.96}
                alt="logo"
              />
            </div>
            <p className="">
              Velit semper posuere ultricies volutpat sed. Tincidunt cras mauris
              aenean aliquet neque.
            </p>
          </div>
          <ul className="opacity-70 flex flex-col items-start gap-[8px] w-[146px]">
            <li className="flex flex-row justify-center items-center gap-[8px]">
              <div className="h-[16px] w-[16px] ">
                <Image
                  src={"./icons/fb.svg"}
                  height={16}
                  width={16}
                  alt="logo"
                />
              </div>
              <span>Facebook</span>
            </li>
            <li className="flex flex-row justify-center items-center gap-[8px]">
              <div className="h-[16px] w-[16px] ">
                <Image
                  src={"./icons/Linkedin.svg"}
                  height={16}
                  width={16}
                  alt="logo"
                />
              </div>
              <span>Linkedin</span>
            </li>
            <li className="flex flex-row justify-center items-center gap-[8px]">
              <div className="h-[16px] w-[16px] ">
                <Image
                  src={"./icons/Twitter.svg"}
                  height={16}
                  width={16}
                  alt="logo"
                />
              </div>
              <span>Twitter</span>
            </li>
            <li className="flex flex-row justify-center items-center gap-[8px]">
              <div className="h-[16px] w-[16px]">
                <Image
                  src={"./icons/Instagram.svg"}
                  height={16}
                  width={16}
                  alt="logo"
                />
              </div>
              <span>Instagram</span>
            </li>
          </ul>
          <ul className="opacity-70 flex flex-col items-start gap-[4px] w-[146px]">
            <li>Enim sem</li>
            <li>Viverra velit</li>
            <li>Non sit</li>
            <li>Odio nunc</li>
            <li>Egestas neque</li>
          </ul>
          <ul className="opacity-70 flex flex-col items-start gap-[4px] w-[146px]">
            <li>At aliquam</li>
            <li>Enim duis</li>
            <li>Nascetur sem</li>
            <li>Sit suspendisse</li>
            <li>Amet viverra</li>
          </ul>
          <ul className="opacity-70 flex flex-col items-start gap-[4px]">
            <li>
              Commodo quis vestibulum convallis eget adipiscing id diam ut
              purus.
            </li>
            <li>Sodales amet fringilla quis elit sapien egestas iaculis.</li>
            <li>Etiam pellentesque non at sed magna id potenti.</li>
            <li>Aliquam dapibus volutpat egestas arcu.</li>
            <li>
              Dolor adipiscing id eu mauris pharetra viverra massa sagittis
              eget.
            </li>
          </ul>
        </div>
        <div className="text-[10px] opacity-50 ">
          Dolor adipiscing id eu mauris pharetra viverra massa sagittis eget.
        </div>
      </div>
    </>
  );
};

export default Footer;
