import React, { Fragment } from "react";
import Button from "../../button/Button";
import BorderButton from "../../button/BorderButton";
import Image from "next/image";

const HomeTabsCard = ({ data }) => {
  // console.log("data", data);
  return (
    // lg:mx-0 mx-10 lg:w-auto w-96
    <div  className="cardBox bg-white  shadow-xl   lg:ml-auto ml-3 ">
      <div className="overflow-hidden bg-cover bg-no-repeat lg:w-auto md:w-[290px]  w-[340px] ">
        <div className="imgBtnBox relative  overflow-hidden bg-cover bg-no-repeat transition duration-500 ease-in-out  ">
          <div
            className={` z-50 btnBox   w-full  h-full ${
              "lg: bg-black/40"
                ? "hidden  absolute bg-black/20 "
                : "lg:block hidden "
            } {
                      
                    }}`}
          >
            <div className="flex flex-col  items-center justify-center h-full  ">
              {data.btn.map((datas, index) => {
                return (
                  <div key={index} className=" lg:block hidden p-2  ">
                    <Button name={datas.btnName} onClick={datas.link} />
                  </div>
                );
              })}
            </div>
          </div>

          <Image
            src={data.img}
            className="imgbox  transition duration-500 ease-in-out  "
            height={1000}
            width={1000}
            alt={data.title}
          />
        </div>
      </div>
      <div className="mx-6 my-2">
        <div className="border-b-[1px] border-gray-400 font-bold md:text-[22px] text-[18px] tracking-[0.5px] my-2">
          <h3 className="my-2">{data.title}</h3>
        </div>
        <div className="flex items-center  h-10 ">
          <Image
            src={data.categoryIcon}
            alt={data.category}
            height={30}
            width={30}
            className="w-[30px]"
          />
          <p className="font-normal text-sm pl-2">{data.category}</p>
        </div>
        <div className="lg:hidden flex flex-col justify-end   md:h-28 h-[99px]">
          <div className=" ">
            {data?.btn?.map((data,i) => {
              return (
               <Fragment key={i} > <BorderButton
               name={data.btnName}
               onClick={data.link}
               className="w-full  my-1 py-3 text-xs"
             /></Fragment>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeTabsCard;
