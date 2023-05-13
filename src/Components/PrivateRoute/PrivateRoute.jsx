import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { PropagateLoader } from "react-spinners";

const PrivateRoute = ({children}) => {
    const location=useLocation()
    const {users,loading}=useContext(AuthContext)
  
    if(loading){
        
            return <div className=" flex justify-center py-40 ">
             <PropagateLoader   color="#36d7b7" />
            </div>
          
    }
    if(users?.email){
        return children
    }
    return <Navigate to='/login'  state={{ from: location }}  replace></Navigate>
};

export default PrivateRoute;