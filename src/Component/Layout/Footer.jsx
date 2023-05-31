import {BsFacebook} from 'react-icons/bs'
import {FcGoogle} from 'react-icons/fc'
import { AiOutlineArrowUp } from 'react-icons/ai'
import {HiOutlineLocationMarker,HiOutlinePhone} from 'react-icons/hi'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div className="section">
      <div onClick={()=>{window.scrollTo(0,0)}} className='flex justify-center items-center m-auto bg-black max-w-[70px] text-2xl text-white rounded-full p-2 mb-4'>
      <AiOutlineArrowUp size={20}/>
      </div>
     
        <div className="grid px-2  md:grid-cols-4 gap-6  bg-size={30} black/5 pt-6">
        <div className="flex flex-col gap-4">
          <h1 className="items-start text-3xl font-semibold">Our Philosophy</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, placeat, <br/>corrupti quas facere aliquam nulla sint</p>
          <button className="items-start bg-black px-4 py-2 text-white max-w-[150px]">Shop Now</button>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="items-start text-3xl font-semibold">Contact</h1>
         <ul>
          <li className="pb-4">
            <BsFacebook size={25} className='inline-block mr-4 text-blue-500'/>
          <span className='hover:text-blue-300'>Gourmet</span>
          </li>
          <li className="pb-4">
            <FcGoogle size={25} className='inline-block mr-4 '/>
          <span className='hover:text-blue-300'>gourmetfood@gmail.com</span>
          </li>
          <li className="pb-4">
            <HiOutlinePhone size={25} className='inline-block mr-4 text-green-700'/>
          <span className='hover:text-blue-300'>+95979342585</span>
          </li>
          <li className='pb-4'>
          <HiOutlineLocationMarker  size={25} className='inline-block mr-4 text-pink-700'/>
          <span className='hover:text-blue-300'>No.3.A Road.Myanmar</span>
          </li>
          

         </ul>
        </div>
        <div className="flex flex-col gap-4 ">
          <h1 className="tems-start text-3xl font-semibold"> Avaliable Food in Shop</h1>
          <ul>
            <li className='mb-4  hover:text-blue-400'><a href="#japanesefood">Japanese Food</a></li>
            <li className='mb-4 hover:text-blue-400'><a href="#japanesefood">Western Food</a></li>
            <li className=' mb-4 hover:text-blue-400'><a href="#drink">Fresh Drink</a></li>
            <li className=' hover:text-blue-400'>Others delicious Food</li>
          </ul>
        </div>
        <div className="flex flex-col gap-4 ">
          <h1 className="tems-start text-3xl font-semibold"> Useful Link</h1>
          <ul>
            <li className='mb-4 hover:text-blue-400'><Link to='/'>Home</Link></li>
            <li className='mb-4 hover:text-blue-400'><Link to='/shop'>Shop</Link></li>
            <li className=' mb-4 hover:text-blue-400'><Link to='/cart'>Cart</Link></li>
            <li className='hover:text-blue-400'>Log in</li>
          </ul>
        </div>
         </div>
    </div>
  )
}

export default Footer
