import React from 'react'

const WhatIsBoggle = () => {
  return (
    <div className="w-full md:pb-20">
      <div className="flex flex-col-reverse gap-10 md:flex-row h-[800px] p-4  ">
        <div className="flex flex-1 flex-col gap-10 my-auto mx-auto md:text-center p-2">
          <h3 className=" font-AlegreyaSans font-bold text-xl md:text-3xl">
            What Is <span className="text-[#12B7D2]">Boggle</span>?
          </h3>
          <p className="md:w-[75%] flex mx-auto font-AlegreyaSans text-[16px] md:text-xl font-medium">
            Boggle is a pioneering car-sharing marketplace that provides
            flexible options for both short-term and long-term vehicle ownership
            and car purchases. Our mission is to simplify the way people access
            and own cars while reimagining the traditional car-buying
            experience.
          </p>
          <button className="h-[36px] w-[141px] bg-[#000000] text-white rounded-md flex justify-center mx-auto items-center ">
            See All Cars
          </button>
        </div>
        <div className="flex flex-1 w-full ">
          <div className="what-is-boggle-bg-image "></div>
        </div>
      </div>
    </div>
  )
}

export default WhatIsBoggle
