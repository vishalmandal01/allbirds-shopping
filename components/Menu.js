import Link from "next/link";
import React, { Fragment } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { MdClose, MdKeyboardArrowRight } from "react-icons/md";

const menu = ({ mobileMenu, setMobileMenu }) => {
  const lastIndex = menuList.length - 1;
  return (
    <>
      <ul className="hidden  xl:flex gap-4 font-semibold text-sm tracking-widest ml-[30px]">
        {menuList.map((data, index) => {
          return (
            <Fragment key={data.id}>
              <li
                className={`cursor-pointer hover:underline ${
                  index === lastIndex && "text-red-700"
                }`}
              >
                <Link href={`${data?.href}`}>{data.name}</Link>
              </li>
            </Fragment>
          );
        })}
      </ul>

      {mobileMenu ? (
        <CiMenuBurger
          className="xl:hidden text-[20px] ml-[20px] xl:ml-[30px]"
          onClick={() => setMobileMenu(false)}
        />
      ) : (
        <div>
          <MdClose
            className="xl:hidden ml-[20px] xl:ml-[30px] text-[20px]"
            onClick={() => setMobileMenu(true)}
          />
          {/* <ul className="xl:hidden absolute min-w-full top-14 h-[100vh] bg-white">
            {menuList.map((data, index) => {
              return (
                <Fragment key={data.id}>
                  <li
                    className={`cursor-pointer hover:underline font-bold text-xs py-3 ${
                      index === lastIndex && "text-red-700 text-xs"
                    }`}
                  >
                    <Link href={`${data?.href}`}>
                      <div className="flex justify-between pl-[32px]">
                        {data.name}
                        <MdKeyboardArrowRight className="text-[20px] text-black mr-7" />
                      </div>
                    </Link>
                  </li>
                    <hr />
                </Fragment>
              );
            })}

            <li className="cursor-pointer hover:underline font-bold text-xs ">
              <p className="pl-[32px]">SUSTAINABILITY</p>
              <hr/>
            </li>
            <li className="cursor-pointer hover:underline font-bold text-xs">
              <Link href={"../Map"}>STORES</Link>
            </li>
            <li className="text-sm">Account</li>
            <li className="text-sm">Help</li>
          </ul> */}
        </div>
      )}
    </>
  );
};

export default menu;

const menuList = [
  { id: 1, name: "MEN", href: "" },
  { id: 2, name: "WOMEN", href: "" },
  { id: 3, name: "KIDS", href: "/" },
  { id: 4, name: "NEW ARRIVALS", href: "" },
  { id: 5, name: "SALE", href: "" },
];

const subMnuTitleList = [
  { id: 1, title: "SHOES" },
  { id: 2, title: "SHOP BY ACTIVITY" },
  { id: 3, title: "APPAREL & MORE" },
  { id: 4, title: "REATURED" },
];

{
  /* <div className="flex justify-between relative items-center drop-shadow-xl bg-white px-[9px] py-[10px]">
        <MdClear/>
        <h1 className="font-bold text-2xl"> allbirds </h1>
        <MdOutlineShoppingCart size={30}/>
      </div> */
}
