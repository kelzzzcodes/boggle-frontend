import React from 'react'
import HeroButton from './ui/HeroButton'

const DownloadApp = () => {
  return (
    <div className="w-full h-[293px] bg-[#12B7D2] hidden  md:flex md:flex-row ">
      <div className="hidden  xl:w-full xl:h-full xl:flex xl:flex-1">
        <div className="download-app-bg-image"></div>
      </div>
      <div className="flex flex-1  mx-auto my-auto ">
        <div className="flex  flex-col gap-4 mx-auto">
          <h4 className="font-extrabold text-4xl">
            Experience Boggle On-The-Go
          </h4>
          <p className=" font-medium text-2xl">
            Download our mobile app today!
          </p>
          <HeroButton />
        </div>
      </div>
    </div>
  )
}

export default DownloadApp
