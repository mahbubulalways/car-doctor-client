import React, { useContext } from 'react';
import google from '../../assets/google.png'
import git from '../../assets/git.png'
import { AuthContext } from '../../Provider/AuthProvider';

const Social = () => {
    const {handleGoogle}=useContext(AuthContext)
    const createGoogle=()=>{
        handleGoogle()
        .then(result=>{
            const user=result.user
        })
        .catch(error=>{
          const err=error.message
        })
    }
    return (
        <div>
            <div className="mt-5 flex flex-col w-full border-opacity-50">
  <button onClick={createGoogle}>
  <div className="grid  card border-2 py-1 border-[#FF3811] rounded-box place-items-center">
    <div className='flex items-center gap-5'>
     <img className='w-10' src={google} alt="" />
    <p className='text-lg font-semibold'>Continue with Google</p>
  </div>
  </div>
  </button>
  <div className="divider">OR</div>
  <button>
  <div className="grid py-1 card border-2 border-[#FF3811] rounded-box place-items-center">
  <div className='flex items-center gap-5'>
  <img className='w-10' src={git} alt="" />
    <p className='text-lg font-semibold'>Continue with Github</p>
  </div>
  </div>
  </button>
</div>
        </div>
    );
};

export default Social;