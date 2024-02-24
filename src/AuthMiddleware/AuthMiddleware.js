import { Navigate, Outlet, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth"

function AuthMiddleware() {
    const { user } = useAuth();
    const location = useLocation();

    return (
        user?.email ? <Outlet /> : <Navigate to='/login' state={{ from: location }} replace={true} />
    )
}

export default AuthMiddleware