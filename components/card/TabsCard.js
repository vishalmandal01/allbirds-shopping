import Image from "next/image";
import { Fragment, useEffect, useRef, useState } from "react";
import Button from "../button/Button";
import BorderButton from "../button/BorderButton";
import HomeTabsCard from "./image_card/HomeTabsCard";

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

  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.slideLeft - 500;
  };
  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollslideRight = slider.slideRight + 500;
  };

  return (
    <>
      <div className="xl:px-36 lg:mx-8 px-0">
        <h1 className="text-center font-bold lg:text-[32px] text-[25px] xl:my-14 my-6">
          Our Favourites
        </h1>
        <div className="relative ">
          <div className="flex items-center justify-center space-x-3  border-b-[3px] ">
            {tabsDatas.map((tab, idx) => {
              return (
                <button
                  key={idx}
                  ref={(el) => (tabsRef.current[idx] = el)}
                  className={`pt-2 pb-3 xl:px-16 md:px-4 px-2 md:text-base text-sm font-bold tracking-[1.5px]  `}
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
        <div className="lg:block hidden">
          <div className=" grid grid-cols-3 gap-6 my-8 ">
            {tabsDatas[activeTabIndex].dataList.map((data) => {
              return <HomeTabsCard data={data} />;
            })}
          </div>
        </div>
      </div>
      <div className=" lg:hidden my-8">
        <div
          id="slider"
          className=" scrollHori relative flex justify-center cursor-pointer overflow-y-scroll px-3 py-32"
        >
          {/* SCROLL ICON RIGHT*/}
          {/* <div className="z-10 w-screen absolute  ">
            <div className='flex justify-between'>

            <div className="  bg-blue-700">vishal mandal right</div>
            <div className="  bg-red-600/40">vishal mandal LEFT</div>
            </div>
          </div> */}
          {/* SCROLL ICON RIGHT*/}

          {tabsDatas[activeTabIndex].dataList.map((data) => {
            return <HomeTabsCard data={data} />;
          })}

          {/* SCROLL ICON  left*/}
          {/* <div className=' absolute block bg-red-600/40'>vishal mandal LEFT</div> */}
          {/* SCROLL ICON  left*/}
        </div>
      </div>
    </>
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
