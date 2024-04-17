import React from 'react'
import { BrowseByCityCarousel, ExploreHosting } from './ui'

const BrowseByCity = () => {
  return (
    <div className="flex flex-col  gap-2  pb-60 md:pb-72">
      <div className="w-full h-[300px] md:h-[400px]">
        <div className=" w-[85%] sm:w-[65%] md:w-[75%] 2xl:w-[65%] flex flex-col mx-auto ">
          <h3 className="font-bold  font-AlegreyaSans text-2xl md:text-3xl">
            Browse By City
          </h3>
          <div className="mt-10 ">
            <BrowseByCityCarousel />
          </div>
        </div>
      </div>
      <div className="inline-block">
        <ExploreHosting />
      </div>
    </div>
  )
}

export default BrowseByCity
