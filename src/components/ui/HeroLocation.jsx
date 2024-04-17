import { AlarmClockCheck, SearchCheck } from 'lucide-react'
import React from 'react'

const HeroLocation = () => {
  return (
    <div className="w-auto  2xl:w-[996px] absolute bottom-[-250px] lg:bottom-[-320px] 2xl:bottom-[-100px] flex flex-col ">
      <div className="flex gap-8 items-center justify-center   text-[20px] shadow-lg font-AlegreyaSans bg-white w-[179px] ">
        <button className="">Rent</button>
        <span className="py-4">
          <hr className="bg-[#AEAEAE] border-[1px]  h-12" />
        </span>
        <button>Buy</button>
      </div>
      <div className="flex py-8 bg-white shadow-lg  px-8 md:px-16 2xl:p-8 ">
        <div className=" bg-white flex flex-col 2xl:flex-row justify-start gap-10 2xl:gap-20 items-start ">
          <div className="flex gap-[1px] ">
            <SearchCheck className=" w-[28px] h-[28px] " />
            <input
              placeholder="Enter your Location..."
              className="w-[160px] sm:w-[245px] placeholder:text-sm  outline-none border-b-2 border-b-transparent hover:border-b-stone-400"
            />
          </div>
          <div className="w-[133px] flex  gap-2 items-center justify-center 2xl:border-l-2 font-AlegreyaSans">
            <AlarmClockCheck />
            <div className="text-[14px]">
              <h4 className=" font-semibold">Pick Up Date</h4>
              <span>08/10/2023</span>
            </div>
          </div>
          <div className="w-[120px] flex gap-2 items-center justify-center 2xl:border-l-2 font-AlegreyaSans">
            <AlarmClockCheck />
            <div className="text-[14px]">
              <h4 className=" font-semibold">Time</h4>
              <span>10:00 AM</span>
            </div>
          </div>
          <div className="w-[133px] flex gap-2 items-start 2xl:items-center justify-center 2xl:border-l-2 font-AlegreyaSans">
            <AlarmClockCheck />
            <div className="text-[14px]">
              <h4 className=" font-semibold">Drop Off Date</h4>
              <span>18/11/2023</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroLocation
