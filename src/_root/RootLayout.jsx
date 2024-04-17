import React, { useState, useEffect } from 'react'
import { Navbar, Footer } from '../components'
import { Outlet } from 'react-router-dom'
import { BounceLoader } from 'react-spinners'
import { css } from '@emotion/react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { AppProvider } from '../AppContext'

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red; /* Customize the color if needed */
`

const RootLayout = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulating a delay for demonstration purposes
    const timeout = setTimeout(() => {
      setLoading(false)
    }, 3000) // You can adjust the delay time

    return () => clearTimeout(timeout)
  }, [])

  const toastContainerStyle = {
    marginTop: '70px', // Adjust the value as needed
  }

  return (
    <div className="h-screen">
      {/* {loading ? (
          <div className="flex items-center justify-center h-screen">
          <BounceLoader color="#12B7D2" css={override} size={60} />
          </div>
        ) : ( */}
      <AppProvider>
        <Outlet />
      </AppProvider>

      {/* ToastContainer to display notifications */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        style={toastContainerStyle}
      />
    </div>
  )
}

export default RootLayout
