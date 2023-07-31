import React, { Fragment } from "react";
import Image from "next/image";

const DesktopDropMunu = ({ isSlidingOpen, dropdown }) => {
  return (
    <>
      <ul
        className={`4xl:hidden inline-flex items-start justify-center absolute px-48  h-max bg-white  ${
          isSlidingOpen
            ? "top-[38px] transition-all duration-500"
            : "-top-[150vh] transition-all duration-500 "
        }`}
      >
        {dropdown.map((data) => {
          return (
            <Fragment key={data.id}>
              <li>
                <div className="mr-14 ">
                  <div className="py-8 font-semibold text-lg tracking-widest">
                    <h1>{data.name}</h1>
                  </div>
                  <div className="tracking-widest ">
                    {data.dropdown.map((data) => (
                      <Fragment key={data.id}>
                        {data?.name ? (
                          <h1 className="py-1">{data.name}</h1>
                        ) : (
                          <div className="p-2 relative ">
                            <p className="absolute top-12 text-white font-bold right-[30%]">
                              {data.ImgName}
                            </p>
                            <Image
                              className="h-fit w-80"
                              src={data.img}
                              alt={data.ImgName}
                              height={100}
                              width={100}
                            />
                          </div>
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
