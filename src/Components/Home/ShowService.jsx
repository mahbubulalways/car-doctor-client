import { useState } from "react";
import { Link } from "react-router-dom";
import { FadeLoader } from "react-spinners";
const ShowService = ({service}) => {
    const {_id,title,img,price}=service
    const [loader,setLoader]=useState(false)
    return (
        <div>
            <div className="card w-full h-full bg-base-100 shadow-xl">
  <figure><img className='' src={ img} /></figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p className='text-red-500'>price : ${price}</p>
    <div className="card-actions justify-end">
    <Link to={`/details/${_id}`}>  <button>   
   
   <span className="flex items-center">
   {
    loader ? <span> <FadeLoader width={4} height={14} margin={-4}  color="#000000" /></span>  :<span onClick={()=>setLoader(true)} className="text-white text-lg py-2 bg-blue-700 px-5 rounded-md">Book Now</span>
   }
  
   </span>
   
    </button></Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default ShowService;