import { Navigation, Pagination,  A11y,Autoplay} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import {BsFillArrowLeftCircleFill,BsFillArrowRightCircleFill} from 'react-icons/bs'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import 'swiper/css/autoplay';
import About from './About';
import Service from './Service';
import Pmenu from './Pmenu';
import Othermenu from './Othermenu';
import image1 from '../asset/food1.png'
import Drink from './Drink';
import Testmonial from './Testmonial';
import Fdrink from "../asset/Drink/product-mini-6-100x90.png"
import Fdrink2 from "../asset/Drink/index-1-399x407.png"


const Home = () => {
    return (
        <div id="home" >
          <Swiper
          className='relative group' 
          modules={[Navigation, Pagination,  A11y,Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          navigation={{
            nextEl:'#next',
            prevEl:'#prev',
          }}
          autoplay={{duration:500}}
          pagination={{ clickable: true }}
          
          // onSwiper={(swiper) => console.log(swiper)}
          // onSlideChange={() => console.log('slide change')}
        >
          <SwiperSlide>
            <div className='grid md:grid-cols-2 gap-10 pt-48 items-center'>
            
            <div className='flex flex-col gap-6 px-24'>
            <h1 className='text-xl md:text-4xl md:font-bold'>Enjoy Delicious</h1>
            <div className='flex items-center gap-2'>
            
            <img src="https://github.com/bedimcode/responsive-sushi-website/blob/main/assets/img/home-sushi-title.png?raw=true" className="w-[50px] h-[50px]" alt=""/>
            <h1 className='text-xl md:text-4xl md:font-bold'> Sushi Food</h1>
            </div>
            <p className='text-[0.85rem] md:text-xl opacity-70'>Enjoy a good dinner with the best<br/>
            dishes in the resturant and improve<br/> your day
            </p>
            <div className='flex items-center'>
            <a href="#" className='border-solid bg-black text-white rounded-2xl p-2 md:p-4 text-[0.65rem] md:text-[1rem]'>Order Now</a>
            </div>
            </div>
            <div>
            <img className='bg-cover bg-center relative ' src="https://github.com/bedimcode/responsive-sushi-website/blob/main/assets/img/home-sushi-rolls.png?raw=true" alt=""/>
            </div>
    
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className='grid md:grid-cols-2 gap-10 pt-48 items-center'>
            
            <div className='flex flex-col gap-6 px-28'>
            <h1 className='text-xl md:text-4xl md:font-bold'>Enjoy Delicious</h1>
            <div className='flex items-center gap-2'>
            
            <img src={image1} className="w-[50px] h-[50px]" alt=""/>
            <h1 className='text-[0.85rem] md:text-4xl md:font-bold'> Western  Food</h1>
            </div>
            <p className='text-[0.85rem] md:text-xl opacity-70'>Enjoy a good dinner with the best<br/>
            dishes in the resturant and improve<br/> your day
            </p>
            <div className='flex items-center'>
            <a href="#" className='border-solid bg-black text-white rounded-2xl p-2 md:p-4 text-[0.65rem] md:text-[1rem]'>Order Now</a>
            </div>
            </div>
            <div>
            <img className='bg-cover bg-center relative rounded-full' src={image1} alt=""/>
            </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className='grid md:grid-cols-2 gap-10 pt-48 items-center'>
            
            <div className='flex flex-col gap-6 px-24'>
            <h1 className='text-xl md:text-4xl md:font-bold'>Enjoy Delicious</h1>
            <div className='flex items-center gap-2'>
            
            <img src={Fdrink} className="w-[50px] h-[50px]" alt=""/>
            <h1 className='text-xl md:text-4xl md:font-bold'> Fresh Drink </h1>
            </div>
            <p className='text-[0.85rem] md:text-xl opacity-70'>Enjoy a good dinner with the best<br/>
            dishes in the resturant and improve<br/> your day
            </p>
            <div className='flex items-center'>
            <a href="#" className='border-solid bg-black text-white rounded-2xl p-2 md:p-4 text-[0.65rem] md:text-[1rem]'>Order Now</a>
            </div>
            </div>
            <div>
            <img className='bg-cover bg-center relative' src={Fdrink2} alt=""/>
            </div>
            </div>
          </SwiperSlide>
          <div className='absolute z-10 top-[50%] text-white w-[40px] h-[40px] group-hover:left-0 -left-[23rem] bg-black grid place-items-center' id="prev">
            <BsFillArrowLeftCircleFill/>
          </div>
          <div className='absolute z-10 top-[50%] text-white w-[40px] h-[40px] group-hover:right-0 -right-[23rem] bg-black grid place-items-center' id="next">
            <BsFillArrowRightCircleFill/>
            
          </div>
         
        </Swiper>
        <About/>
        <Service/>
        <Pmenu/>
        <Othermenu/>
        <Drink/>
        <Testmonial/>
        </div>
      )
    }
    

export default Home
