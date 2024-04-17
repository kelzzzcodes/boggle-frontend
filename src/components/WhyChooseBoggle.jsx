import React from 'react'
import { WhyChooseBoggleCard } from './ui'

const WhyChooseBoggle = () => {
  return (
    <div className="w-full flex flex-col h-auto pb-20   mt-30">
      <div className="flex flex-col w-[75%] sm:w-[90%]  mx-auto">
        <h3 className=" font-AlegreyaSans font-bold flex justify-center text-2xl md:text-3xl mt-8">
          Why choose Boggle?
        </h3>
        <div className="mt-20 ">
          <WhyChooseBoggleCard />
        </div>
      </div>
    </div>
  )
}

export default WhyChooseBoggle
