import { useEffect } from 'react'
import { useState } from 'react'
import {AiOutlineClose, AiOutlineMenu, AiOutlineShoppingCart} from 'react-icons/ai'
import { useSelector } from 'react-redux'
import { NavLink,Link } from 'react-router-dom'
import {FaUserCircle} from 'react-icons/fa'
import Style from '../../header.css'
import useAuth from '../../Custom-hook/useAuth'
import { useRef } from 'react'
import { signOut } from 'firebase/auth'
import { auth } from '../../Firebase/firebase.config'
import {toast} from "react-toastify"


const Header = () => {
  const {cartTotalQuantity}=useSelector(state=>state.cart)
  const [scroll,setScroll]=useState(false)
  const [menu,setMenu]=useState(false)
  const {currentUser}=useAuth()
    const profileActionRef=useRef(null)
  console.log(currentUser)

  useEffect(()=>{
    window.addEventListener("scroll",()=>{
      setScroll(window.scrollY>20)
    })

  },[])

  const toggleProfileActions=()=>profileActionRef.current.classList.toggle('showprofile')
   
  const logout=()=>{
    signOut(auth).then(()=>{
     toast.success(`Logged Out`)
    }).catch(err=>{
    toast.error(err.message)
    })
  }
  
  return (
    <div className={`${scroll?"bg-gray-100 shadow-sm ":""} fixed top-0 left-0 w-full z-20`}>
    <div className='relative p-4 container mx-auto'>
      <div className=' flex items-center justify-between '>
        <div className='flex items-center' onClick={()=>setMenu(!menu)}>
          <AiOutlineMenu size={35} className='cursor-pointer'/>
          <h3 className='font-semibold text-xl md:text-3xl'>GOURMET</h3>
        </div>
        
        <div className='hidden md:flex'>
          <ul className='flex'>
            <li className='px-4'><NavLink to='/' style={({isActive})=>{return {color:isActive?"blue":"black"}}}>Home</NavLink></li>
            <li className='px-4'><NavLink to='/shop' style={({isActive})=>{return {color:isActive?"blue":"black"}}}>Shop</NavLink></li>
            <li className='px-4'><NavLink to='/cart' style={({isActive})=>{return {color:isActive?"blue":"black"}}}>Cart</NavLink></li>
          </ul>
        </div>
        <div className='flex justify-between items-center relative'>
           <div className='bg-black text-white w-12 h-12 p-3 rounded-xl relative'>
           <Link to='/cart'><AiOutlineShoppingCart size={25}/></Link> 
           <div className='absolute top-2 right-1 w-4 h-4 bg-red-400 rounded-xl items-center text-[0.65rem] text-center'>
             {cartTotalQuantity}
            </div>
           </div>
           <div className='  w-6 h-6  items-center cursor-pointer ml-2'>
           <FaUserCircle size={30} onClick={toggleProfileActions}/>
           <div className='profile-action' ref={profileActionRef} onClick={toggleProfileActions}>
            {currentUser?<span onClick={logout}>Log Out</span>:
            <div className='flex flex-col justify-start'>
            <Link to='/signup' className='text-blue-400 hover:text-white'>Sign Up</Link>
            <Link to='/login'  className='text-blue-400 hover:text-white'>Log in</Link>
            </div>}
           </div>
            </div>
            
        </div>
        {/* Overlay */}
      {menu?<div className='bg-gray-600/20 fixed w-full h-screen z-10 top-0 left-0'></div>:''}  
          <div className={menu?'fixed top-0 left-0 h-screen w-[300px] bg-black/50 z-10 duration-300':'fixed top-0 left-[-100%] h-screen w-[300px] bg-black/50 z-10 duration-300'}>
              <AiOutlineClose size={35} className='absolute top-4 right-4 cursor-pointer text-white' onClick={()=>setMenu(!menu)}/>
           <ul className='flex flex-col top-[20%] left-6 absolute'>
            <li className='p-4 text-2xl'><NavLink to='/' style={({isActive})=>{return {color:isActive?"blue":"white"}}}>Home</NavLink></li>
            <li className='p-4 text-2xl'><NavLink to='/shop' style={({isActive})=>{return {color:isActive?"blue":"white"}}}>Shop</NavLink></li>
            <li className='p-4 text-2xl'><NavLink to='/cart' style={({isActive})=>{return {color:isActive?"blue":"white"}}}>Cart</NavLink></li>
          </ul>
          </div>
        </div>
        
      </div>


    </div>
  )

}

export default Header
