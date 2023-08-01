import React, { Fragment, useState, useEffect, useRef } from "react";
import Image from "next/image";

const FavouritesCard = () => {
  const btnRef = useRef();
  useEffect(() => {
    btnRef.current.focus();
  }, []);

  return (
    <div>
      <h1 className="text-center font-bold text-[28px] my-14">
        Our Favourites
      </h1>

      <div className="mx-0 lg:mx-20 xl:mx-40 flex flex-col items-center ">
        <div className="border-b-2 border-gray-300 flex w-full gap-14 justify-center">
          {favouriteList.map((datas, index) => {
            return (
              <Fragment key={index}>
                <div className="">
                  <button
                    key={index}
                    ref={index === 0 ? btnRef : null}
                    className={` px-12 md: xl:h-16  ${
                      index === 0
                        ? "focus:border-b-[6px] focus:border-black active:bg-red-700"
                        : null
                    }`}
                  >
                    <h4
                      className={`font-bold text-lg tracking-[2px]  hover:text-black ${
                        index === 0 ? "hover:text-black" : "text-black/70"
                      }`}
                    >
                      {datas.title}
                    </h4>
                  </button>
                </div>
              </Fragment>
            );
          })}
        </div>
        <div className=''>bottom</div>
        {/* {favouriteList.dataList.map((data) => {
          return (
            <Fragment key={data}>
              
              <div className="flex flex-row" ><h1>{data.title}</h1></div>
              
            </Fragment>
          );
        })} */}
      </div>
    </div>
  );
};

export default FavouritesCard;

const favouriteList = [
  {
    id: 1,
    title: "FOR EVERYDAY",
    dataList: [
      {
        id: 1,
        img: "/category/fav1.jpg",
        categoryIcon: "/category/icon/Tree.png",
        title: "Tree Runner",
        category: "Light and Breezy Trainer",
        btn: [
          { btnName: "SHOP MEN", link: "/" },
          { btnName: "SHOP WOMEN", link: "/" },
        ],
      },
      {
        id: 2,
        img: "/category/fav2.jpg",
        categoryIcon: "/category/icon/Tree.png",
        title: "Tree Breezer Point",
        category: "Comfy, All-day Flat",
        btn: [{ btnName: "SHOP NOW", link: "/" }],
      },
      {
        id: 3,
        img: "/category/fav3.jpg",
        categoryIcon: "/category/icon/Tree.png",
        title: "Tree Lounger",
        category: "Ultralight, Comfy Slip-on",
        btn: [
          { btnName: "SHOP MEN", link: "/" },
          { btnName: "SHOP WOMEN", link: "/" },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "FOR RUNNING",
    dataList: [
      {
        id: 1,
        img: "/category/fav4.jpg",
        categoryIcon: "/category/icon/Tree.png",
        title: "Tree Dasher 2",
        category: "Comfy, Breezy, Everyday Runs",
        btn: [
          { btnName: "SHOP MEN", link: "/" },
          { btnName: "SHOP WOMEN", link: "/" },
        ],
      },
      {
        id: 2,
        img: "/category/fav5.jpg",
        categoryIcon: "/category/icon/Tree.png",
        title: "Tree Flyer 2",
        category: "Springy, Grippy Running Shoe",
        btn: [
          { btnName: "SHOP MEN", link: "/" },
          { btnName: "SHOP WOMEN", link: "/" },
        ],
      },
      {
        id: 3,
        img: "/category/fav6.jpg",
        categoryIcon: "/category/icon/Trino.png",
        title: "Trail Runner SWT",
        category: "Durable Design, High-Performing Comfort",
        btn: [
          { btnName: "SHOP MEN", link: "/" },
          { btnName: "SHOP WOMEN", link: "/" },
        ],
      },
    ],
  },
  {
    id: 3,
    title: "FOR TRAVEL",
    dataList: [
      {
        id: 1,
        img: "/category/fav7.jpg",
        categoryIcon: "/category/icon/Tree.png",
        title: "Tree Skipper",
        category: "Lightweight, Classic style",
        btn: [
          { btnName: "SHOP MEN", link: "/" },
          { btnName: "SHOP WOMEN", link: "/" },
        ],
      },
      {
        id: 2,
        img: "/category/fav8.jpg",
        categoryIcon: "/category/icon/TrinoXO.png",
        title: "Lightweight, Classic style",
        category: "Everyday Organic Cotton T-Shirt",
        btn: [{ btnName: "SHOP NOW", link: "/" }],
      },
      {
        id: 3,
        img: "/category/fav9.jpg",
        categoryIcon: "/category/icon/Tree.png",
        title: "Tree Piper",
        category: "Classic Low Top Trainer",
        btn: [
          { btnName: "SHOP MEN", link: "/" },
          { btnName: "SHOP WOMEN", link: "/" },
        ],
      },
    ],
  },
];

{
  /* <ul>
{favouriteList.map((data) => {
  return (
    <Fragment key={data.id}>
      <li>
        <div>
          {data.title}
          {data.dataList.map((data) => {
            return (
              <Fragment key={data.id}>
                <li>
                  <Image
                    src={data.img}
                    alt="dash-imege1"
                    height={100}
                    width={50}
                  />{" "}
                  <Image
                    src={data.categoryIcon}
                    alt="dash-imege1"
                    height={100}
                    width={50}
                  />
                </li>
              </Fragment>
            );
          })}
        </div>
      </li>
    </Fragment>
  );
})}
</ul> */
}
