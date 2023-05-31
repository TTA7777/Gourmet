import { profile } from "../Data"

const Testmonial = () => {
  return (
    <div className="section">
      <h1 className="text-5xl text-center font-semibold">What Customer Say?</h1>
    <div className="grid md:grid-cols-4 gap-6 md:gap-1 pt-20 px-4  group">
        {profile.map((item,index)=>{
            return(
                <div className="bg-black/5 max-w-[300px] p-8 rounded-xl group-hover:blur-sm hover:!blur-none" key={index}>
                <img src={item.image} alt="" className="rounded-full bg-cover mx-auto"/>
                <h3 className="font-semibold text-xl pt-3 px-2 text-center">{item.name}</h3>
                <p className="leading-5  p-2 font-light ">{item.review}</p>
                </div>
            )
           

        })}
    </div>
    
    
    </div>

  )
}

export default Testmonial
