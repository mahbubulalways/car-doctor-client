import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';

const CheekOut = () => {
    const services=useLoaderData()
   const {users}=useContext(AuthContext)




    const handleUpdate=(event)=>{
        event.preventDefault()
        const form=event.target
        const name=form.name.value
        const date=form.date.value
        const number=form.number.value
        const email=form.email.value
        const img=services.img
        const price=services.price
        const title=services.title
        const message=form.message.value
        const order={name,date,img,number,email,message,price,title}

        fetch('hhttps://carhub-server.vercel.app/booking',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(order)

        })
        .then(res=>res.json())
        .then(data=>{
           if(data.insertedId){
                Swal.fire({
                    icon: 'success',
                    title: 'Done',
                    text: 'Cheek out confirmed successfully',
                  })
            }
        })
    }

    return (
        <div className="w-[80%] mx-auto">
        
         <form className='bg-[#F3F3F3] rounded-md p-10 my-10' onSubmit={handleUpdate}>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
             <div>
             <input type="text" name="name" id="" required placeholder="Enter  name" className=' px-3 py-2 outline-none rounded w-full border-2 border-[#e1ddd1]  focus:border-[#b9b5b4]'  defaultValue={users?.displayName}/>
             </div>
             <div>
             <input type="date" name="date" id="" required placeholder="Enter date " className=' px-3 py-2 border-2 border-[#e1ddd1]  focus:border-[#b9b5b4] outline-none rounded w-full ' />
             </div>
             <div>
             <input type="email" name="email" id="" required placeholder="Enter your email" className=' px-3 py-2  border-2 border-[#e1ddd1]  focus:border-[#b9b5b4] outline-none rounded w-full ' defaultValue={users?.email}/>
             </div>
             <div>
             <input type="text" name="number" id="" required placeholder="Enter your phone" className=' px-3 py-2  border-2 border-[#e1ddd1]  focus:border-[#b9b5b4] outline-none rounded w-full ' />
             </div>
             <textarea  name="message" id="" required cols="12" rows="5"  className=' px-3 py-2  border-2 border-[#e1ddd1]  focus:border-[#b9b5b4] outline-none rounded w-full ' placeholder='Your message'></textarea>
             </div>
             <button className="bg-red-500 border-2 text-[#ffff] w-full mt-5 text-lg py-2 rounded">Order Confirm</button>
            </form>
    </div>
    );
};

export default CheekOut;