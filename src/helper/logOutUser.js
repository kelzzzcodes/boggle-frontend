import { logoutAction } from '../redux/actions/signInActions'

export const logoutUser = (dispatch) => {
  // Clear local storage
  localStorage.removeItem('authToken')
  localStorage.removeItem('userEmail')

  // Dispatch logout action
  dispatch(logoutAction())

}
