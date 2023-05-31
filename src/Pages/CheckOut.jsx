import { useSelector } from 'react-redux'
import Head from '../Component/Helemet/Head'
import { Link } from 'react-router-dom'

const CheckOut = () => {
    const {cartTotalAmount,cartTotalQuantity}=useSelector(state=>state.cart)
  return (
    <div className="pt-28">
    <Head title={'checkout'}></Head>
    <img src="https://images.unsplash.com/photo-1483137140003-ae073b395549?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Zm9vZCUyMHdlYnNpdGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" className=" bg-center bg-contain w-full max-h-[300px] relative"/>
     <h1 className="absolute top-[30%] left-[45%] font-semibold text-3xl">Check Out</h1>
    <div className='flex flex-col md:flex-row gap-40 items-start mt-6 '>
        <div className='ml-6'>
            <h3 className='text-[0.95rem] font-semibold mb-3 ml-2'>Billing Information</h3>
        <form className='flex flex-col gap-4'>
            <input type="text" placeholder='Enter your name' className='border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 w-[200px] md:w-[600px]'/>
            <input type="email" placeholder='Enter your email' className='border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 w-[200px]  md:w-[600px]'/>
            <input type="text" placeholder='Phone Number' className='border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 w-[200px] md:w-[600px]'/>
            <input type="text" placeholder='Street Address' className='border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 w-[200px] md:w-[600px]'/>
            <input type="text" placeholder='City' className='border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 w-[200px] md:w-[600px]'/>
            <input type="text" placeholder='Postal Code' className='border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 w-[200px] md:w-[600px]'/>
            <input type="text" placeholder='Country' className='border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 w-[200px] md:w-[600px]'/>
            
        </form>
        </div>
        <div className='flex flex-col gap-4 mt-8 mr-2 bg-black text-white px-8 py-4 w-[300px]'>
         <span  className='text-[0.85rem] md:text-xl  '>Total Qty : {cartTotalQuantity} </span>
         <span className='text-[0.85rem] md:text-xl  '>Subtotal : {'$' + cartTotalAmount} </span>
         <span className='text-[0.85rem] md:text-xl  '>Shipping : $0</span>
       
         <span className='text-[0.85rem] md:text-xl  '>Free Shipping</span>
         <span className='text-[0.85rem] md:text-xl  '>Total Cost : {'$' +cartTotalAmount} </span>
         <button className='bg-white mt-2 text-black max-w-[130px] p-2 rounded-md cursor-pointer' onClick={()=>{alert("Thank you for ordering !")}}>Place an Order</button>

        </div>
    </div>
    </div>
  )
}

export default CheckOut
