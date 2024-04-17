import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

const ExclusiveRoute = () => {
  const currentUser = useSelector((state) => state?.signIn?.currentUser)
  const isAuthenticated = !!currentUser
  //   const location = useLocation()

  //   const isAllowedPath = ['/'].includes(rest.path)

  return isAuthenticated ? <Navigate to="/" /> : <Outlet />
}

export default ExclusiveRoute
