import  { useContext } from 'react';
import logo from '../../assets/images/login/login.svg'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import Social from '../Social/Social';
const Login = () => {
    const {handleLoginPassword}=useContext(AuthContext)
    const navigate=useNavigate()
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const handleSubmit=(event)=>{
        event.preventDefault()
        const form=event.target
        const email=form.email.value
        const password=form.password.value
        console.log(email,name,password);
        handleLoginPassword(email,password)
        .then(result=>{
            const user=result.user
           console.log(user);
            navigate(from, { replace: true });
            
        })
        .catch(error=>{
            console.log(error.message);
        })
    }

    return (
        <div className='flex flex-col py-20 md:flex-row w-[80%] gap-10 mx-auto'>
            <img className='w-full md:w-1/3' src={logo} alt="" />

            <div className="border-2 p-8 rounded-md w-full md:w-1/2">
            
                <h1 className="text-5xl font-bold text-center">Log in</h1>

                <form onSubmit={handleSubmit}>
                 <div className="w-full">
                 <div>
                 <p className="text-lg font-semibold  pb-2">Email</p>
                 <input type="email" name="email" id="" placeholder="Enter email" className=' px-3 py-2 border-2 border-[#e1ddd1]  focus:border-[#b9b5b4] outline-none rounded w-full '/>
                 </div>
                 <div>
                 <p className="text-lg font-semibold  pb-2">Password</p>
                 <input type="password" name="password" id="" placeholder="Enter password" className=' px-3 py-2  border-2 border-[#e1ddd1]  focus:border-[#b9b5b4] outline-none rounded w-full '/>
                 </div>
                </div>
                 <button className="bg-red-500 text-white  w-full mt-5 text-lg py-2 rounded">Log in</button>
                </form>
                <Social></Social>
                <p className='mt-10'>New User ? Please <Link className='text-red-600' to='/register'> Register</Link></p>
            </div>
        </div>
      
    );
};

export default Login;