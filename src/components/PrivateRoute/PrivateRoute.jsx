import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom";

import { selectisLoggedIn } from "../../redux/auth/selectors"


const PrivateRoute = ({ children }) => {
    const isLoggedIn = useSelector(selectisLoggedIn);   
    return isLoggedIn ? children : <Navigate to='/login' />;
}

export default PrivateRoute;