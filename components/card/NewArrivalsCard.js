import Image from "next/image";
import React, { Fragment } from "react";
import {newArrivalsList} from "../all_list/NewArrivalsList"


const NewArrivalsCard = () => {
  return (
    <div className='my-14'>
      <h2 className="lg:text-[32px] text-[ 25px] font-bold ml-5 lg:ml-36 ">New Arrivals</h2>
      <div className="relative flex ">
        {/* {newArrivalsList?.map((items) => {
          return (
            <Fragment key={items.id}>
                <div className='bg-red-700 m-2 inline-block w-[100%]'>

              <Image src={items.img} height={1000} width={1000} className='w-screen'  />
              <h2 className="bg-yellow-300 w-[100%]">{items.title}</h2>
                </div>
            </Fragment>
          );
        })} */}
      </div>
<div className="w-[600px] bg-yellow-300">
    <div>
    <Image src="/category/shoes/shoe4.png" height={1000} width={1000} className="w-[100%]"   />
    </div>
</div>
    </div>
  );
};

export default NewArrivalsCard;
