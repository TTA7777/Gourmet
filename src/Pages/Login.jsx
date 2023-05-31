import React, { useState } from 'react'
import Head from '../Component/Helemet/Head'
import { Link } from 'react-router-dom';
import { signInWithEmailAndPassword, GoogleAuthProvider,signInWithPopup } from 'firebase/auth';
import { auth } from '../Firebase/firebase.config';
import {toast} from 'react-toastify'
import { useNavigate } from 'react-router-dom';
import GoogleButton  from 'react-google-button';

const Login = () => {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('')
    const [loading,setLoading]=useState(false)
    const navigate=useNavigate();
 
    const signin=async(e)=>{
      e.preventDefault()
      setLoading(true)
      try{
      const userCredential=  await signInWithEmailAndPassword(auth,email,password)
      const user=userCredential.user
      setLoading(false)
      toast.success('Success login')
      navigate('/checkout')
    }
      catch(error){
        setLoading(false)
        toast.error(error.message)

      }


  }

  const signInWithGoogle=async(e)=>{
    e.preventDefault()
    try{
      const provider=new GoogleAuthProvider();
      await signInWithPopup(auth,provider)
      toast.success('Success login')
      navigate('/checkout')
    }
    catch(error){
    toast.error(error.message)
    }
  }
  
    return (
    <div className='pt-28'>
     <Head title={'login'}></Head>
    <div className='m-auto text-center bg-black max-w-[400px] text-gray-700 p-8'>
    <h3 className='font-semibold text-white'>Login</h3>
    <form className='flex flex-col gap-8 items-center pt-4 pb-4' onSubmit={signin}>
    <input type="email" placeholder='Enter your email'value={email}  onChange={(e)=>setEmail(e.target.value)} className='border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 w-[200px] md:w-[300px]'/>
    <input type="password" placeholder='Enter your password'value={password} onChange={(e)=>setPassword(e.target.value)} className='border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 w-[200px] md:w-[300px]'/>
    <button className='cursor-pointer p-2 bg-white rounded-md w-[200px] md:w-[300px]' type="submit">Login</button>
    <p className='text-white'>Dont't you have an account?{" "} <Link to='/signup'> <span className='text-blue-400'>Sign Up</span> </Link></p>
    

    </form>
    <div className='m-auto max-w-[240px]'>
      <GoogleButton onClick={signInWithGoogle}/>
    </div>
  
    </div>  
    </div>
  )
}

export default Login
