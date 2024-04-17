const initialState = {
  currentUser: {},
  error: null,
  loading: false,
}

const signInReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SIGN_IN_START':
      return {
        ...state,
        loading: true,
        error: null,
      }
    case 'SIGN_IN_SUCCESS':
      return {
        ...state,
        currentUser: action.payload,
        loading: false,
        error: null,
      }
    case 'SIGN_IN_FAILURE':
      return {
        ...state,
        error: action.payload,
        loading: false,
      }
    case 'RESET_SIGN_IN':
      return {
        ...state,
        error: null,
        loading: false,
      }
    case 'LOGOUT':
      return {
        ...state,
        currentUser: null,
      }
    default:
      return state
  }
}

export default signInReducer
