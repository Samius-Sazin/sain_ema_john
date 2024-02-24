import { useContext } from "react"
import { MyContext } from "../Context/AuthProvider"

const useAuth = () => {
    return useContext(MyContext);
}

export default useAuth;