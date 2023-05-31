import React, { useState } from 'react'
import Head from '../Component/Helemet/Head'
import { Link } from 'react-router-dom';
import {createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../Firebase/firebase.config';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
   
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('')
    const [loading,setLoading]=useState(false)
    const navigate=useNavigate();
    const signup=async(e)=>{
      e.preventDefault()
      setLoading(true)

      try{
       const userCredential=   await createUserWithEmailAndPassword(auth,email,password)
     
       const user=userCredential.user
       console.log(user)
       navigate('/login')
       
      }
      catch(error){

      }
      
    }
    
  
  
    return (
    <div className='pt-28'>
     <Head title={'Signup'}></Head>
    <div className='m-auto text-center bg-black max-w-[400px] text-gray-700 p-8'>
    <h3 className='font-semibold text-white'>Signup</h3>
    <form className='flex flex-col gap-6 items-center pt-4 pb-4' onSubmit={signup}>
    
    <input type="email" placeholder='Enter your email'value={email}  onChange={(e)=>setEmail(e.target.value)} className='border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 w-[200px] md:w-[300px]'/>
    <input type="password" placeholder='Enter your password'value={password} onChange={(e)=>setPassword(e.target.value)} className='border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 w-[200px] md:w-[300px]'/>
    <button className='cursor-pointer p-2 bg-white rounded-md w-[200px] md:w-[300px]'>Sign Up</button>
    <p className='text-white'>Already have an account? <Link to='/login'><span className='text-blue-400'>Log in</span></Link></p>
    </form>

    </div>  
    </div>
  )
}

export default SignUp