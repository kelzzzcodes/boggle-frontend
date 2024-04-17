import React from 'react'
import { BrowseByMakeCarousel } from './ui'

const BrowseByMake = () => {
  return (
    <div className="w-full h-[400px] mt-72 lg:mt-96 2xl:mt-40">
      <div className=" w-[85%] sm:w-[65%] md:w-[75%] 2xl:w-[65%] flex flex-col mx-auto ">
        <h3 className="font-bold mt-8 font-AlegreyaSans text-2xl md:text-3xl">
          Browse By Make
        </h3>

        <div className=" mt-10 ">
          <BrowseByMakeCarousel />
        </div>
      </div>
    </div>
  )
}

export default BrowseByMake
