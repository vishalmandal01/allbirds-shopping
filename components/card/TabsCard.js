import Image from "next/image";
import { Fragment, useEffect, useRef, useState } from "react";
import Button from "../button/Button";
import BorderButton from "../button/BorderButton";

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
    <div className="xl:px-36 md:px-8 px-0">
      <h1 className="text-center font-bold lg:text-[32px] text-[ 25px] xl:my-14 my-6">
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

      <div className=" grid grid-cols-3 gap-6 my-8">
        {/* SCROLL ICON RIGHT*/}
        {/* <div className=' absolute block bg-blue-700'>vishal mandal right</div> */}
        {/* SCROLL ICON RIGHT*/}
        {tabsDatas[activeTabIndex].dataList.map((data) => {
          return (
            <Fragment key={data.id}>
              <div className="cardBox bg-white shadow-xl">
                <div className=" overflow-hidden bg-cover bg-no-repeat">
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
                            <Fragment key={index}>
                              <div className=" lg:block hidden p-2  ">
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
                      className="imgbox  transition duration-500 ease-in-out  "
                      height={1000}
                      width={1000}
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
                  <div className="lg:hidden flex flex-col bg-red-500 h-28">
                    {data.btn.map((datas, index) => {
                      return (
                        <Fragment key={index}>
                          <div className=" ">
                            <BorderButton
                              name={datas.btnName}
                              onClick={datas.link}
                              className="w-full my-1"
                            />
                          </div>
                        </Fragment>
                      );
                    })}
                  </div>
                </div>
              </div>
            </Fragment>
          );
        })}
        {/* SCROLL ICON  left*/}
        {/* <div className=' absolute block bg-red-600/40'>vishal mandal LEFT</div> */}
        {/* SCROLL ICON  left*/}
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
