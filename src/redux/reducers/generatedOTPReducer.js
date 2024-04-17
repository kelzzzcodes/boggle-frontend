const initialState = {
  otp: '',
}

const generatedOTPReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'DISPATCH_OTP':
      return {
        ...state,
        otp: action.payload,
      }
    default:
      return state
  }
}

export default generatedOTPReducer
