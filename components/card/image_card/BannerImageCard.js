import React from "react";
import Image from "next/image";
import BorderButton from "../../button/BorderButton";

const BannerImageCard = () => {
  return (
    <>
      <div className="mt-20 mb-12">
        <div className="hidden md:block relative h-[560px] w-full">
          <Image
            src="/images/banar1.jpg"
            layout="fill"
            objectFit="cover"
            alt="bann1"
          />
        </div>

        <div className="md:hidden relative h-[590px] w-full">
          <Image
            src="/images/banarA1.jpg"
            layout="fill"
            objectFit="cover"
            alt="bann1"
          />
        </div>
      </div>

      <div className="flex flex-col items-center justify-center text-center">
        <div className="lg:max-w-[50%] max-w-[90%] space-y-8">
          <h2 className="lg:text-[32px] text-[25px] font-bold">Walk On Rainbows</h2>
          <p className="text-lg font-semibold tracking-[1.0px]">
            Designer Olivia Rubin brings her signature pastels to this limited
            edition Riser.
          </p>
          <BorderButton name={"SHOP NOW"} className={"w-full h-10 xl:w-[60%]"} />
        </div>
      </div>
    </>
  );
};

export default BannerImageCard;
