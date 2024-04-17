import React, { useCallback, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import googleLogo from '../../assets/google-original.svg'
import appleLogo from '../../assets/apple-original.svg'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { PhoneInput } from 'react-international-phone'
import 'react-international-phone/style.css'
import axios from 'axios'
import { BASE_URL } from '../../constants/BaseUrl'
import { toast } from 'react-toastify'
// import 'react-toastify/dist/ReactToastify.css'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { signUpvalidationSchema } from '../../helper/signUpvalidation'
import { useDispatch, useSelector } from 'react-redux'
import { setEmail } from '../../redux/actions/otpUserProfileActions'
import { OTPModal } from '../../components/ui'
import { generateEmailOTP, verifyEmailOTP } from '../../helper/generateOTP'
import { OtpOpenModal } from '../../redux/actions/otpModalActions'

const SignUp = () => {
  const [hidePassword, setHidePassword] = useState(true)

  const [phoneNumber, setPhoneNumber] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const showModal = useSelector((state) => state?.otpModal?.showModal)
  const userEmail = useSelector((state) => state?.userProfile?.email)
  const generatedOTPCode = useSelector((state) => state?.generatedOTP?.otp)

  const dispatch = useDispatch()
  const convertToNumber = parseInt(generatedOTPCode, 10)

  const verifyFunction = async () =>
    verifyEmailOTP({
      userEmail,
      otpCode: convertToNumber,
    })
  console.log(userEmail)
  console.log(convertToNumber)

  console.log(typeof verifyFunction)
  const initialValues = {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    gender: '',
    dob: '',
  }

  const togglePasswordVisibility = () => {
    setHidePassword(!hidePassword)
  }
  const handlePhoneChange = (value, country, e, formattedValue) => {
    setPhoneNumber(value)
  }

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

  const handleSignUpSubmit = useCallback(
    async (values, { setSubmitting }) => {
      if (phoneNumber.length < 14) {
        setError('Phone number is required')
      } else {
        //  dispatch the user email to redux
        dispatch(setEmail(values.email))
        try {
          // Simulate API request delay
          // await new Promise((resolve) => setTimeout(resolve, 1000))
          setLoading(true)
          const url = `${BASE_URL}/register/web`
          const requestBody = {
            User: {
              Email: values.email,
              Password: values.password,
            },
            Other: {
              FirstName: values.firstname,
              LastName: values.lastname,
              Gender: values.gender,
              DOB: values.dob,
              PhoneNumber: phoneNumber,
            },
          }
          // Send data to backend API
          await axios.post(url, requestBody)

          // Display success toast notification
          toast.success('Sign up successful', {
            position: 'top-center',
          })

          // Set flag in local storage to open modal after refresh
          localStorage.setItem('openModal', 'true')
          // Set flag in local storage to generate OTP after refresh
          localStorage.setItem('generateOTP', 'true')

          generateOTP()

          setLoading(false)
          // Reset form
          setSubmitting(false)
        } catch (error) {
          toast.error('Error while submitting', {
            position: 'top-right',
          })
          setLoading(false)
          console.log('Main Error:', error)

          setSubmitting(false)
        }
      }
    },
    [dispatch, generateOTP, phoneNumber],
  )

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
    <div className="flex  justify-center items-center h-auto bg-[#f4f4f4]">
      <div className="min-w-[330px]  h-auto bg-white mt-24 mb-12 px-6 py-6 flex flex-col text-left shadow-md rounded-md">
        <h3 className="text-[20px] font-semibold text-[#2d2d2d] text-center">
          SignUp
        </h3>
        <p className="my-1 text-center text-[14px] text-[#AEAEAE] font-medium">
          Sign Up in to continue
        </p>
        <Formik
          initialValues={initialValues}
          validationSchema={signUpvalidationSchema}
          onSubmit={handleSignUpSubmit}
        >
          {({ setFieldValue }) => (
            <Form>
              <div className="input-container ">
                <label
                  className="mt-2 block text-[14px] font-medium text-[#2d2d2d]"
                  htmlFor="firstname"
                >
                  First name
                </label>
                <Field
                  className="w-full py-1 px-2 border-[1px] border-[#ccc] outline-none rounded text-left"
                  type="text"
                  placeholder="John"
                  required
                  // onChange={(e) => setFirstname(e.target.value)}
                  // {...formik.getFieldProps('firstname')}
                  id="firstname"
                  name="firstname"
                />

                <ErrorMessage
                  className="text-red-500 font-bold"
                  name="firstname"
                  component="div"
                />
              </div>
              <div className="input-container ">
                <label
                  className="mt-2 block text-[14px] font-medium text-[#2d2d2d]"
                  htmlFor="Lastname"
                >
                  Last name
                </label>
                <Field
                  className="w-full py-1 px-2 border-[1px] border-[#ccc] outline-none rounded text-left"
                  type="text"
                  placeholder="Doe"
                  required
                  // onChange={(e) => setLastname(e.target.value)}
                  // {...formik.getFieldProps('lastname')}
                  id="lastname"
                  name="lastname"
                />
                <ErrorMessage
                  className="text-red-500 font-bold"
                  name="lastname"
                  component="div"
                />
              </div>
              <div className="input-container ">
                <label
                  className="mt-2 block text-[14px] font-medium text-[#2d2d2d]"
                  htmlFor="email"
                >
                  Email
                </label>
                <Field
                  className="w-full py-1 px-2 border-[1px] border-[#ccc] outline-none rounded text-left"
                  type="email"
                  placeholder="@email.com"
                  required
                  // onChange={(e) => setEmail(e.target.value)}
                  // {...formik.getFieldProps('email')}
                  id="email"
                  name="email"
                />
                <ErrorMessage
                  className="text-red-500 font-bold"
                  name="email"
                  component="div"
                />
              </div>
              <div className="relative input-container ">
                <label
                  className="mt-2 block text-[14px] font-medium text-[#2d2d2d]"
                  htmlFor="password"
                >
                  Password
                </label>
                <Field
                  className="w-full py-1 px-2 border-[1px] border-[#ccc] outline-none rounded text-left"
                  type={hidePassword ? 'password' : 'text'}
                  placeholder="*****"
                  required
                  // onChange={(e) => setPassword(e.target.value)}
                  id="password"
                  name="password"
                  // {...formik.getFieldProps('password')}
                />
                <span
                  className="cursor-pointer absolute right-[12px] top-[30%] transform translate-y-4"
                  onClick={togglePasswordVisibility}
                >
                  {hidePassword ? <FaEye /> : <FaEyeSlash />}
                </span>
                <ErrorMessage
                  className="text-red-500 font-bold"
                  name="password"
                  component="div"
                />
              </div>
              <div className="input-container  ">
                <label
                  className="mt-2 block text-[14px] font-medium text-[#2d2d2d]"
                  htmlFor="phone"
                >
                  Phone number
                </label>
                <div name="phone" className="w-full">
                  <PhoneInput
                    className="w-full border-[#ccc] outline-none rounded"
                    defaultCountry="ng"
                    name="phone"
                    // type="phone"
                    onChange={handlePhoneChange}
                  />
                </div>
                {error && (
                  <span className="text-red-500 font-bold">{error}</span>
                )}
              </div>
              <div className="input-container ">
                <label
                  className="mt-2 block text-[14px] font-medium text-[#2d2d2d]"
                  htmlFor="gender"
                >
                  Gender
                </label>
                <Field
                  as="select"
                  name="gender"
                  className="w-full py-1 px-2 border-[1px] border-[#ccc] outline-none rounded text-left"
                  // onChange={(e) => setGender(e.target.value)}
                  required
                  // {...formik.getFieldProps('gender')}
                >
                  <option value="">Select gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </Field>
                <ErrorMessage
                  className="text-red-500 font-bold"
                  name="gender"
                  component="div"
                />
              </div>
              <div className="input-container ">
                <label
                  className="mt-2 block text-[14px] font-medium text-[#2d2d2d]"
                  htmlFor="dob"
                >
                  Date of Birth
                </label>
                <Field
                  type="date"
                  className="w-full py-1 px-2 border-[1px] border-[#ccc] outline-none rounded"
                  required
                  id="dob"
                  name="dob"
                  // onChange={(e) => setDob(e.target.value)}
                  // {...formik.getFieldProps('dob')}
                />
                <ErrorMessage
                  className="text-red-500 font-bold"
                  name="dob"
                  component="div"
                />
              </div>
              <button type="submit" className="login-button mt-4">
                {loading ? 'Loading...' : 'SignUp'}
              </button>
            </Form>
          )}
        </Formik>
        <div className="my-3 text-center font-medium">Or</div>
        <div className="social-login flex flex-col">
          <button
            type="submit"
            className="social-button text-xs whitespace-nowrap flex mb-2 justify-center items-center"
          >
            <img src={googleLogo} alt="Google" className="mr-2" /> SignUp with
            Google
          </button>

          <button
            type="submit"
            className="social-button text-xs whitespace-nowrap flex justify-center items-center"
          >
            <img src={appleLogo} alt="Apple" className="mr-2" /> SignUp with
            Apple
          </button>
        </div>
        <div className="my-3 text-[#2d2d2d] text-sm font-medium text-center">
          Already have an account?
          <Link
            to="/log-in"
            className="text-[#12B7D2] font-medium underline ml-1 cursor-pointer"
          >
            Login
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

export default SignUp
