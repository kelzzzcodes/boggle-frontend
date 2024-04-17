import React from 'react'
import { WhyChooseBoggleData } from '../../constants/Constants'

const WhyChooseBoggleCard = () => {
  return (
    <div className="flex  flex-wrap flex-col md:flex-row items-center justify-center  gap-16 lg:gap-28 ">
      {WhyChooseBoggleData.map((item, chooseIndex) => (
        <div
          key={chooseIndex}
          className="cursor-pointer flex flex-col w-[210px] sm:w-[275px]  h-auto p-4 rounded-md gap-2 mx-auto why-choose-boggle-carousel-hover border-b-2 border-transparent hover:border-b-2 hover:border-b-slate-300 "
        >
          <span className="flex justify-center mx-auto text-[#12B7D2]">
            {item.icon}
          </span>
          <div className="flex flex-col gap-2 ">
            <h4 className="flex mx-auto">{item.title}</h4>
            <p className="flex text-center  text-sm md:text-lg  h-auto justify-center">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default WhyChooseBoggleCard
