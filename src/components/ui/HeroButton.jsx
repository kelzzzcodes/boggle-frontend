import React from 'react'
import { Link } from 'react-router-dom'
import { HeroButtonData } from '../../constants/Constants'

const HeroButton = () => {
  return (
    <div className="flex gap-2 items-center">
      {HeroButtonData.map((item) => (
        <Link
          key={item.image}
          className="w-[118px] sm:w-[145px] sm:h-[48px] bg-black rounded-md gap-2 p-2 text-white flex items-center"
        >
          <img src={item.image} className="flex  h-[19px]" alt={item.image} />
          <div className="flex flex-col flex-1 items-start">
            <span className="font-semibold text-[8px] sm:text-xs ">
              {item.description}
            </span>
            <p className="font-bold text-xs">{item.title}</p>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default HeroButton
