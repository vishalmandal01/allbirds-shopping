import React from 'react'
import CollectionsCard from './image_card/CollectionsCard'

const CollectionScrollCard = ({title,list}) => {
  return (
    <div>
            <h2 className="lg:text-[32px] text-[25px] font-bold ml-5 lg:ml-36 mt-16 lg:mt-20">
            {title}
            </h2>
            <div>
              <CollectionsCard list={list}/>
            </div>
          </div>
  )
}

export default CollectionScrollCard