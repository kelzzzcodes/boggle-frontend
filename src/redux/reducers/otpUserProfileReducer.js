// reducers/userProfileReducer.js

const initialState = {
  email: '',
  phoneNumber: '',
}

const userProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_EMAIL':
      return { ...state, email: action.payload }
    case 'SET_PHONE_NUMBER':
      return { ...state, phoneNumber: action.payload }
    default:
      return state
  }
}

export default userProfileReducer
