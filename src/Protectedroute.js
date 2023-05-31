import useAuth from "./Custom-hook/useAuth"
import { Navigate } from "react-router-dom"
const Protectedroute = ({children}) => {
    const {currentUser}=useAuth()
  return currentUser ? children :<Navigate to='/login'/>
}

export default Protectedroute
