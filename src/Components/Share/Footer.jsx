import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'

const Footer = () => {
    return (
        <div>
          <div className='bg-black'>
            <div className=' w-[90%] mx-auto'>
            <div className='text-gray-300  py-12'>
           <div className=' grid grid-cols-2 md:grid-cols-4 gap-8 '>
           <div className='space-y-3'>
               <div className='w-max'>
               <img src={logo} alt="" />
                <h1 className='text-white text-center font-semibold text-xl'>Car Doctor</h1>
               </div>
                <p>Edwin Diaz is a software and web technologies engineer, a life coach trainer who is also a serial . </p>
                
            </div>
            <div className='flex flex-col space-y-1 mx-auto'>
                <h1 className='text-xl font-semibold'>About </h1>
                <Link>Home</Link>
                <Link>Service</Link>
                <Link>Contact</Link>
            </div>
            
            <div className='flex flex-col  space-y-1 mx-auto '>
                <h1 className='text-xl font-semibold'>Company</h1>
                <Link>Why Car Doctor </Link>
                <Link>About</Link>
            
            </div>
            <div className=' space-y-1 mx-auto'>
            <h1 className='text-xl font-semibold'>Support</h1>
                <p>Support Center</p>
                <p>Feedback</p>
                <p>Accessibility</p>
                <div className='flex gap-3 items-center pt-2'>
                
                
                {/* <Link> <img src={facebook} alt="" /></Link>  
                <Link> <img src={twitter} alt="" /></Link>  
                <Link> <img src={youtube} alt="" /></Link>   */}
                </div>
            </div>
           </div>
          
        </div>
        <div className='border-t-2 '>
        <div className='text-gray-300  flex justify-between py-12'>
        <h1 className=''>@2023 CarDoctor</h1>
        <h1>Powered by CarDoctor</h1>
        </div>

        </div>
        </div>
        </div>
        </div>
    );
};

export default Footer;