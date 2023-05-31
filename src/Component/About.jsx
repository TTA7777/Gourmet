import {GiSushis} from 'react-icons/gi'
import { MdOutlineRamenDining } from 'react-icons/md'
import { FaCoffee } from 'react-icons/fa'
import {BiDrink} from 'react-icons/bi'
import {motion} from 'framer-motion'


const About = () => {
    return (
        <div className="section">
          <div className="grid md:grid-cols-2 items-start justify-center gap-10">
            <motion.div initial={{x:'100vw'}} animate={{x:0}} transition={{delay:1,type:'spring',stiffness:10}} className='flex flex-col gap-2 md:gap-6'>
               <h3 className='font-bold md:text-2xl'>About Us</h3>
               <h1 className='md:text-4xl opacity-70 font-bold'>We Serve authentic <br/><span className='text-yellow-500 pt-2'>Delicious Food</span> to you  </h1>
               <p>We have running for 10 years to continue serving japanese food and western food <br/>
               to you  with authentic flavor that will continue forever with you.
             </p>
             <div className='flex gap-6 pt-6'>
                <GiSushis className=" bg-black p-2 text-white rounded-md " size={50} />
                <MdOutlineRamenDining className=" bg-black p-2 text-white rounded-md" size={50}/>
                <FaCoffee className=" bg-black p-2 text-white rounded-md" size={50}/>
                <BiDrink className=" bg-black p-2 text-white rounded-md" size={50}/>
             </div>
             <div className='pt-3'>
             <motion.button className='rounded-md btn' whileHover={{scale:1.1,color:'#ffeb3b',boxShadow:"0px opx 8px rgb(255,255,255"}}>Order Now</motion.button>
             </div>
            </motion.div>
            <div className="row-start-1">
                <img src="https://github.com/bedimcode/responsive-sushi-website/blob/main/assets/img/about-sushi.png?raw=true" alt=""/>
            </div>
          </div>
        </div>
      )
    }
    

export default About
