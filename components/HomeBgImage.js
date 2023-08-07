import React, { Fragment } from "react";
import Image from "next/image";
import Button from "./button/Button";
import { bannerTop } from "./all_list/BannerList";

const HomeBgImage = () => {
  return (
    <>
      <div className="relative ">
        {/* <div className="  grid grid-cols-12 ">
          <Image
            src="/images/dashimg1.png"
            alt="dash-imege1"
            // h-[95vh]
            className="hidden md:block md:col-span-6 col-span-12  "
            height={500}
            width={1000}
          />
          <Image
            src="/images/dashimg2.png"
            alt="dash-imege1"
            // h-[95vh]
            className=" col-span-12  md:col-span-6 "
            height={500}
            width={1000}
          />
        </div> */}

        {/* \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ */}
        {bannerTop.map((data, i) => {
          return (
            <Fragment key={i}>
              <div>
                <div className="  hidden md:block  ">
                  <div className=" flex">
                    {" "}
                    {data.image.map((image, i) => {
                      return (
                        <Fragment key={i}>
                          <div className=" relative h-[95vh] w-full overflow-hidden">
                            <Image
                              className=" bg-mint text-mint fill-current"
                              src={image.img}
                              //   height={1000}
                              //   width={1000}
                              layout="fill"
                              objectFit="cover"
                              alt={data.title}
                            />
                          </div>{" "}
                        </Fragment>
                      );
                    })}
                  </div>
                </div>
                <div className="md:hidden relative h-[70vh] w-full ">
                  <Image
                    src={data.showImg}
                    layout="fill"
                    objectFit="cover"
                    alt={data.title}
                  />
                </div>
              </div>

              <div className="absolute lg:top-[40vh] top-[28vh] w-full  ">
                <div className="text-center text-white ">
                  <h1 className="sm:text-[50px] text-3xl tracking-[0.05em] font-bold sm:mb-10 mb-3">
                    {data.title}
                    {/* The New Tree Flyer 2 */}
                  </h1>
                  <p className=" text-base font-bold">
                    {data.subTitle}
                    {/* With more grip, more go, and even lighter carbon footprint. */}
                  </p>
                </div>
                <div className="flex justify-center  lg:mt-40 mt-10">
                  {data.button.map((data, i) => {
                    return (
                      <Fragment key={i}>
                        <Button
                          name={data.btnName}
                          className={"w-full h-12 xl:w-[60%] mx-2"}
                        />
                      </Fragment>
                    );
                  })}
                </div>
                {/* <div className="flex justify-center  lg:mt-40 mt-10">
            <Button onClick={console.log("shop men")} name={"SHOP MEN"} />
            <Button onClick={console.log("shop women")} name={"SHOP WOMEN"} />
          </div> */}
              </div>
            </Fragment>
          );
        })}
      </div>
    </>
  );
};

export default HomeBgImage;
