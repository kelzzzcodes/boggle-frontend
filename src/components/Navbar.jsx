import React, { useEffect, useState } from 'react'
import { X, Menu } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import Logo from '../assets/logo.png'
import { UserRoundPlus } from 'lucide-react'
import NavbarDropDown from './NavbarDropDown'
import { useSelector } from 'react-redux'

const Navbar = () => {
  const [showComponent, setShowComponent] = useState(false)
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768)

  const currentUser = useSelector((state) => state?.signIn?.currentUser)

  console.log('Current User:', currentUser)

  const handleResize = () => {
    setIsSmallScreen(window.innerWidth <= 768)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const toggleComponent = () => {
    setShowComponent(!showComponent)
  }

  const [scrolling, setScrolling] = useState(false)

  const location = useLocation()
  const currentUrl = location.pathname

  useEffect(() => {
    setShowComponent(false)

    const handleScroll = () => {
      if (window.scrollY > 5) {
        setScrolling(true)
      } else {
        setScrolling(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    // Cleanup the event listener when the component is unmounted
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [currentUrl])

  return (
    <header
      className={`  w-full fixed top-0 z-50 ${
        scrolling ? 'scrollBackground ' : 'bg-white'
      } `}
    >
      <nav className="mx-auto h-[77px] shadow-md border-b-[1px] border-[#B7B7B7] py-[10px] pr-4 md:px-[21px] flex items-center justify-between ">
        <Link to={'/'} className="flex w-[120px] md:w-[143px] h-[52px]">
          <img src={Logo} alt="logo" className="flex-1 flex  object-cover" />
        </Link>
        <div className="flex items-center gap-4">
          <button
            className={`hidden md:flex items-center justify-center w-28 md:w-[142px] h-[45px]  rounded-md border-[1px] font-bold text-sm ${
              scrolling
                ? 'border-white text-white'
                : 'border-[#908E8E] text-[#0F0F0F]'
            }`}
          >
            Become a host
          </button>
          <button
            onClick={toggleComponent}
            className={`${scrolling ? 'text-white' : ''}`}
          >
            {showComponent ? (
              <X size={24} className="cursor-pointer" />
            ) : (
              <Menu size={24} className="cursor-pointer" />
            )}
          </button>
          <div>
            {currentUser && (
              <span
                className={`${scrolling ? 'text-white' : 'text-[#908E8E]'}`}
              >
                {currentUser.LastName}
              </span>
            )}
          </div>

          {showComponent && <NavbarDropDown />}
        </div>
      </nav>
    </header>
  )
}

export default Navbar
