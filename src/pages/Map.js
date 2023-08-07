import React from "react";
import HomeTabsCard from "../../components/card/image_card/HomeTabsCard";
import NewBannerImageCard from "../../components/card/image_card/NewBannerImageCard";
import Image from "next/image";

const Map = () => {
  console.log("map");
  return (
    <div className="flex justify-center items-center flex-col mt-52 font-extrabold h-[500]">
      <h1 className="font-[100]">Map1</h1>
      <h1 className="font-[300]">Map3</h1>
      <h1 className="font-[400]">Map4</h1>
      <h1 className="font-[500]">Map5</h1>
      <h1 className="font-[700]">Map7</h1>
      <h1 className="font-[600]">Map6</h1>
      <h1 className="font-[100]">Map1</h1>
      <h1 className="font-[100]">Map1</h1>
      <h1 className="font-[100]">Map</h1>
      <h1 className="font-[100]">Map</h1>
      <h1>......</h1>
{/* <NewBannerImageCard /> */}
<Image src="/images/banner/banar1.png" height={1000} width={1000} alt="mmm"/>
      <h1>......</h1>
      <h1 className="font-thin">Font thin</h1>
      <h1 className="font-semibold">Font semibold</h1>
      <h1 className="">Font regular not hear</h1>
      <h1 className="font-medium">Font medium</h1>
      <h1 className="font-light">Font light</h1>
      <h1 className="font-extralight">Font extralight</h1>
      <h1 className="font-extrabold">Font extrabold</h1>
      <h1 className="font-bold">Font bold</h1>
      <h1 className="font-black">Font black</h1>
      <h1>Map</h1>
    </div>
  );
};

export default Map;
