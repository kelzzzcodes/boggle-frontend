import React, { lazy, Suspense } from 'react'
import BoggleRouter from './BooggleRouter'

// import { Route, Routes } from 'react-router-dom'
// import { BounceLoader } from 'react-spinners'

// import {
//   BecomeHost,
//   Favorite,
//   ForgotPassword,
//   Home,
//   Login,
//   NotFound,
//   SignUp,
// } from './_root/pages'
// import PrivateRoute from './PrivateRoute'
// import RootLayout from './_root/RootLayout'
// import RequireAuth from './routes/RequireAuth'
// import ExclusiveRoute from './routes/ExclusiveRoute'
// import Route from './routes'

// const Home = lazy(() => import("./_root/pages/Home"));
// const Login = lazy(() => import("./_root/pages/Login"));
// const SignUp = lazy(() => import("./_root/pages/SignUp"));
// const ForgotPassword = lazy(() => import("./_root/pages/ForgotPassword"));
// const BecomeHost = lazy(() => import("./_root/pages/BecomeHost"));
// const Favorite = lazy(() => import("./_root/pages/Favorite"));

// // Fallback component for lazy loading
// const Loader = () => (
//   <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
//   <BounceLoader color="#12B7D2" size={60} />
//   </div>
// );

function Boggle() {
  return (
    // <Suspense fallback={<Loader />}>
    // <>
    // <Route/>
    // </>
    <React.Fragment>
     <BoggleRouter />
    </React.Fragment>
    // </Suspense>
  )
}

export default Boggle
