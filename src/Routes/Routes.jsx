import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Components/Home/Home";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import CheekOut from "../Components/CheakOut/CheekOut";
import Bookings from "../Components/Bookings/Bookings";
import PrivateRoute from "../Components/PrivateRoute/PrivateRoute";
import ServiceDetails from "../Components/ServiceDetails/ServiceDetails";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children:[
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/cheekout/:id",
          element: <PrivateRoute><CheekOut></CheekOut></PrivateRoute>,
          loader:({params})=>fetch(`https://carhub-server.vercel.app/services/${params.id}`)
        },
        {
          path: "/details/:id",
          element:<ServiceDetails></ServiceDetails>,
          loader:({params})=>fetch(`https://carhub-server.vercel.app/services/${params.id}`)
        },
        {
          path: "/bookings",
          element:<PrivateRoute><Bookings></Bookings></PrivateRoute>,
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/register",
          element: <Register></Register>,
        }
      ],
   
    },
    
  ]);

export default router