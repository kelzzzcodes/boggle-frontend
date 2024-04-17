import React, { useCallback, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { OTPModal } from './ui'
import { OtpOpenModal } from '../redux/actions/otpModalActions'
import axios from 'axios'
import { BASE_URL } from '../constants/BaseUrl'
import { toast } from 'react-toastify'
import { generateForgotPasswordOTP } from '../helper/generateOTP'

const ForgotPasswordComponent = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [userEmail, setUserEmail] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const showModal = useSelector((state) => state?.otpModal?.showModal)

  //  const verifyFunction = async() => verifyEmailOTP({
  //     userEmail,
  //     generatedOTPCode: convertToNumber,
  //   })

  const handleInputChange = (e) => {
    setUserEmail(e.target.value)
  }

  const generateOTP = useCallback(async () => {
    try {
      // Generate the OTP
      await generateForgotPasswordOTP({ userEmail })

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

  const handleForgotSubmit = async (e) => {
    e.preventDefault()
    // Validate email as an email
    const emailRegex = /^\S+@\S+\.(?:com|co\.\S+)$/
    if (!emailRegex.test(userEmail)) {
      setError('Invalid email format')
      return
    }
    console.log(userEmail)
    try {
      setLoading(true)
      const url = `${BASE_URL}/register/web/checkuserbool?email=${userEmail}`
      const response = await axios.get(url)
      if (response.data.User === false) {
        window.location.reload()
        setLoading(false)
        setUserEmail('')
        toast.error('User does not exist', {
          position: 'top-right',
        })
        console.log('User does not exist')
      } else {
        //  dispatch the user email to redux
        dispatch({ type: 'SET_EMAIL', payload: userEmail })
        // Set flag in local storage to open modal after refresh
        localStorage.setItem('openModal', 'true')
        // Set flag in local storage to generate OTP after refresh
        localStorage.setItem('generateOTP', 'true')

        generateOTP()
        setLoading(false)
        // dispatch(OtpOpenModal(true))
      }
    } catch (error) {
      // toast.error('Failed!')
      console.log(error)
    }
  }

  useEffect(() => {
    // Check if the OTP should be generated after the page refresh
    const shouldGenerateOTP = localStorage.getItem('generateOTP')
    if (shouldGenerateOTP) {
      // Generate the OTP
      generateOTP()

      // Remove the flag from local storage
      localStorage.removeItem('generateOTP')
    }
  }, [dispatch, generateOTP])
  return (
    <div className="flex justify-center items-center h-screen bg-[#f4f4f4]">
      <div className="max-w-[350px]  h-auto bg-white mt-24 mb-12 px-6 py-6 flex flex-col text-left shadow-md rounded-md">
        <h3 className="mb-2 text-xl font-semibold">Forgot Password</h3>
        <p className="text-[16px] font-medium">
          Please enter your email address to reset your password.
        </p>

        <form onSubmit={handleForgotSubmit}>
          <div className="input-container ">
            <label
              className="mt-2 block text-[14px] font-medium text-[#2d2d2d]"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="w-full py-1 px-2 border-[1px] border-[#ccc] outline-none rounded text-left"
              type="email"
              placeholder="@email.com"
              required
              id="email"
              name="email"
              onChange={handleInputChange}
            />
            {error && (
              <span
                className="text-red-500 font-bold"
                name="email"
                component="div"
              >
                {error}
              </span>
            )}
          </div>

          <button type="submit" className="login-button mt-4">
            {loading ? 'Loading...' : 'Continue'}
          </button>
        </form>
      </div>
      {showModal && (
        <div className="absolute flex w-full">
          <OTPModal closeRoute="/log-in" />
        </div>
      )}
    </div>
  )
}

export default ForgotPasswordComponent
