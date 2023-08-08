import React, { Fragment, useState, useEffect } from "react";
import Link from "next/link";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { data } from "autoprefixer";
import Image from "next/image";

const MobileSlidMenu = ({
  menuList,

  setMobileMenu,
}) => {
  const [currentIndex, setCurrentIndex] = useState("");
  const [dropdown, setDropdown] = useState([]);
  const [dropdowns, setDropdowns] = useState([]);
  const [currentIndexs, setCurrentIndexs] = useState("");
  const [isSlidNext, setIsSlidingNext] = useState(false);
  const toggleSlid = () => {
    setIsSlidingNext(!isSlidNext);
  };
  const [isSlidingOpen, setIsSlidingOpen] = useState(false);

  const toggleSliding = () => {
    setIsSlidingOpen(!isSlidingOpen);
  };

  const lastIndex = menuList.slice(0, 5).length - 1;
  const itemIndex = dropdown.length - 1;

  return (
    <>
      <div className="relative">
        <ul className={`xl:hidden fixed min-w-full  h-[100vh] bg-white  `}>
          {menuList.map((data, index) => {
            return (
              <Fragment key={data.id}>
                <li
                  className={`cursor-pointer font-bold text-xs mt-2 ${
                    index === lastIndex && "text-red-700 text-xs"
                  }`}
                >
                  {data.href ? (
                    <Link
                      onClick={() => {
                        if (data?.href) {
                          setMobileMenu(true);
                        } else {
                          setMobileMenu(false);
                        }
                      }}
                      href={`${data?.href}`}
                    >
                      <div className="flex justify-between px-[32px] py-3  font-semibold">
                        <h1 className="text-sm">{data.name}</h1>
                        {data.dropdown && (
                          <MdKeyboardArrowRight className="text-[20px] text-black " />
                        )}
                      </div>
                    </Link>
                  ) : (
                    <div onClick={toggleSliding}>
                      <div
                        onClick={() => {
                          setDropdown(data?.dropdown);
                          setCurrentIndex(data.name);
                        }}
                        className=" flex justify-between px-[32px] py-3 font-semibold "
                      >
                        <h1 className="text-sm">{data.name}</h1>
                        {data.dropdown && (
                          <MdKeyboardArrowRight className="text-[20px] text-black " />
                        )}
                      </div>
                    </div>
                  )}
                  <hr />
                </li>
              </Fragment>
            );
          })}

         
          <li className="cursor-pointer font-bold text-xs mt-2">
            <Link onClick={() => setMobileMenu(true)} href={"../Map"}>
              <h1 className="text-sm px-[32px] py-3 font-semibold"> STORES</h1>
            </Link><hr/>
          </li>

          <li className="cursor-pointer font-bold text-xs mt-2">
            <Link onClick={() => setMobileMenu(true)} href={"../Map"}>
              <h1 className="text-sm px-[32px] py-3 font-semibold"> Account</h1>
            </Link><hr/>
          </li>

          <li className="cursor-pointer font-bold text-xs mt-2">
            <Link onClick={() => setMobileMenu(true)} href={"/"}>
              <h1 className="text-sm px-[32px] py-3 font-semibold"> Help</h1>
            </Link><hr/>
          </li>
          
          
        </ul>

        {/* =-=-=----==-=---SUB MENU LIST=-=-=----==-=--- */}

        <div
          className={`xl:hidden absolute min-w-full h-[100vh] bg-white ${
            isSlidingOpen
              ? "right-0 transition-all duration-500"
              : "-right-full transition-all duration-500"
          } `}
        >
          <div
            onClick={toggleSliding}
            className="xl:hidden grid grid-cols-3 items-center h-14 bg-[#F5F5F5] text-[20px] font-semibold"
          >
            <MdKeyboardArrowLeft className="ml-[32px]" />
            <h1 className=" text-sm text-center ">{currentIndex}</h1>
          </div>
          <hr />

          {dropdown.map((slidData, index, i) => {
            return (
              <Fragment key={i}>
                <div onClick={index === itemIndex ? null : toggleSlid}>
                  <div
                    onClick={() => {
                      setDropdowns(slidData?.dropdown);
                      index === itemIndex
                        ? setImageIndex(slidData?.dropdown)
                        : null;
                      setCurrentIndexs(slidData.name);
                    }}
                    className="flex justify-between items-center mx-[32px] text-[20px] font-semibold h-12"
                  >
                    <h1 className="text-sm">{slidData.name}</h1>
                    {index === itemIndex ? null : <MdKeyboardArrowRight />}
                  </div>
                  <hr />
                </div>
              </Fragment>
            );
          })}

          {/* MOBILE MENU IMAGE  */}

          <div className="flex">
            {dropdown.map((slidData, i) => {
              return (
                <Fragment key={i}>
                  {slidData.dropdown.map((item, i) => {
                    return (
                      <Fragment key={i}>
                        {item.name ? null : (
                          <div className="">
                            <div className="mx-[1px] w-[50vw] md:h-[50vh] h-[25vh] bg-green-600">
                              <Image
                                className="bg-mint text-mint fill-current"
                                src={item.img}
                                alt={item.ImgName}
                                width="1000"
                                height="1000"
                              />
                              <h2 className="text-center font-bold">
                                {item.ImgName}
                              </h2>
                            </div>
                          </div>
                        )}
                      </Fragment>
                    );
                  })}
                </Fragment>
              );
            })}
          </div>
        </div>

        {/* NEXT or LAST MENU LIST  */}

        <div
          className={`xl:hidden absolute min-w-full  h-[100vh] bg-white ${
            isSlidNext
              ? "right-0 transition-all duration-500"
              : "-right-full transition-all duration-500"
          } `}
        >
          <div
            onClick={toggleSlid}
            className="xl:hidden grid grid-cols-3  items-center h-14 bg-[#F5F5F5] text-[20px] font-bold"
          >
            <MdKeyboardArrowLeft className="ml-[32px]" />
            <h1 className=" text-sm text-center ">{currentIndexs}</h1>
          </div>
          <hr />

          <ul>
            {dropdowns.map((slidData) => {
              return (
                <Fragment key={slidData.id}>
                  <li>
                    <Link href={slidData.link}>
                      <div
                        onClick={() => (
                          setMobileMenu(true),
                          setIsSlidingOpen(false),
                          toggleSlid(false)
                        )}
                        className="text-sm font-bold my-4 ml-[32px]"
                      >
                        <h1>{slidData.name}</h1>
                      </div>
                    </Link>
                  </li>
                  <hr />
                </Fragment>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default MobileSlidMenu;
