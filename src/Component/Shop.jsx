
import { products } from '../Data'
import { useState } from 'react'
import {BsSearch} from 'react-icons/bs'
import { Link } from 'react-router-dom'
const Shop = () => {
  
  const [food,setFoods]=useState(products)

  const filterType=(category)=>{
    setFoods(products.filter((item)=>{
      return item.category==category;
    }))
  }

  const handleSearch=e=>{
    const searchTerm=e.target.value
    const searchProducts=products.filter(item=>item.title.toLowerCase().includes(searchTerm.toLowerCase()))
   
   {searchProducts?(setFoods(searchProducts)):(<h1 className='text-center text-blue-900 text-6xl'>No Products are founded</h1>)} 
    
  }


  return (
    <div className="pt-28">
     <img src="https://images.unsplash.com/photo-1483137140003-ae073b395549?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Zm9vZCUyMHdlYnNpdGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" className=" bg-center bg-contain w-full max-h-[300px] relative"/>
     <h1 className="absolute top-[30%] left-[35%] font-semibold text-3xl">Enjoy Delicious food and fresh drink</h1>
     <div className='grid md:grid-cols-2 gap-6 justify-between '>
      <div className='flex px-8 mt-6'>
        <button className="mr-3 btn" onClick={()=>setFoods(products)}>All</button>
        <button className="mr-3 btn" onClick={()=>filterType('Japanese Food')}>Japanese Food</button>
        <button className="mr-3 btn" onClick={()=>filterType('Western Food')}>Western Food</button>
        <button  className='btn' onClick={()=>filterType('drink')}>Fresh Drink</button>
      </div>
      <div className='flex items-center justify-between border border-b-200 border-r-2 pr-2 ml-6 mt-6'>
        <input type="text" className='border-none outline-none bg-transparent text-gray-900 p-2 rounded-xl w-[300px]'onChange={handleSearch} placeholder='Search------'/>
        <BsSearch className='inline-block cursor-pointer'/>

      </div>
      </div>
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-8 pt-24 px-6 '>

     {  food.map((item,index)=>{
    return(
    <div key={index} className='border shadow-lg rounded-lg hover:scale-105 duration-300 gap-12 mb-8 '
     >
       <img src={item.image} alt={item.title} className='bg-contain p-4'/>
       <div className='flex justify-between px-2 py-4'>
         <p className='font-bold px-2 text-xl'>{item.title}</p>
         <p>
           <span className='bg-orange-500 text-white p-1 rounded-full'>
             {'$' + item.price}
           </span>
         </p>
       </div>
       <button className='flex items-center justify-center mx-auto w-[150px]  p-2 bg-black text-white rounded-xl mb-2 hover:rounded-none hover:underline-offset-4  hover:text-blue-600 hover:bg-white '><Link to={`/shop/${item.id}`}>Order Now</Link></button>
     </div>

)

})}

     </div>
    </div>
  )
}

export default Shop
