import { service } from "../Data"
import { motion } from "framer-motion"

const Service = () => {
  return (
    <div className="section">
        <div className="items-center text-center ">
            <h1 className="text-3xl mb-3 font-semibold">Our Special Service</h1>
            <p className="opacity-70 ">You can get a lot of advantages,starting from the ease of ordering 
               <br/>and buying and free shipping</p>
        </div>
        <div className="grid md:grid-cols-4 gap-6 md:gap-10 pt-20 px-8 m-auto ">
         {service.map((item,index)=>{
            return(
                <motion.div whileHover={{scale:1.1}} className="flex flex-col shadow-md  text-center  cursor-pointer  "  key={index}>
                    <div className=" flex justify-center items-center mx-auto bg-black  mb-4 text-2xl text-white rounded-full p-4 ">
                       {item.icon}
                    </div>
                    <h3 className="font-semibold text-[0.85rem]">{item.text}</h3>
                    <p className="px-6 py-1 opacity-70 mb-4">{item.description}</p>

                </motion.div>
            )

         })}
        </div>
      
    </div>
  )
}

export default Service
