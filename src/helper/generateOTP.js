import axios from 'axios'
import { BASE_URL } from '../constants/BaseUrl'
//  email verification
export const generateEmailOTP = async ({ userEmail }) => {
  try {
    const url = `${BASE_URL}/register/web/otpverify?email=${userEmail}`
    await axios.get(url)
  } catch (error) {
    console.log(error)
  }
}

export const verifyEmailOTP = async ({ userEmail, otpCode }) => {
  try {
    const url = `${BASE_URL}/register/web/otpverify?email=${userEmail}`
    const requestBody = {
      otp: `${otpCode}`,
    }
    await axios.post(url, requestBody)
  } catch (error) {
    console.log(error)
  }
}

export const generateForgotPasswordOTP = async ({ userEmail }) => {
  try {
    const url = `${BASE_URL}/reset/1`
    const requestBody = {
      Email: `${userEmail}`,
    }
    await axios.post(url, requestBody)
  } catch (error) {
    console.log(error)
  }
}
