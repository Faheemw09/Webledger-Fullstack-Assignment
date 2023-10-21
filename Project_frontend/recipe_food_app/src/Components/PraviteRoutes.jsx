import { Navigate, useLocation } from "react-router-dom";
import {useSelector} from "react-redux"
export const PrivateRoute = ({children}) => {

const isAuth=useSelector((store)=>{
  return store.Authreducer.isAuth
})
const Location=useLocation()
return isAuth?children:<Navigate to="/signin" state={Location.pathname} replace />


}