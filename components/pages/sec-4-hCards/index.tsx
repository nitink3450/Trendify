import { hcards } from "@/data/hCard";
import React from "react";
import HCard from "../common/hCard";

const SecHCards4 = () => {
  return (
    <>
      <div className=" flex flex-col gap-[150px] justify-center items-center mt-[100px]">
        {hcards &&
          hcards.map((ele: any, i: any) => {
            return <HCard key={i} ele={ele} />;
          })}
      </div>
    </>
  );
};

export default SecHCards4;
