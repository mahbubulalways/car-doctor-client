import { useEffect, useState } from "react";
import ShowService from "./ShowService";
import { PropagateLoader } from "react-spinners";

const Services = () => {
    const [loader,setLoader]=useState(true)
    const [services,setServices]=useState([])
   useEffect(()=>{
    fetch('https://carhub-server.vercel.app/services')
    .then(res=>res.json())
    .then(data=>{
        setServices(data)
        setLoader(false)
    })
   },[])

   if(loader){
   return <div className=" flex justify-center py-20 ">
    <PropagateLoader   color="#000000" />
   </div>
   }

    return (
        <div>
            
            <div className=" w-[90%] lg:w-[50%] mx-auto">
            <h1 className="text-3xl text-center font-semibold text-[#FF3811]">Service</h1>
            <h1 className="text-5xl font-semibold text-center mt-3">Our Service Area</h1>
            <p className="mt-3 text-[#737373] text-lg text-center">the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 w-[80%] mx-auto gap-5 my-10">
            {services.map(service=><ShowService
            key={service._id}
            service={service}
            ></ShowService>)}
            </div>
        </div>
    );
};

export default Services;