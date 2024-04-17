import React from 'react'
import { Route, Routes } from 'react-router-dom'
import {
  Home,
  BecomeHost,
  Favorite,
  Login,
  NotFound,
  ForgotPassword,
  SignUp,
} from './_root/pages'
import { ForgotPasswordComponent, ResetPasswordComponent } from './components'
import RootLayout from './_root/RootLayout'
import { ExclusiveRoute, RequireAuth } from './routes'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const BoggleRouter = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<Home />} />

          <Route element={<RequireAuth />}>
            <Route path="become-host" element={<BecomeHost />} />
            <Route path="favorite" element={<Favorite />} />
          </Route>

          <Route element={<ExclusiveRoute />}>
            <Route path="log-in" element={<Login />} />
            <Route path="register" element={<SignUp />} />

            <Route path="/forgot-password" element={<ForgotPassword />}>
              <Route index element={<ForgotPasswordComponent />} />
              <Route path="reset" element={<ResetPasswordComponent />} />
            </Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <ToastContainer />
    </React.Fragment>
  )
}

export default BoggleRouter
