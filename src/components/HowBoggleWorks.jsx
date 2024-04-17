import React from 'react'
import { HeroButton } from './ui'
import { HowBoggleWorksData } from '../constants/Constants'

const HowBoggleWorks = () => {
  return (
    <div className="w-full pb-10">
      <div className="bg-[#F5F5F6] w-full md:w-[90%] flex flex-col mx-auto h-full pt-10 pb-10 ">
        <div className="md:mt-10 font-AlegreyaSans mx-auto justify-center text-center flex flex-col gap-4">
          <p className="text-[#12B7D2]  font-bold text-base">
            How Boggle works
          </p>
          <h3 className="text-[16px] md:text-[32px] w-[185px] md:w-[296px] flex">
            Find Your Perfect Drive in Three Easy Steps
          </h3>
        </div>
        <div className=" w-[90%] md:w-[85%] mt-10 flex flex-col-reverse md:flex-row mx-auto h-[553px]">
          <div className="flex-1 flex flex-col gap-8">
            <div className="flex flex-col gap-4 font-AlegreyaSans">
              <h3 className=" text-[#12B7D2] font-bold text-base">
                Get the Boggle App
              </h3>
              <p className=" font-medium text-xs md:text-base">
                Download and join for free. No membership fees ever.
              </p>
              <HeroButton />
            </div>
            {HowBoggleWorksData.map((item) => (
              <div key={item.title} className="w-[75%] flex  flex-col gap-2">
                <h3 className=" text-[#12B7D2] font-bold text-base">
                  {item.title}
                </h3>
                <p className=" font-medium text-xs md:text-base">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
          <div className="flex flex-1 w-full  ">
            <div className="how-boggle-works-bg-image"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HowBoggleWorks
