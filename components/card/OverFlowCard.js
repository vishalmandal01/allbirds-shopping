import Image from "next/image";
import Link from "next/link";
import React, { useState, Fragment } from "react";

const OverFlowCard = ({ data }) => {
  const [isActive, setIsActive] = useState(null);
  const toggleIsActive = (i) => {
    setIsActive(i);
  };

  const [isHovering, setIsHovered] = useState(false);
  const onMouseEnter = () => setIsHovered(true);
  const onMouseLeave = () => setIsHovered(false);

  console.log("click index", isActive);
  return (
    <div>
      {/* HOVER SHOW CARD  */}
      {data.map((item, i) => {
        return (
          <Fragment key={i}>
            <div
              className=" hover:shadow-[0_0px_20px_rgba(0,0,0,0.25)] rounded-sm w-[380px] "
              // onMouseEnter={onMouseEnter}
              // onMouseLeave={onMouseLeave}
            >
              {isHovering ? (
                <div className="m-[10px]  ">
                  <div className="h-[200px]  ">
                    <Image
                      src="/category/shoes/sShow2.jpg"
                      layout="fill"
                      objectFit="cover"
                      alt="a"
                    />
                  </div>
                  <h1>Hide</h1>
                </div>
              ) : (
                <div className="p-5 red  h-[450px]">
                  {/* CENTER CARD */}
                  <div className="h-[290px] relative overflow-hidden">
                    <Image
                      src="/category/shoes/sShow1.jpg"
                      layout="fill"
                      objectFit="cover"
                      alt="a"
                    />
                  </div>
                  <div className="my-[2px]">
                    <p className="font-bold text-sm">
                      {item.title}
                      {/* Men's Trail Runners SWT */}
                    </p>
                    <p className="font-normal text-sm">
                      {/* {item.image.map((item, i) => {
                        return <Fragment key={i}> {item.subtitle}</Fragment>;
                      })} */}
                      Honey Rust (Forage Tan Sole)
                    </p>
                  </div>
                  <div>
                    <p className="text-red-800 text-sm">
                      $220
                      <span className="text-gray-500 line-through px-1">
                        $250
                      </span>
                    </p>
                    <div className="flex gap-2">
                      {/* {item.Image.map((image, i) => {
                        return (
                          <Fragment key={i}>
                            <div>image</div>
                          </Fragment>
                        );
                      })} */}
                      {item.image.slice(0, 6).map((item, i) => {
                        return (
                          <Fragment key={i}>
                            <div
                              onClick={() => {
                                toggleIsActive(i);
                              }}
                              className="hover:border  border border-transparent hover:border-gray-600 overflow-hidden relative rounded-sm "
                            >
                              <Image
                                src={item.img}
                                alt={item.subtitle}
                                height={40}
                                width={50}
                              />
                            </div>
                          </Fragment>
                        );
                      })}
                    </div>
                  </div>

                  {/* CENTER CARD END*/}
                </div>
              )}
            </div>
          </Fragment>
        );
      })}
    </div>
  );
};

export default OverFlowCard;
