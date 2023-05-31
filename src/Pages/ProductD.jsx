import {  useParams } from "react-router-dom"
import { products } from "../Data"
import {ImStarFull,ImStarHalf} from "react-icons/im"
import { useState } from "react"
import Style from '../productd.css'
import { useDispatch } from "react-redux"
import { addToCart } from "../Redux/cartSlice"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"


const ProductD = () => {
  const [tab,setTab]=useState('desc')
  const navigate=useNavigate();


  const dispatch=useDispatch();
   
   const handleAddToCart=(product)=>{
        dispatch(addToCart(product));
        navigate("/cart");
 

   }
 
 const {id}=useParams()

  const product=products.find((product)=>product.id===id)
  const {image,description,title, price ,avgRating,category}=product

  const relatedProduct=products.filter(item=>item.category==category)
  console.log(relatedProduct)
    return (
    <div className="section">
       <div className="grid md:grid-cols-2 gap-8 md:gap-12">
        <img src={image} className="bg-cover bg-center" alt=""/>
        <div className="flex flex-col mt-4">
          <h1 className="text-2xl font-bold mb-3">{title}</h1>
          <div className="flex gap-2">
            <span><ImStarFull/></span>
            <span><ImStarFull/></span>
            <span><ImStarFull/></span>
            <span><ImStarFull/></span>
            <span><ImStarHalf/></span>
            <h3 className="ml-3 opacity-60">{avgRating} Rating</h3>
          </div>
          <h1 className="text-2xl text-blue-900 mt-3 mb-5">Price : {price}</h1>
          <p className="opacity-70 leading-6 text-ellipsis ">{description}</p>
          <button className="bg-black text-white px-4 py-2 mt-6 max-w-[150px] rounded-md hover:rounded-none" onClick={()=>handleAddToCart(product)}>Add to Cart</button>
        </div>
        </div> 
      <div className="flex items-center px-4 py-2 mt-8 gap-6">
          <li className={`${tab==='desc' ? "active " :' '}`} onClick={()=>setTab('desc')}>Description</li>
          <li className={`${tab==='revi' ? "active " :' '}`} onClick={()=>setTab('revi')} >Review</li>
        </div>
      
       {tab==='desc'?<p className="text-[0.85rem] opacity-80 max-w-[600px] px-4 py-2">{description}</p>:
       <div className="px-32 mt-4">
       <form>
        <label for="username" className="block mb-3 text-[0.85rem] md:text-[1.025rem]">Leave Your Experience</label>
        <input type="text" name="username" placeholder="Enter your name" className="w-[200px] md:w-[500px] px-4 py-2 border border-b-2"/>
        <div className="flex gap-4  mt-4 mb-3">
          <span >1<ImStarFull className="inline-block cursor-pointer "/></span>
          <span>2<ImStarFull className="inline-block cursor-pointer"/></span>
          <span>3<ImStarFull className="inline-block cursor-pointer"/></span>
          <span>4<ImStarFull className="inline-block cursor-pointer"/></span>
          <span>5<ImStarFull className="inline-block cursor-pointer"/></span>
        </div>
        <input type="text" placeholder="Review Message-----"  className="w-[200px] md:w-[500px] h-[200px] px-4 py-2 border border-b-2 items-center"/>
        <div>
        <button className="bg-black text-white px-2 py-2 w-[150px] mt-6">Submit</button>
        </div>
       </form> 

       </div>
       }
       <div className="px-4 pt-16">
        <h2 className="pt-6 pb-6 font-semibold">You might Also like</h2>
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap:8 md:gap-4">
            {/* <div className="slide-track"> */}
        {relatedProduct.map((item)=>{
            return(
             
            
            <div key={item.id} className="border border-solid shadow-2xl px-4">
             <img src={item.image} className=" max-w-[320px] max-h-[200px]  pt-2 pb-2 bg-cover " alt=""/>
             <h3 className="text-xl px-2 font-semibold">{item.title}</h3>
             <div className="flex items-center justify-between mb-4">
             <h3 className="px-2">{'$' + item.price}</h3>
             <button className="btn">View</button>
             </div>
            </div>   
       
            
            ) 
        })}
         </div>
       </div>
    </div>
  )
}


export default ProductD
