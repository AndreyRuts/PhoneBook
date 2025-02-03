import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom";

import { selectIsLogedIn } from "../../redux/auth/selectors"


const RestrictedRoute = ({ children }) => {
    const isLogedin = useSelector(selectIsLogedIn);
    return isLogedin ?  <Navigate to='/' /> : children;
}

export default RestrictedRoute;