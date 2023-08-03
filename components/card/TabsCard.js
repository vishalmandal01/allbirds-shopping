import Image from "next/image";
import { Fragment, useEffect, useRef, useState } from "react";
import Button from "../button/Button";

export function TabsCard() {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [tabUnderlineWidth, setTabUnderlineWidth] = useState(0);
  const [tabUnderlineLeft, setTabUnderlineLeft] = useState(0);

  const tabsRef = useRef([]);

  useEffect(() => {
    function setTabPosition() {
      const currentTab = tabsRef.current[activeTabIndex];
      setTabUnderlineLeft(currentTab?.offsetLeft ?? 0);
      setTabUnderlineWidth(currentTab?.clientWidth ?? 0);
    }

    setTabPosition();
    // window.addEventListener("resize", setTabPosition);

    // return () => window.removeEventListener("resize", setTabPosition);
  }, [activeTabIndex]);

  return (
    <div className="px-36">
      <h1 className="text-center font-bold text-[28px] my-14">
        Our Favourites
      </h1>

      <div className="relative">
        <div className="flex items-center justify-center space-x-3  border-b-[3px]">
          {tabsDatas.map((tab, idx) => {
            return (
              <button
                key={idx}
                ref={(el) => (tabsRef.current[idx] = el)}
                className="pt-2 pb-3 px-16 text-base font-bold tracking-[2px]"
                onClick={() => setActiveTabIndex(idx)}
              >
                <h4>{tab.title}</h4>
              </button>
            );
          })}
        </div>
        <span
          className="absolute -bottom-[0px] block h-[3px] bg-black transition-all duration-300"
          style={{ left: tabUnderlineLeft, width: tabUnderlineWidth }}
        />
      </div>
      {/* <div className="">
        <p>{tabsDatas[activeTabIndex].title}</p>
      </div> */}
      <div className=" grid grid-cols-3 gap-6 my-8">
        {tabsDatas[activeTabIndex].dataList.map((data) => {
          return (
            <Fragment key={data.id}>
              <div className="cardBox bg-white shadow-xl">
                {/* <Image
                className="scale-90 hover:scale-100 ease-in duration-200"
                  src={data.img}
                  alt={data.title}
                  height={400}
                  width={400}
                /> */}

                <div className="max-w-[395px] overflow-hidden bg-cover bg-no-repeat">
                  <div className="imgBtnBox relative max-w-[395px] overflow-hidden bg-cover bg-no-repeat transition duration-500 ease-in-out  ">
                    <div className=" z-50 btnBox  hidden absolute  w-full  h-[395px] bg-black/40 ">
                      <div className="flex flex-col items-center justify-center h-full">
                        {data.btn.map((datas, index) => {
                          return (
                            <Fragment key={index}>
                              <div className="  p-2 ">
                                <Button
                                  name={datas.btnName}
                                  onClick={datas.link}
                                />
                              </div>
                            </Fragment>
                          );
                        })}
                      </div>
                    </div>

                    <Image
                      src={data.img}
                      className="imgbox max-w-[395px] transition duration-500 ease-in-out  "
                      height={400}
                      width={400}
                      alt={data.title}
                    />

                  </div>
                </div>
                <div className="mx-6 my-4">
                  <div className="border-b-[1px] border-gray-400 font-bold text-[22px] tracking-[0.5px] my-2">
                    <h3 className="my-2">{data.title}</h3>
                  </div>
                  <div className="flex items-center ">
                    <Image
                      src={data.categoryIcon}
                      alt={data.category}
                      height={30}
                      width={30}
                      className="w-[30px]"
                    />
                    <p className="font-normal text-sm pl-2">{data.category}</p>
                  </div>
                </div>
              </div>
            </Fragment>
          );
        })}
      </div>
    </div>
  );
}

const tabsDatas = [
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
