import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { PropagateLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";

const Bookings = () => {
    const[bookings,setBookings]=useState([])
    const navigate=useNavigate()
    const [loader,setLoader]=useState(true)
    const {users}=useContext(AuthContext)
    const url=`https://carhub-server.vercel.app/bookings?email=${users?.email}`
    useEffect(()=>{
      fetch(url,{
        method:'GET',
        headers:{
          authorization:`Bearer ${localStorage.getItem('access token')}`
        }
      })
      .then(res=>res.json())
      .then(data=>{
        if(!data.error){
          setBookings(data)
        }
        else{
          navigate('/')
        }
        setLoader(false)
      })
    },[url,navigate])


    const handleDelete=(id)=>{
        console.log(id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
              fetch(`https://carhub-server.vercel.app/booking/${id}`,{
                method:'DELETE'
              })
              .then(res=>res.json())
              .then(data=>{
                if(data.deleteCount>1){
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                      )
                }
              })

             const remaining=bookings.filter(booking=>booking._id !== id )
             setBookings(remaining)
            }
          })
    }

    if(loader) { return <div className=" flex justify-center py-40 ">
    <PropagateLoader color="#36d7b7" />
   </div>
 }

    return (
        <div className="w-[80%] mx-auto mt-10">
           <h1 className="text-5xl text-center">Your orders {bookings?.length}</h1>  
              
           <div className="overflow-x-auto w-full">
  <table className="table w-full mt-10 z-0">
    {/* head */}
    <thead>
      <tr>
        <th>
         
        </th>
        <th>
         items
        </th>
        <th>Name</th>
        <th>Service</th>
        <th>Date</th>
        <th>Price</th>
        <th>Status</th>
        <th></th>
      </tr>
    </thead>
    { 
        bookings.map((booking,i)=>
        <tbody
        key={booking._id}
        >
            <tr>
              <th>
              <button onClick={()=>handleDelete(booking._id)} className="btn btn-circle">
<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
</button>
              </th>
              <th>
                    {i+1}
                </th>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-24 h-24">
                      <img src={booking.img}/>
                    </div>
                  </div>
                </div>
              </td>
              <td>
              <div className="font-bold">{booking.title}</div>
              </td>
              <td>{booking.date}</td>
              <th>
                <p className="btn btn-ghost btn-xs">${booking.price}</p>
              </th>
              <th>
                <button className='bg-[#FF3811] text-white  px-4 py-2 rounded font-semibold'>Pending</button>
              </th>
            </tr>
           
          </tbody>
         )
    }
    
  </table>
</div>
         </div>
    );
};

export default Bookings;




