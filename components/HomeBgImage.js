import React from 'react'
import Image from "next/image";
import Button from './button/Button';

const HomeBgImage = () => {
  return (
    <>
     <div className="relative ">
        <div className="  grid grid-cols-12 ">
          <Image
            src={"/images/dashimg1.png"}
            alt="dash-imege1"
            // h-[95vh]
            className="hidden md:block md:col-span-6 col-span-12  "
            height={500}
            width={1000}
          />
          <Image
            src={"/images/dashimg2.png"}
            alt="dash-imege1"
            // h-[95vh]
            className=" col-span-12  md:col-span-6 "
            height={500}
            width={1000}
          />
        </div>
        <div className="absolute lg:top-[42vh] top-[28vh] w-full  ">
          <div className="text-center text-white font-extrabold text-base ">
            <h1 className="sm:text-[50px] text-3xl tracking-[0.05em] font-bold sm:mb-10 mb-3">The New Tree Flyer 2</h1>
            <p className=' text-base'>With more grip, more go, and even lighter carbon footprint.</p>
          </div>
          <div className="flex justify-center  lg:mt-44 mt-10">
            
            <Button onClick={console.log("shop men")} name={"SHOP MEN"} />
            <Button onClick={console.log("shop women")} name={"SHOP WOMEN"} />
          </div>
        </div>
      </div>
    </>
  )
}

export default HomeBgImage