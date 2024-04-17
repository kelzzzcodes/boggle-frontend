import React, { useCallback, useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import googleLogo from '../../assets/google-original.svg'
import appleLogo from '../../assets/apple-original.svg'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import axios from 'axios' // Import axios
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useDispatch, useSelector } from 'react-redux'
import {
  resetSignIn,
  signInFailure,
  signInStart,
  signInSuccess,
} from '../../redux/actions/signInActions'
import { replace } from 'formik'
import { OtpOpenModal } from '../../redux/actions/otpModalActions'
import { setEmail } from '../../redux/actions/otpUserProfileActions'
import { OTPModal } from '../../components/ui'
import { generateEmailOTP, verifyEmailOTP } from '../../helper/generateOTP'
import { BASE_URL } from '../../constants/BaseUrl'

const Login = () => {
  const [password, setPassword] = useState('')
  const [hidePassword, setHidePassword] = useState(true)
  const { loading, error } = useSelector((state) => state?.signIn)
  const showModal = useSelector((state) => state?.otpModal?.showModal)
  const userEmail = useSelector((state) => state?.userProfile?.email)
  const generatedOTPCode = useSelector((state) => state?.generatedOTP?.otp)

  const navigate = useNavigate()
  const location = useLocation()
  const successRedirectUrl = location.state?.from?.pathname ?? '/become-host'
  const convertToNumber = parseInt(generatedOTPCode, 10)
  const dispatch = useDispatch()

  const togglePasswordVisibility = () => {
    setHidePassword(!hidePassword)
  }

  const verifyFunction = async () =>
    verifyEmailOTP({
      userEmail,
      otpCode: convertToNumber,
    })
  console.log(userEmail)
  console.log(convertToNumber)

  const generateOTP = useCallback(async () => {
    try {
      // Generate the OTP
      await generateEmailOTP({ userEmail })

      // Dispatch action to open the OTP modal
      dispatch(OtpOpenModal(true))
    } catch (error) {
      // Display error message using react-toastify if OTP generation fails
      toast.error('Error while generating OTP', {
        position: 'top-right',
      })
      console.log('OTP Generation Error:', error)
    }
  }, [dispatch, userEmail])

  const handleLogin = async (e) => {
    e.preventDefault()
    const email = e.target.email.value
    const password = e.target.password.value
    dispatch(signInStart())
    try {
      //  dispatch the user email to redux
      dispatch(setEmail(email))
      const url = `${BASE_URL}/login`
      const requestBody = {
        Email: email,
        Password: password,
      }
      const response = await axios.post(url, requestBody)

      if (response.data.Verified2 === false) {
        localStorage.setItem('generateOTP', 'true')

        generateOTP()
        dispatch(OtpOpenModal(true))
        dispatch(resetSignIn())
      } else {
        console.log('Response:', response.data)

        console.log('Auth:', response.data.Auth)
        console.log('Email:', response.data.Email)

        // Assuming you have a setAuthenticationData function to handle storing user data
        // setAuthenticationData(response.data);

        // Save user data to local storage
        localStorage.setItem('authToken', JSON.stringify(response.data.Auth))
        localStorage.setItem('userEmail', JSON.stringify(response.data.Email))

        navigate(successRedirectUrl, { replace: true })
        dispatch(signInSuccess(response.data.Data.User))
        toast.success('Login successful!')
        console.log('Dispatched user data:', response.data.Data.User)
      }
    } catch (error) {
      console.error('Login failed', error)
      dispatch(signInFailure(error.message)) // Dispatch the error message
      toast.error('Failed to Login') // Display the error message in a toast notification
    }
  }

  // useEffect(() => {
  //   // localStorage.setItem('generateOTP', 'true')
  //   dispatch(signInFailure(error))
  // }, [])

  return (
    <div className="flex justify-center items-center h-screen py-6 bg-[#f4f4f4]">
      <div className="min-w-[330px]  h-auto bg-white mt-8 px-6 py-6 flex flex-col text-left shadow-md rounded-md">
        <h3 className="text-[20px] font-semibold text-[#2d2d2d] text-center">
          Login
        </h3>
        <p className="my-1 text-center text-[14px] text-[#AEAEAE] font-medium">
          Log in to continue
        </p>
        <form onSubmit={handleLogin}>
          <div className="input-container">
            <label
              className="mt-2 block text-[14px] font-medium text-[#2d2d2d]"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="w-full py-1 px-2 border-[1px] border-[#ccc] outline-none rounded-lg text-left"
              type="email"
              name="email"
              id="email"
              placeholder="@email.com"
              required
            />
          </div>
          <div className="relative input-container">
            <label
              className="mt-2 block text-[14px] font-medium text-[#2d2d2d]"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="w-full py-1 px-2 border-[1px] border-[#ccc] outline-none rounded-lg text-left"
              type={hidePassword ? 'password' : 'text'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              name="password"
              id="password"
              placeholder="*****"
              required
            />
            <span
              className="cursor-pointer absolute right-[12px] top-[30%] transform translate-y-4"
              onClick={togglePasswordVisibility}
            >
              {hidePassword ? <FaEye /> : <FaEyeSlash />}
            </span>
          </div>
          <div className="my-3 text-[#2d2d2d] text-sm font-medium">
            Forgot Password?
            <Link
              to="/forgot-password"
              className="text-[#12B7D2] font-medium underline ml-1 cursor-pointer"
            >
              Reset Here
            </Link>
          </div>
          <button type="submit" className="login-button" disabled={loading}>
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
        <div className="my-3 text-center font-medium">Or</div>
        <div className="social-login flex flex-col">
          <Link to="#">
            <button
              type="submit"
              className="social-button text-xs whitespace-nowrap flex mb-2 justify-center items-center"
            >
              <img src={googleLogo} alt="Google" className="mr-2" /> Login with
              Google
            </button>
          </Link>
          <Link to="#">
            <button
              type="submit"
              className="social-button text-xs whitespace-nowrap flex justify-center items-center"
            >
              <img src={appleLogo} alt="Apple" className="mr-2" /> Login with
              Apple
            </button>
          </Link>
        </div>
        <div className="my-3 text-[#2d2d2d] text-sm font-medium">
          Don't have an account?
          <Link
            to="/register"
            className="text-[#12B7D2] font-medium underline ml-1 cursor-pointer"
          >
            SignUp
          </Link>
        </div>
      </div>
      {showModal && (
        <div className="absolute flex w-full">
          <OTPModal
            closeRoute="/"
            confirmRoute="/log-in"
            verify={verifyFunction}
          />
        </div>
      )}
    </div>
  )
}

export default Login
