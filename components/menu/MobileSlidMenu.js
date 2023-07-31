import React, { Fragment, useState } from "react";
import Link from "next/link";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const MobileSlidMenu = ({ menuList, toggleSliding,isSlidingOpen, dropdown ,setDropdown }) => {
    
  const [currentIndex, setCurrentIndex] = useState("");
  const [dropdowns, setDropdowns] = useState([]);
  const [currentIndexs, setCurrentIndexs] = useState("");
  const [isSlidNext, setIsSlidingNext] = useState(false);
  const toggleSlid = () => {
    setIsSlidingNext(!isSlidNext);
  };
  const lastIndex = menuList.length - 1;
  return (
    <>
      <div className="relative">
        <ul className={`xl:hidden absolute min-w-full  h-[100vh] bg-white `}>
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
                      <div className="flex justify-between px-[32px] py-4  font-semibold">
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
                        className=" flex justify-between px-[32px] py-4 font-semibold "
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

          <li className="cursor-pointer hover:underline font-bold text-xs px-[32px] py-4">
            <p className="">SUSTAINABILITY</p>
            <hr />
          </li>
          <li className="cursor-pointer hover:underline font-bold text-xs">
            <Link onClick={() => setMobileMenu(true)} href={"../Map"}>
              STORES
            </Link>
          </li>
          <li className="text-sm">Account</li>
          <li className="text-sm">Help</li>
        </ul>

        {/* =-=-=----==-=---SUB MENU LIST=-=-=----==-=--- */}

        <div
          className={`xl:hidden absolute min-w-full h-[100vh] bg-yellow-400 ${
            isSlidingOpen
              ? "right-0 transition-all duration-500"
              : "-right-full transition-all duration-500"
          } `}
        >
          <div
            onClick={toggleSliding}
            className="grid grid-cols-3 items-center h-14 bg-[#F5F5F5] text-[20px] font-semibold"
          >
            <MdKeyboardArrowLeft className="ml-[32px]" />
            <h1 className=" text-sm text-center ">{currentIndex}</h1>
          </div>
          <hr />

          <ul>
            {dropdown.map((slidData) => {
              return (
                <Fragment key={slidData.id}>
                  <div onClick={toggleSlid}>
                    <div
                      onClick={() => {
                        setDropdowns(slidData?.dropdown);
                        setCurrentIndexs(slidData.name);
                      }}
                      className="flex justify-between items-center mx-[32px] text-[20px] font-semibold h-12"
                    >
                      <h1 className="text-sm">{slidData.name}</h1>
                      <MdKeyboardArrowRight />
                    </div>
                    <hr />
                  </div>
                </Fragment>
              );
            })}
            {/* {dropdowns.map((slidData) => {
                  return (
                    <Fragment key={slidData.id}>
                      {slidData?.name ? (
                                  <h1 className="space-y-10">{slidData.name}</h1>
                                ) : (
                                  <div className="p-2 ">
                                    <p className=" top-12 text-white font-bold right-[30%]">
                                      {slidData.ImgName}
                                    </p>
                                    <Image
                                      className="h-24 w-fit"
                                      src={slidData.img}
                                      alt={slidData.ImgName}
                                      height={100}
                                      width={100}
                                    />
                                  </div>
                                )}
                    
                    </Fragment>
                  );
                })} */}
          </ul>
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
            className="grid grid-cols-3  items-center h-14 bg-[#F5F5F5] text-[20px] font-bold"
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
