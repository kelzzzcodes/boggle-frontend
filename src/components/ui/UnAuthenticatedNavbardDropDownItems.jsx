import React from 'react'
import { BottomNavbarDropdownItems, UpperNavbarDropdownItems } from '../../constants/Constants'
import { Link } from 'react-router-dom'

const UnAuthenticatedNavbardDropDownItems = () => {
  return (
    <>
            {UpperNavbarDropdownItems.map((item) => (
              <Link
                to={item.path}
                key={item.index}
                className="flex items-center cursor-pointer  hover:text-[#12B7D2]"
              >
                <span> {item.icon}</span>
                <span className={`${item.icon ? 'ml-2' : 'ml-0'}`}>
                  {item.label}
                </span>
              </Link>
            ))}
            <hr />
            {BottomNavbarDropdownItems.map((item) => (
              <Link
                to={item.path}
                key={item.index}
                className="flex items-center cursor-pointer  hover:text-[#12B7D2]"
              >
                <span> {item.icon}</span>
                <span className={`${item.icon ? 'ml-2' : 'ml-0'}`}>
                  {item.label}
                </span>
              </Link>
            ))}
          </>
  )
}

export default UnAuthenticatedNavbardDropDownItems