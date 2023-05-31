
// import About from "./Component/About"

import Homep from "./Pages/Homep"
// import NavIcon from "./Component/NavIcon"
// import Pmenu from "./Component/Pmenu"
// import Service from "./Component/Service"
import "./Redux/cartSlice"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { Routes,Route } from "react-router-dom"



import Shopp from "./Pages/Shopp"
import Cartp from "./Pages/Cartp"
import Header from "./Component/Layout/Header"
import Footer from "./Component/Layout/Footer"
import ProductD from "./Pages/ProductD"
import CheckOut from "./Pages/CheckOut"
import Login from "./Pages/Login"
import SignUp from "./Pages/SignUp"
import Protectedroute from "./Protectedroute"






const App = () => {
  return (
   <div className="font-poppins bg-gray-100" >
   <ToastContainer/>
   <Header/>
   {/* <NavIcon/> */}
   <Routes>
    <Route path='/' element={<Homep/>}>Home</Route>
    <Route path='/shop' element={<Shopp/>}>Shop</Route>
    <Route path='/cart'element={<Cartp/>}>Cart</Route>
    <Route path='/shop/:id' element={<ProductD/>}>Product</Route>
    <Route path='/checkout' element={<Protectedroute><CheckOut/></Protectedroute>}>CheckOut</Route>
    <Route path='/login' element={<Login/>}>CheckOut</Route>
    <Route path='/signup' element={<SignUp/>}>CheckOut</Route>
   </Routes>
   <Footer/>
  

   
   
    </div>
  )
}

export default App
