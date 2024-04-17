import React from 'react';
import HeroImage from '../assets/Frame.png';
import { HeroButton, HeroLocation } from './ui';

const Hero = () => {
  return (
    <div className="h-auto flex flex-col bg-[#F5F5F6]">
      <div className="flex xl:flex-row flex-col-reverse mt-4 gap-8 xl:gap-5 relative z-0  px-2 mx-auto h-full pb-32 text-center xl:text-start">
        <div className=" flex-1 flex flex-col gap-10 xl:pt-36  md:pl-12 ">
          <div className="flex flex-col gap-4">
            <h1 className="text-xl xs:text-3xl sm:text-5xl font-AlegreyaSc font-extrabold leading-[40px] sm:leading-[72px] md:leading-[76.22px]">
              Discover Your Perfect <br />
              Car Journey with <span className="text-[#12B7D2]">Boggle</span>
            </h1>
            <p className="font-medium text-md xs:text-xl xs:leading-8 font-AlegreyaSans">
              Your Ultimate Solution for Car Sharing and Ownership
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 items-center justify-center xl:justify-start">
            <HeroButton />
          </div>
        </div>
        <div className="xl:flex-[1] flex justify-end w-full">
          <div className="relative xl:w-full w-[90%] mt-24 h-full z-0">
            <img src={HeroImage} alt="HeroImage" fill className="object-contain" />
          </div>
        </div>
      </div>
      <div className="w-full flex mx-auto justify-center mt-32  lg:mt-8 relative">
        <HeroLocation />
      </div>
    </div>
  );
};

export default Hero;
