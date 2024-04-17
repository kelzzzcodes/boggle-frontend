import React, { useState } from 'react'
import Logo from '../assets/logo.png'
import { HeroButton } from './ui'
import { FooterData, SocialsData } from '../constants/Constants'
import { Link } from 'react-router-dom'
import { ChevronDown, ChevronUp } from 'lucide-react'

const Footer = () => {
  const [sectionVisibility, setSectionVisibility] = useState(
    Array(FooterData.length).fill(false),
  )

  const toggleSection = (index) => {
    const updatedVisibility = [...sectionVisibility]
    updatedVisibility[index] = !updatedVisibility[index]
    setSectionVisibility(updatedVisibility)
  }

  return (
    <footer className="w-full h-auto flex flex-col gap-10 lg:flex-row px-4 pb-10  ">
      <div className="flex mt-10 lg:mt-auto lg:w-[35%] flex-col gap-4  lg:items-center my-auto justify-center">
        <img
          src={Logo}
          alt="Logo"
          className="w-[130px] lg:w-[160px] ml-0 sm:ml-20 lg:ml-0"
        />
        <p className=" ml-0 sm:ml-10 lg:ml-0">
          Terms of Services | Privacy Policy
        </p>
        <div className="flex ">
          <div className="andriod mr-2">
            <a href="/" tabIndex="0">
              <img
                className="bn45"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png"
                alt="bn45"
              />
            </a>
          </div>
          <div className="ios">
            <a href="/" tabIndex="0">
              <img
                className="bn46"
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="bn45"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="hidden sm:flex flex-1 gap-[2.5rem] flex-wrap">
        <div className="flex gap-10 lg:gap-20">
          {FooterData.map((section, sectionIndex) => (
            <div
              key={`section-${sectionIndex}`}
              className="mt-20 flex flex-col gap-4"
            >
              {section.map((item, itemIndex) => (
                <div
                  key={`section-${sectionIndex}-item-${itemIndex}`}
                  className=""
                >
                  {item.heading && (
                    <h3 className="font-bold text-xl">{item.heading}</h3>
                  )}
                  {item.label && (
                    <Link className="inline-block my-1 hover:text-[#12B7D2] text-[16px] font-normal">
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-8 flex-wrap">
          <div className=" mt-20 flex items-center gap-5">
            {SocialsData.map((item, socialsIndex) => (
              <Link key={socialsIndex} className="text-2xl">
                {item.icon}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-4">
            <h3 className=" font-AlegreyaSans font-bold text-base">
              Get in touch
            </h3>
            <p className="w-[50%]  leading-8 flex flex-wrap ">
              Questions or Feedback? We’d love to hear from you
            </p>
          </div>
        </div>
      </div>
      <div className=" flex flex-col mt-5 sm:hidden">
        {FooterData.map((section, index) => (
          <div key={index} className="w-full ">
            <div className="flex justify-between border-b-2 border-[#AEAEAE80] py-4">
              <h3 className="text-lg">{section[0].heading}</h3>
              <span
                className="cursor-pointer"
                onClick={() => toggleSection(index)}
              >
                {sectionVisibility[index] ? <ChevronUp /> : <ChevronDown />}
              </span>
            </div>
            {sectionVisibility[index] && (
              <div className="flex flex-col gap-2 py-4">
                {section.slice(1).map((item, itemIndex) => (
                  <Link
                    key={itemIndex}
                    className=" flex hover:text-gray-600 w-full"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
        <div className=" mt-10 flex flex-col gap-4">
          <div className=" flex items-center gap-5">
            {SocialsData.map((item, socialsMobileIndex) => (
              <Link key={socialsMobileIndex} className="text-2xl">
                {item.icon}
              </Link>
            ))}
          </div>
          <h3 className=" font-AlegreyaSans font-bold text-base">
            Get in touch
          </h3>
        </div>
      </div>
    </footer>
  )
}

export default Footer
