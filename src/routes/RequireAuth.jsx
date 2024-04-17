import { useSelector } from 'react-redux'
import { Navigate, Outlet, useLocation } from 'react-router-dom'

const RequireAuth = () => {
  const currentUser = useSelector((state) => state?.signIn?.currentUser)
  const isAuthenticated = !!currentUser
  const location = useLocation()

  //   const isAllowedPath = ['/'].includes(rest.path)

  return isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate to="/log-in" state={{ from: location }} replace />
  )
}

export default RequireAuth
