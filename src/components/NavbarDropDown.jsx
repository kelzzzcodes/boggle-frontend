import React from 'react'
import {
  AuthenticatedNavbarDropDownItems,
  UnAuthenticatedNavbardDropDownItems,
} from './ui'
import { useSelector } from 'react-redux'

const NavbarDropDown = () => {
  const currentUser = useSelector((state) => state?.signIn?.currentUser)
  
  console.log('Current User:', currentUser)
  const isAuthenticated = !!currentUser

  return (
    <div className="flex flex-col gap-4 w-60 px-4 py-5 absolute top-[77px] right-10 shadow-lg rounded-b-lg z-50 bg-[#FFFFFF]">
      <div className="flex flex-col gap-4">
        {isAuthenticated ? (
          <AuthenticatedNavbarDropDownItems />
        ) : (
          <UnAuthenticatedNavbardDropDownItems />
        )}
      </div>
    </div>
  )
}

export default NavbarDropDown
