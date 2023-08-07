import { data } from 'autoprefixer'
import Image from 'next/image'
import React, { Fragment } from 'react'

const CollectionsCard = ({list,i}) => {
  return (
    <Fragment key={i}>

    <div className='flex '>


        {list.map((data,i)=>{return (
              <Fragment key={i}>
                <div className="m-3 bg-white w-[370px] shadow-2xl rounded-sm">
                  <div className="hidden md:block  bg-[#F5F5F5] overflow-hidden relative h-[370px] w-[370px] ">
                    <Image
                      className="scale-100 transition duration-500 ease-in-out s hover:scale-105"
                      src={data.img}
                      layout="fill"
                      objectFit="cover"
                      alt="bann1"
                    />
                  </div>
                  <div className="m-3">
                    <h3 className="text-[22px] font-bold">{data.title}</h3>
                    <p className="text-[16px] font-normal line-clamp-3">{data.subTitle}</p>
                  </div>
                </div>
              </Fragment>
            );})}
    </div>
    </Fragment>
  )
}

export default CollectionsCard