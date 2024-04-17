import React, { createContext, useContext } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { Footer, Navbar } from './components'

const AppContext = createContext()

export const useNavigationContext = () => useContext(AppContext)

export const AppProvider = () => {
  const navigate = useNavigate()

  const handleCloseNavigateTo = (closeRoute) => {
    navigate(closeRoute)
  }

  const handleConfirmNavigateTo = (confirmRoute) => {
    navigate(confirmRoute)
  }

  return (
    <AppContext.Provider
      value={{ handleCloseNavigateTo, handleConfirmNavigateTo }}
    >
      <Navbar />
      <Outlet />
      <Footer />
    </AppContext.Provider>
  )
}
