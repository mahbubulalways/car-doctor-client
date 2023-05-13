import  { useContext } from 'react';
import logo from '../../assets/images/login/login.svg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import Social from '../Social/Social';
const Register = () => {
    const {handleCreateUserPassword}=useContext(AuthContext)
    const handleSignUp=(event)=>{
        event.preventDefault()
        const form=event.target
        const email=form.email.value
        const name=form.name.value
        const password=form.password.value
        console.log(email,name,password);
        handleCreateUserPassword(email,password)
        .then(result=>{
            console.log(result.user);
        })
        .catch(error=>{
            console.log(error.message);
        })
    }
    return (
        <div className='flex flex-col py-20 md:flex-row w-[80%] gap-10 mx-auto'>
        <img className='w-full md:w-1/3' src={logo} alt="" />

        <div className="border-2 p-8 rounded-md w-full md:w-1/2">
        
            <h1 className="text-5xl font-bold text-center">Sign Up</h1>

            <form onSubmit={handleSignUp}>
             <div className="w-full">
             <div>
             <p className="text-lg font-semibold pb-2">Name</p>
             <input type="text" name="name" id="" placeholder="Enter  name" className=' px-3 py-2 outline-none rounded w-full border-2 border-[#e1ddd1]  focus:border-[#b9b5b4]'/>
             </div>
             <div>
             <p className="text-lg font-semibold  pb-2">Email</p>
             <input type="email" name="email" id="" placeholder="Enter email" className=' px-3 py-2 border-2 border-[#e1ddd1]  focus:border-[#b9b5b4] outline-none rounded w-full '/>
             </div>
             <div>
             <p className="text-lg font-semibold  pb-2">Password</p>
             <input type="password" name="password" id="" placeholder="Enter password" className=' px-3 py-2  border-2 border-[#e1ddd1]  focus:border-[#b9b5b4] outline-none rounded w-full '/>
             </div>
            </div>
             <button className="bg-red-500 text-white  w-full mt-5 text-lg py-2 rounded">Sign up</button>
            </form>
            <Social></Social>
            <p className='mt-10'>Already Have an Account ? Please <Link className='text-red-600' to='/login'> Log in</Link></p>
        </div>
    </div>
  
    );
};

export default Register;