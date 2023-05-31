import { products } from "../Data"
import { useDispatch } from "react-redux"
import { addToCart } from "../Redux/cartSlice"
import { useEffect,useState} from "react";

const Drink = () => {

  const [drinkmenu,setDrinkMenu]=useState([]);

  useEffect(()=>{
    const filteredDrink=products.filter((item)=>item.category==='drink');
    setDrinkMenu(filteredDrink)
  },[])
    const dispatch=useDispatch();
   
   const handleAddToCart=(item)=>{
        dispatch(addToCart(item));
 

   }
  return (
    <div className="section" id="drink"> 
    <h1 className="text-center font-bold text-5xl pb-16">Fresh Drink</h1>

    
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap:8 md:gap-4 px-4 ">
            {/* <div className="slide-track"> */}
            {drinkmenu.map((item)=>{
            return(
             
            
            <div key={item.id} className="border border-solid shadow-2xl px-4">
             <img src={item.image} className=" max-w-[320px] max-h-[200px]  pt-4 pb-2 bg-cover " alt=""/>
             <h3 className="text-xl px-2 font-semibold">{item.title}</h3>
             <div className="flex items-center justify-between mb-4">
             <h3 className="px-2">{'$' + item.price}</h3>
             <button className="btn" onClick={()=>handleAddToCart(item)}>Add to Cart</button>
             </div>
            </div>   
       
            
            ) 
        })}
            </div>

          {/* </div> */}

    </div>
  )
}

export default Drink
