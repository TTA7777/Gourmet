import { createSlice } from "@reduxjs/toolkit";
import {toast} from "react-toastify"
const initialState={
     cartItems:localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [],
     
      cartTotalAmount:0,
      cartTotalQuantity:0
}

const cartSlice=createSlice({
    name:'cart',
    initialState,
    reducers:{
    addToCart(state,action){
        const itemIndex= state.cartItems.findIndex(item=>item.id===action.payload.id)
        if(itemIndex>=0){
            state.cartItems[itemIndex].cartQuantity+=1
            
            toast.info(`increased ${state.cartItems[itemIndex].title} product quantity`,{
                position:"top-right",
            })
        }
        else{
            const tempItem={...action.payload,cartQuantity:1}
           
            state.cartItems.push(tempItem);
           
            toast.success(` ${action.payload.title} added to cart`,{
                position:"top-right",
            })

        }
        localStorage.setItem("cartItems",JSON.stringify(state.cartItems))
    },
    removeFromCart(state,action){
      const nextCartItems=  state.cartItems.filter(cartItem=>cartItem.id !==action.payload.id)
      state.cartItems=nextCartItems;
      localStorage.setItem("cartItems",JSON.stringify(state.cartItems))
    },

    decreaseCart(state,action){
     const itemIndex =  state.cartItems.findIndex((cartItem)=>cartItem.id === action.payload.id)
    if(state.cartItems[itemIndex].cartQuantity>1){
        state.cartItems[itemIndex].cartQuantity-=1;
        toast.info(`Decreased ${state.cartItems[itemIndex].title} product quantity`,{
            position:"top-right",
        })
    }
    else if(state.cartItems[itemIndex].cartQuantity===1){
        const nextCartItems=  state.cartItems.filter(cartItem=>cartItem.id !==action.payload.id)
        state.cartItems=nextCartItems;
       
    }
    localStorage.setItem("cartItems",JSON.stringify(state.cartItems))
    },
    clearCart(state,action){
        state.cartItems=[];
        localStorage.setItem("cartItems",JSON.stringify(state.cartItems))
    },
    getTotals(state,action){
        const {total,quantity}=state.cartItems.reduce((cartTotal,cartItem)=>{
            const {price,cartQuantity}=cartItem
            const itemTotal=price*cartQuantity

            cartTotal.total+=itemTotal
            cartTotal.quantity+=cartQuantity
            return cartTotal;

        },{
            total:0,
            quantity:0

        })

        state.cartTotalAmount=total;
        state.cartTotalQuantity=quantity;
    }
   
    
    }
})

export default cartSlice.reducer
export const {addToCart,removeFromCart,decreaseCart,clearCart,getTotals}=cartSlice.actions;