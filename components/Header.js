import Link from "next/link";
import Image from "next/image";
import React, { useState, Fragment } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { MdClose } from "react-icons/md";
import {
  FaRegQuestionCircle,
  FaRegUser,
  FaShoppingCart,
  FaUser,
} from "react-icons/fa";
import DesktopDropMunu from "./menu/DesktopDropMunu";
import MobileSlidMenu from "./menu/MobileSlidMenu";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(true);
  const [dropdown, setDropdown] = useState([]);
  const [currentIndex, setCurrentIndex] = useState("");

  const lastIndex = menuList.slice(0, 5).length - 1;

  const [isSlidingOpen, setIsSlidingOpen] = useState(false);

  const toggleSliding = () => {
    setIsSlidingOpen(!isSlidingOpen);
  };

  // console.log(`index : ${currentIndex}`);
  console.log(dropdown);
  return (
    // h-[50px]
    <header className={` h-[50px]   sticky -top-12 z-10`}>
      <div className="bg-deepBlue h-11 text-center flex justify-center items-center  text-[12px] ">
        <p className="text-white font-[700]">
          {"Run On Fun. The Tree Flyer 2 Is Here. " + " "}
          <a href="/" className="underline underline-offset-1 ">
            Men's Sale
          </a>{" "}
          |{" "}
          <a href="/" className="underline underline-offset-1 ">
            Women's Sale
          </a>
          {/* <Link href="/"> Shop Men</Link> | <Link href="/">Shop Men</Link> */}
        </p>
      </div>

      <div className=" drop-shadow-sm bg-white ">
        {/* pr-[20px]  ml-[15px] xl:pr-[30px] py-[12px] xl:ml-8 */}
        <div className="grid grid-cols-12 items-center py-4">
          <div className="col-span-4 ">
            {/* --------------MENU ITEMS-------------- */}
            <div className="relative ">
              <ul className="hidden xl:flex font-semibold items-center text-sm tracking-widest  pl-4 ">
                {menuList.slice(0, 5).map((data, index) => {
                  return (
                    <Fragment key={data.id}>
                      <li
                        className={`cursor-pointer hover:underline mx-3  ${
                          index === lastIndex && "text-red-700"
                        }`}
                      >
                        {/* <Link href={`${data?.href}`}>{data.name}</Link> */}

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
                            <h1 className="">{data.name}</h1>
                          </Link>
                        ) : (
                          <div className="relative">
                            <div onClick={toggleSliding}>
                              <div
                                onClick={() => {
                                  setDropdown(data?.dropdown);
                                  setCurrentIndex(data.name);
                                }}
                              >
                                <h1 className="">{data.name}</h1>
                              </div>
                            </div>
                          </div>
                        )}
                      </li>
                    </Fragment>
                  );
                })}
                {/* ******************DESKTOP VIEW****************** */}
              </ul>
              <DesktopDropMunu
                isSlidingOpen={isSlidingOpen}
                dropdown={dropdown}
              />
            </div>

            {mobileMenu ? (
              <CiMenuBurger
                className="xl:hidden text-[20px] ml-[20px]"
                onClick={() => setMobileMenu(false)}
              />
            ) : (
              <div>
                <MdClose
                  className="xl:hidden text-[20px] ml-[20px] "
                  onClick={() => (setMobileMenu(true), setIsSlidingOpen(false))}
                />
              </div>
            )}
            {/* --------------MENU ITEMS-------------- */}
          </div>
          <div className="flex justify-center items-center col-span-4">
            <Link href={"/"}>
              <Image
                src="/images/Allbirds.png"
                width={100}
                height={100}
                alt="Allbirds"
              />
            </Link>
          </div>

          <div className="flex justify-end  col-span-4 font-semibold items-center text-sm tracking-widest mr-6">
            <ul className="hidden xl:flex space-x-6">
              {/* RIGHT MENU INDEX   */}
              {menuList.slice(5, 6).map((data, index) => {
                return (
                  <Fragment key={data.id}>
                    <li className="cursor-pointer hover:underline">
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
                          <h1 className="">{data.name}</h1>
                        </Link>
                      ) : (
                        <div className="relative">
                          <div onClick={toggleSliding}>
                            <div
                              onClick={() => {
                                setDropdown(data?.dropdown);
                                setCurrentIndex(data.name);
                              }}
                            >
                              <h1 className="">{data.name}</h1>
                            </div>
                          </div>
                        </div>
                      )}
                    </li>
                  </Fragment>
                );
              })}

              <li className="cursor-pointer hover:underline">
                <Link href={"../Map"}>STORES</Link>
              </li>
              <li className="">
                <Link href={""}>
                  <FaRegUser size={25} />
                </Link>
              </li>
              <li className="">
                <Link href={""}>
                  {" "}
                  <FaRegQuestionCircle size={25} />{" "}
                </Link>
              </li>
              <li className=" ">
                <Link href={""}>
                  <div className="flex ">
                    <FaShoppingCart className="relative" size={25} />
                    <div className="flex items-center justify-center text-center absolute ml-4 rounded-full bg-red-600 text-white h-4 w-4 text-[10px] font-thin">
                      <p className=" p-[2px] text-center">0</p>
                    </div>
                  </div>
                </Link>
              </li>
            </ul>
            <Link className="xl:hidden" href={""}>
              <div className="flex sm:mr-3 mr-1">
                <FaShoppingCart className="relative" size={25} />
                <div className="flex items-center justify-center text-center absolute ml-4 rounded-full bg-red-600 text-white h-4 w-4 text-[10px] font-thin">
                  <p className=" p-[2px] text-center">0</p>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* ------|---------||------------📱📱 MOBILE MEMU 📱📱------|---------||------------ */}

        {mobileMenu ? null : (
          // ******************MOBILE VIEW******************
          <MobileSlidMenu
            menuList={menuList}
            setDropdown={setDropdown}
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
            setIsSlidingOpen={setIsSlidingOpen}
            setMobileMenu={setMobileMenu}
            toggleSliding={toggleSliding}
            isSlidingOpen={isSlidingOpen}
            dropdown={dropdown}
          />
        )}
      </div>
    </header>
  );
};

export default Header;

const menuList = [
  {
    id: 1,
    name: "MEN",

    dropdown: [
      {
        id: 1,
        name: "SHOES",
        dropdown: [
          { id: 1, name: "Everyday Sneakers", link: "/Map" },
          { id: 2, name: "Active Shoe", link: "/" },
          { id: 3, name: "Slip-Ons", link: "/" },
          { id: 4, name: "Golf Shoes", link: "/" },
          { id: 5, name: "Hiking Shoes", link: "/" },
          { id: 6, name: "Sandals", link: "/" },
          { id: 7, name: "Water-Repellent Sneakers", link: "/" },
          { id: 8, name: "High Tops", link: "/" },
          { id: 9, name: "Sale", link: "/" },
          { id: 10, name: "Shop all", link: "/" },
        ],
      },
      {
        id: 2,
        name: "BEST SELLERS",
        dropdown: [
          { id: 1, name: "Tree Runner", link: "/" },
          { id: 2, name: "Tree Dasher 2", link: "/" },
          { id: 3, name: "Wool Runner", link: "/" },
          { id: 4, name: "Trail Runner SWT", link: "/" },
          { id: 5, name: "Tree Lounger", link: "/" },
          { id: 6, name: "Tree Dasher Relay", link: "/" },
          { id: 7, name: "Shop all", link: "/" },
        ],
      },
      {
        id: 3,
        name: "APPAREL & MORE",
        dropdown: [
          { id: 1, name: "Socks", link: "/" },
          { id: 2, name: "Underwear", link: "/" },
          { id: 3, name: "Tees", link: "/" },
          { id: 4, name: "Graphic Tees", link: "/" },
          { id: 5, name: "Sweatshirts & Sweatpants", link: "/" },
          { id: 6, name: "Hats", link: "/" },
          { id: 7, name: "Insoles", link: "/" },
          { id: 8, name: "Lace Kits", link: "/" },
          { id: 9, name: "Gift Cards", link: "/" },
          { id: 10, name: "Sale", link: "/" },
        ],
      },
      {
        id: 4,
        name: "FEATURED",
        dropdown: [
          {
            id: 1,
            ImgName: "The Tree Flyer 2",
            img: "/category/sho1.jpg",
            link: "/",
          },
          {
            id: 2,
            ImgName: "New to Sale",
            img: "/category/sho2.jpg",
            link: "/Map",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "WOMEN",

    dropdown: [
      {
        id: 1,
        name: "SHOES",
        dropdown: [
          { id: 1, name: "Everyday Sneakers", link: "/" },
          { id: 2, name: "Active Shoe", link: "/" },
          { id: 3, name: "Flats", link: "/" },
          { id: 4, name: "Slip-Ons", link: "/" },
          { id: 5, name: "Hiking Shoes", link: "/" },
          { id: 6, name: "Sandals", link: "/" },
          { id: 7, name: "Water-Repellent Sneakers", link: "/" },
          { id: 8, name: "High Tops", link: "/" },
          { id: 9, name: "Sale", link: "/" },
          { id: 10, name: "Shop all", link: "/" },
        ],
      },
      {
        id: 2,
        name: "BEST SELLERS",
        dropdown: [
          { id: 1, name: "Tree Runner", link: "/" },
          { id: 2, name: "Tree Breezer", link: "/" },
          { id: 3, name: "Tree Dasher 2", link: "/" },
          { id: 4, name: "Wool Runner", link: "/" },
          { id: 5, name: "Tree Lounger", link: "/" },
          { id: 6, name: "Trail Runner SWT", link: "/" },
          { id: 7, name: "Shop all", link: "/" },
        ],
      },
      {
        id: 3,
        name: "APPAREL & MORE",
        dropdown: [
          { id: 1, name: "Socks", link: "/" },
          { id: 2, name: "Underwear", link: "/" },
          { id: 3, name: "Tees", link: "/" },
          { id: 4, name: "Graphic Tees", link: "/" },
          { id: 5, name: "Sweatshirts & Sweatpants", link: "/" },
          { id: 6, name: "Hats", link: "/" },
          { id: 7, name: "Insoles", link: "/" },
          { id: 8, name: "Lace Kits", link: "/" },
          { id: 9, name: "Gift Cards", link: "/" },
          { id: 10, name: "Sale", link: "/" },
        ],
      },
      {
        id: 4,
        name: "FEATURED",
        dropdown: [
          {
            id: 1,
            ImgName: "The Tree Flyer 2",
            img: "/category/wosho1.jpg",
            link: "/",
          },
          {
            id: 2,
            ImgName: "The Tree Flyer 2",
            img: "/category/wosho2.jpg",
            link: "/",
          },
        ],
      },
    ],
  },
  { id: 3, name: "KIDS", href: "/" },
  {
    id: 4,
    name: "NEW ARRIVALS",

    dropdown: [
      {
        id: 1,
        name: "BAST FOR",
        dropdown: [
          { id: 1, name: "Cold Weather", link: "/" },
          { id: 2, name: "Running", link: "/" },
          { id: 3, name: "Adventure", link: "/" },
          { id: 4, name: "Traveling", link: "/" },
          { id: 5, name: "Relaxing", link: "/" },
          { id: 6, name: "Rainy Days", link: "/" },
        ],
      },
      {
        id: 2,
        name: "FEATURED",
        dropdown: [
          {
            id: 1,
            ImgName: "Men's New Arrivals",
            img: "/category/newsho1.jpg",
            link: "/",
          },
          {
            id: 2,
            ImgName: "Women's New Arrivals",
            img: "/category/newsho2.jpg",
            link: "/",
          },
        ],
      },
    ],
  },
  {
    id: 5,
    name: "SALE",
    dropdown: [
      {
        id: 1,
        name: "MEN'S SALE",
        dropdown: [
          { id: 1, name: "Sale Shoes", link: "/" },
          { id: 2, name: "Sale Apparel", link: "/" },
        ],
      },
      {
        id: 2,
        name: "WOMEN'S SALE",
        dropdown: [
          { id: 1, name: "Sale Shoes", link: "/" },
          { id: 2, name: "Sale Apparel", link: "/" },
        ],
      },
      {
        id: 3,
        name: "FEATURED",
        dropdown: [
          {
            id: 1,
            ImgName: "Men's New Arrivals",
            img: "/category/bg1.png",
            link: "/",
          },
          {
            id: 2,
            ImgName: "Women's New Arrivals",
            img: "/category/bg2.png",
            link: "/",
          },
        ],
      },
    ],
  },
  // RIGHT LIST 6-6
  {
    id: 6,
    name: "SUSTAINABILITY",
    dropdown: [
      {
        id: 1,
        name: "INITIATIVES",
        dropdown: [
          { id: 1, name: "Sale 1", link: "/" },
          { id: 2, name: "Sale 2", link: "/" },
        ],
      },

      {
        id: 2,
        name: "FEATURED",
        dropdown: [
          {
            id: 1,
            ImgName: "Our Sustainability Strategy",
            img: "/category/our1.jpg",
            link: "/",
          },
          {
            id: 2,
            ImgName: "Our Sustainability Strategy",
            img: "/category/our2.jpg",
            link: "/",
          },
        ],
      },
    ],
  },
];

// style={{translate:`translateX(-${scroll*100}%)`}}
// const [scroll, setScroll] = useState(0);
// const preview = () => {
// setScroll((scroll) => (scroll === 0 ? scroll.length - 1 : scroll - 1));
// };
// const next = () => {
// setScroll((scroll) => (scroll === scroll.length - 1 ? 0 : scroll + 1));
// };
