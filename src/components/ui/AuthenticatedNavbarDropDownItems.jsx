import React, { useEffect, useState } from 'react'
import {
  AuthenticatedBottomNavbarDropdownItems,
  AuthenticatedMiddleNavbarDropdownItems,
  AuthenticatedUpperNavbarDropdownItems,
} from '../../constants/Constants'
import { Link, useNavigate } from 'react-router-dom'
import { LogOut } from 'lucide-react'
import { logoutUser } from '../../helper/logOutUser'
import { useDispatch } from 'react-redux'

const AuthenticatedNavbarDropDownItems = () => {
  const [logoutTriggered, setLogoutTriggered] = useState(false)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogout = () => {
    // Call the utility function to handle logout
    logoutUser(dispatch)
    setLogoutTriggered(true)

    navigate('/')
  }

  useEffect(() => {
    if (logoutTriggered) {
      // Perform page refresh
      window.location.reload()
    }
  }, [logoutTriggered])

  return (
    <>
      {AuthenticatedUpperNavbarDropdownItems.map((item) => (
        <Link
          to={item.path}
          key={item.label}
          className="flex items-center my-1 cursor-pointer hover:text-[#12B7D2]"
        >
          <span className=""> {item.icon}</span>
          <span className="ml-2  ">{item.label}</span>
        </Link>
      ))}
      <hr />
      {AuthenticatedMiddleNavbarDropdownItems.map((item) => (
        <Link
          to={item.path}
          key={item.label}
          className="flex items-center my-1 cursor-pointer hover:text-[#12B7D2]"
        >
          <span className=""> {item.icon}</span>
          <span className="ml-2  ">{item.label}</span>
        </Link>
      ))}
      <hr />

      {AuthenticatedBottomNavbarDropdownItems.map((item) => (
        <Link
          to={item.path}
          key={item.index}
          className="flex items-center my-1 cursor-pointer hover:text-[#12B7D2]"
        >
          <span className=""> {item.icon}</span>
          <span className="ml-2  ">{item.label}</span>
        </Link>
      ))}

      <button
        className="flex items-center cursor-pointer  hover:text-gray-500"
        onClick={handleLogout}
      >
        <LogOut size={32} />
        <span className="ml-2  font-bold">Log out</span>
      </button>
    </>
  )
}

export default AuthenticatedNavbarDropDownItems
