import Image from "next/image";
import React, { Fragment } from "react";
import { newArrivalsList } from "../all_list/NewArrivalsList";
import { data } from "autoprefixer";

const NewArrivalsCard = () => {
  return (
    <div className="mt-14">
      <h2 className="lg:text-[32px] text-[25px] font-bold ml-5 lg:ml-36 ">
        New Arrivals
      </h2>

      <div className="flex relative">
        {/* scrollHori */}
        <div className=" flex overflow-x-scroll  pb-20 px-20">
          {newArrivalsList.map((data) => {
            return (
              <Fragment key={data.id}>
                <div className="m-3 bg-white w-[450px] shadow-2xl rounded-sm">
                  <div className="hidden md:block  bg-[#F5F5F5] overflow-hidden relative h-[390px] w-[370px] ">
                    <Image
                      className="scale-100 transition duration-500 ease-in-out s hover:scale-105"
                      src={data.img}
                      layout="fill"
                      objectFit="cover"
                      alt="bann1"
                    />
                  </div>
                  <div className="m-3">
                    <h3 className="text-[22px] font-bold">{data.title}</h3>
                    <p className="text-[22px] ">{data.subTitle}</p>
                  </div>
                </div>
              </Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default NewArrivalsCard;
{
  /* <div className="absolute flex items-center">
            
            {imgList.map((data) => {
              return (
                <Image src={data.img} alt={data.img} height={200} width={200} className='w-[400px] p-3 ' />
              );
            })}
          </div> */
}
