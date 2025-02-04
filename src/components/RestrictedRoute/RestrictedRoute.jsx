import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom";

import { selectisLoggedIn } from "../../redux/auth/selectors"


const RestrictedRoute = ({ children }) => {
    const isLoggedIn = useSelector(selectisLoggedIn);
    return isLoggedIn ?  <Navigate to='/' /> : children;
}

export default RestrictedRoute;