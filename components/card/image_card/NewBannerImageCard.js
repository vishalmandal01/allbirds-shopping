import React, { Fragment } from "react";
import { bannerThardList } from "../../all_list/BannerList";
import BorderButton from "../../button/BorderButton";
import Image from "next/image";

const NewBannerImageCard = ({list}) => {
  return (
    <>
      {list.map((items, i) => {
        return (
          <Fragment key={i}>
            {/* <div className="mt-20 mb-12">
              <div className="hidden md:block relative h-[560px] w-full">
                {items.image.map((image) => (
                  <Image
                    src={image.img}
                    layout="fill"
                    objectFit="cover"
                    alt={items.title}
                  />
                ))}
              </div>
              <div className="md:hidden relative h-[590px] w-full">
                <Image
                  src={items.showImg}
                  layout="fill"
                  objectFit="cover"
                  alt="bann1"
                />
              </div>
            </div> */}
            <div> 
                <div className="  hidden md:block  mb-10">
                    <div className=" flex">

              {items.image.map((image,i) => {return(<Fragment key={i}> <div className=" relative h-[560px] w-full overflow-hidden">
                    <Image
                      className=" bg-mint text-mint fill-current"
                      src={image.img}
                      //   height={1000}
                      //   width={1000}
                      layout="fill"
                      objectFit="cover"
                      alt={items.title}
                      />
                  </div></Fragment>)})}
              </div>
                </div>
              <div className="md:hidden relative h-[460px] w-full mb-10">
                <Image
                  src={items.showImg}
                  layout="fill"
                  objectFit="cover"
                  alt={items.title}
                />
              </div>
            </div>

            <div className="flex flex-col items-center justify-center text-center">
              <div className="lg:max-w-[50%] max-w-[90%] space-y-8 ">
                <h2 className="lg:text-[32px] text-[25px] font-bold">
                  {items.title}
                </h2>

                <p className="text-lg font-semibold tracking-[1.0px]">
                  {items.subTitle}
                </p>
                <div className="flex justify-center mx-8">
                 
                  {items.button.map((data,i) => {return(<Fragment key={i} ><BorderButton
                      name={data.btnName}
                      className={"w-full h-12 xl:w-[60%] mx-2"}
                    /></Fragment>)})}
                </div>
              </div>
            </div>
          </Fragment>
        );
      })}
    </>
  );
};

export default NewBannerImageCard;
