import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { OtpCloseModal } from '../../redux/actions/otpModalActions'
import { X } from 'lucide-react'
import { dispatchOtp } from '../../redux/actions/generatedOTPactions'
import { generateEmailOTP, verifyEmailOTP } from '../../helper/generateOTP'
import { toast } from 'react-toastify'
import { Navigate, useNavigate } from 'react-router-dom'
import { setEmail } from '../../redux/actions/otpUserProfileActions'
import { useNavigationContext } from '../../AppContext'

const OTPModal = ({ closeRoute, confirmRoute, verify }) => {
  const [otp, setOtp] = useState(new Array(5).fill(''))
  const [loading, setLoading] = useState(false)

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const userEmail = useSelector((state) => state?.userProfile?.email)
  const showModal = useSelector((state) => state?.otpModal?.showModal)
  const { handleCloseNavigateTo } = useNavigationContext()

  const inputRefs = useRef([])

  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus()
    }
  }, [])

  const handleChange = (e, index) => {
    const value = e.target.value
    if (isNaN(value)) return
    const newOtp = [...otp]

    // allows only one input at atime
    newOtp[index] = value.substring(value.length - 1)
    setOtp(newOtp)

    // submit the combined values from the 5 different inputs
    const combinedOtp = newOtp.join('')

    // check if the otp been submitted is equal to the number of inputs
    if (combinedOtp.length === 5) {
      handleOTPSubmitToRedux(combinedOtp)
    }

    // Move to the next input if current field is filled
    if (value && index < 5 - 1 && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1].focus()
    }
  }

  const handleClick = (index) => {
    inputRefs.current[index].setSelectionRange(1, 1)
    if (index > 0 && !otp[index - 1]) {
      inputRefs.current[otp.indexOf('')].focus()
    }
  }

  const handleKeyDown = (e, index) => {
    if (
      e.key === 'Backspace' &&
      !otp[index] &&
      index > 0 &&
      inputRefs.current[index - 1]
    ) {
      // moves cursor to the previous input field on backspace
      inputRefs.current[index - 1].focus()
    }
  }

  const handleCloseModal = () => {
    dispatch(setEmail(''))
    dispatch(dispatchOtp(''))
    dispatch(OtpCloseModal(true))
    localStorage.removeItem('generateOTP')
    localStorage.removeItem('openModal')
    handleCloseNavigateTo(closeRoute)
  }

  const handleOTPSubmitToRedux = (otp) => {
    //  Dispatch action to save the otp to redux
    dispatch(dispatchOtp(otp))
  }

  const handleConfirmOTP = async () => {
    if (otp.length === 5) {
      try {
        setLoading(true)

        await verify()

        setLoading(false)
        dispatch(setEmail(''))
        dispatch(dispatchOtp(''))
        dispatch(OtpCloseModal(false))
        handleCloseNavigateTo(confirmRoute)
      } catch (error) {
        toast.error('Invalid Code', {
          position: 'top-right',
        })
        console.log(error)
      }
    } else {
      toast.error('Otp code not complete')
    }
  }

  const handleResendOTP = async () => {
    try {
      // Generate the OTP
      setLoading(true)
      await generateEmailOTP({ userEmail })
      setLoading(false)
    } catch (error) {
      // Display error message using react-toastify if OTP generation fails
      toast.error('Error while generating OTP', {
        position: 'top-right',
      })
      console.log('OTP Generation Error:', error)
    }
  }

  return (
    <>
      <div
        className="h-auto flex flex-col w-full justify-center items-center"
        style={{ height: 'calc(100vh - 100px)' }}
      >
        <div className=" h-auto w-[80%] md:w-[55%] xl:w-[40%] 2xl:w-[30%] p-4 bg-white rounded-md flex flex-col gap-5 font-AlegreyaSans pt-10 pb-14  ">
          <span className=" flex items-end justify-end  w-auto">
            <span onClick={handleCloseModal} className="cursor-pointer px-2">
              <X size={40} />
            </span>
          </span>

          <h3 className=" font-bold text-xl md:text-2xl font-AlegreyaSc">
            ENTER OTP CODE
          </h3>
          <p className=" text-#AEAEAE flex flex-wrap gap-2">
            We've texted a code to your Email address
            <span className=" font-bold">{userEmail}</span>
          </p>
          <div className="flex flex-1 justify-evenly px-2 ">
            {otp.map((value, index) => (
              <input
                key={index}
                type="text"
                ref={(input) => (inputRefs.current[index] = input)}
                value={value}
                onChange={(e) => handleChange(e, index)}
                onClick={() => handleClick(index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                className="w-[40px] h-[40px] text-center text-xl rounded-2xl border-2 border-black/40 outline-none"
              />
            ))}
          </div>
          <div className="flex items-center justify-center mt-5">
            <p className="flex gap-2">
              Didn't receive code?
              <button onClick={handleResendOTP} className="text-[#12B7D2]">
                {loading ? 'loading...' : ' Resend code'}
              </button>
            </p>
          </div>
          <button
            onClick={handleConfirmOTP}
            className="w-full text-white h-[43px] bg-black flex items-center justify-center rounded-lg font-bold "
          >
            {loading ? 'Loading...' : 'Confirm OTP'}
          </button>
        </div>
      </div>
    </>
  )
}

export default OTPModal
