import { combineReducers } from 'redux'
import otpUserProfileReducer from './otpUserProfileReducer'
import otpModalReducer from './otpModalReducer'
import generatedOTPReducer from './generatedOTPReducer'
import signInReducer from './signInReducer'

const myReducer = combineReducers({
  userProfile: otpUserProfileReducer,
  otpModal: otpModalReducer,
  generatedOTP: generatedOTPReducer,
  signIn: signInReducer,
})

export default myReducer
