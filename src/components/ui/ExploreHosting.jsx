import React from 'react'

const ExploreHosting = () => {
  return (
    <div className="flex flex-col gap-12 ">
      <h3 className="font-AlegreyaSans text-[#12B7D2] font-bold text-xl flex mx-auto">
        Explore Hosting
      </h3>

      <div className="relative">
        <div className="flex w-[90%] md:w-[70%] lg:w-[80%] xl:w-[80%] mx-auto">
          <div className="explore-hosting-bg-image w-full h-[372px] md:h-[574px] "></div>
        </div>
        <div className="absolute right-[4.5%] md:right-14 bottom-[-200px] md:bottom-[-110px] bg-[#F5F5F6] md:h-[412px] w-[70%] md:w-[40%] xl:w-[45%] rounded-lg ">
          <div className="flex flex-col gap-8 pl-6  md:pl-12 xl:pl-20 py-10 md:py-14">
            <h2 className="w-[130px] md:w-[160px] 2xl:w-[226px] text-xl md:text-2xl 2xl:text-4xl font-bold font-AlegreyaSc">
              Have a car?Start sharing
            </h2>
            <p className="w-[95%] sm:w-[70%] md:w-[80%] xl:w-[70%] 2xl:w-[50%]  text-sm  md:text-lg font-AlegreyaSans font-bold flex ">
              Become a Host and list your car on Boggle. You'll help your
              neighbors travel easier while making extra money each month.
            </p>
            <button className="w-[120px] h-[45px]  md:w-[187px] md:h-[65px] bg-black  text-white rounded-md">
              Learn more
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExploreHosting
