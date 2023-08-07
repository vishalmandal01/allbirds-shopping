import React, { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";

const DesktopDropMunu = ({ isSlidingOpen, dropdown }) => {
  return (
    <>
      <ul
        className={`4xl:hidden flex  items-start justify-center absolute  w-[98.9vw] mx-auto py-10 bg-white  ${
          isSlidingOpen
            ? "top-[40px] transition-all duration-500 opacity-100"
            : "-top-[100vh] transition-all duration-500 opacity-20"
        }`}
      >
        {dropdown.map((data) => {
          return (
            <Fragment key={data.id}>
              <li>
                <div className="mr-14 ">
                  <div className=" font-semibold text-lg tracking-widest pb-8">
                    <h1>{data.name}</h1>
                  </div>
                  <div className="tracking-widest ">
                    {data.dropdown.map((data) => (
                      <Fragment key={data.id}>
                        {data?.name ? (
                          <Link href={data.link}>
                            <h1 className="py-1">{data.name}</h1>
                          </Link>
                        ) : (
                          <Link href={data.link}>
                            <div className="pb-2  relative">
                              <Image
                                src={data.img}
                                alt={data.ImgName}
                                height={200}
                                width={400}
                              />
                              <span className=" bottom-5 left-5 text-white font-bold text-lg absolute">
                                {data.ImgName}
                              </span>

                              {/* <p className="absolute  bg-red-700  text-white font-bold  ">
                              {data.ImgName}
                            </p> */}
                            </div>
                          </Link>
                        )}
                      </Fragment>
                    ))}
                  </div>
                </div>
              </li>
            </Fragment>
          );
        })}
      </ul>
    </>
  );
};

export default DesktopDropMunu;
