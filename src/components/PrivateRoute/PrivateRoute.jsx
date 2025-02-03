import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom";

import { selectIsLogedIn } from "../../redux/auth/selectors"


const PrivateRoute = ({ children }) => {
    const isLogedin = useSelector(selectIsLogedIn);   
    return isLogedin ? children : <Navigate to='/login' />;
}

export default PrivateRoute;