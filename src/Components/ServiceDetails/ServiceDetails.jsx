import logo from '../../assets/logo.png'
import { Link, useLoaderData } from 'react-router-dom';
import image from '../../assets/images/checkout/checkout.png'
import { DocumentIcon ,ArrowRightIcon} from '@heroicons/react/24/solid'
import './serviceDetails.css'
import { useState } from 'react';
import { PropagateLoader } from "react-spinners";
const ServiceDetails = () => {
    const [loader,setLoader]=useState(false)
    const service=useLoaderData()
    const {img,title,description,facility,price,_id}=service

    return (
        <div className='w-[80%] mx-auto my-10'>
         <div className='relative'>
         <img className='rounded-lg object-cover h-full w-full mx-auto' src={image} alt="" />
         <div className='rounded-lg text-white bg-gradient-to-r from-[#151515] to [rgba(21, 21, 21, 0)] absolute inset-0 '>
        <div className='p-5 md:p-10'>
        <h1 className='text-xl md:text-4xl font-semibold'>Service Details</h1>
        </div>
            <div className='flex justify-center'>
            <div className='absolute bottom-0'>
          
           <div className='md:text-xl text-xs px-8 md:pt-10 md:pb-3 pt-5 pb-1 service text-center'>Home/<span>Service Details</span></div>
            </div>
            </div>
         </div>
         </div>
      
         <div className='flex flex-col md:flex-row gap-10 py-24'>
         <div className=' space-y-3 w-full md:w-2/3'>
         <img className='rounded-xl w-full' src={img} alt="" />
         <h1 className='text-4xl font-semibold'>{title}</h1>
         <p className='text-[#737373]'>{description}</p>
         <div className='grid grid-cols-1 md:grid-cols-2 gap-8 pt-8'>
         {
           facility.map((facili,i)=> <div key={i}>
           <div className='bg-[#F3F3F3] p-8 rounded-lg'>
           <h1 className='text-[#444444] text-3xl font-semibold'>{facili.name}</h1>
           <p className='text-[#737373]'>{facili.details}</p>
           </div>
           </div>)
         }
         </div>
         </div>
         <div className='w-full md:w-1/3'>
            <div className='bg-black rounded-lg p-10  mx-auto text-white'>
            <h1 className='text-2xl font-semibold'>Download</h1>
           
            <div className='flex justify-between items-center'>
            <div className='flex gap-2 items-center mt-5'>
            <DocumentIcon className="h-6 w-6 text-white" />
            <div>
            <p>Our Brochure</p>
            <p className='text-xs'>Download</p>
            </div>
            </div>
            <button className='bg-[#FF3811] p-1.5 h-8 w-8 rounded-full'>
            <ArrowRightIcon className="h-4 w-4 text-white" />
            </button>
            </div>

            <div className='flex justify-between items-center'>
            <div className='flex gap-2 items-center mt-5'>
            <DocumentIcon className="h-6 w-6 text-white" />
            <div>
            <p>Our Brochure</p>
            <p className='text-xs'>Download</p>
            </div>
            </div>
            <button className='bg-[#FF3811] p-1.5 h-8 w-8 rounded-full'>
            <ArrowRightIcon className="h-4 w-4 text-white" />
            </button>
            </div>
            </div>




         
         
            <div className='bg-black rounded-lg p-10 space-y-2  mx-auto mt-10 text-white'>
            <div className='w-max mx-auto'>
               <img src={logo} alt="" />
                <h1 className='text-white text-center font-semibold text-xl'>Car Doctor</h1>
               </div>
               <h1 className=' text-center pb-8'>Need Help? We Are Here To Help You</h1>
               <div className='bg-white rounded-lg text-center py-10'>
                <h1 className='text-xl font-bold'><span className='text-[#FF3811]'>Car Doctor</span> <span className='text-black'>Special</span></h1>
                <h1 className=' mt-2 font-bold'><span className='text-black '>Save up to </span> <span className='text-[#FF3811]'> 60% off</span></h1>
               </div>
               <div className='text-center bottom-8 relative'>
            <button className='bg-[#FF3811] text-white px-5 py-2 rounded-md'>Get A Quote</button>
            </div>
            </div>
            <p className='text-5xl font-semibold mt-5 pb-8'>Price : ${price}</p>
           

           {
            loader ?<span className='flex justify-center'>
            <PropagateLoader width={4} height={14} margin={-4}  color="#000000" /></span> :<Link to={`/cheekout/${_id}`}> <button onClick={()=>setLoader(true)}  className='bg-[#FF3811] text-white px-5 py-2 rounded-md w-full '>Proceed Checkout</button></Link>
           }

          
         </div>
       
         </div>
         </div>
    );
};

export default ServiceDetails;

