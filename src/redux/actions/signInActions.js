export const signInStart = () => ({
  type: 'SIGN_IN_START',
})

export const signInSuccess = (user) => ({
  type: 'SIGN_IN_SUCCESS',
  payload: user,
})

export const signInFailure = (error) => ({
  type: 'SIGN_IN_FAILURE',
  payload: error,
})

export const resetSignIn = (error) => ({
  type: 'RESET_SIGN_IN',
})

export const logoutAction = () => ({
  type: 'LOGOUT',
})
