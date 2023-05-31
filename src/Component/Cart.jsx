import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import {BsArrowLeft} from "react-icons/bs"
import Style from "../cart.css"
import { useDispatch } from "react-redux"
import { removeFromCart,clearCart,decreaseCart, addToCart, getTotals} from "../Redux/cartSlice"
import { useEffect } from "react"

const Cart = () => {
  const cart=useSelector(state=>state.cart)
  const dispatch=useDispatch();

  
   useEffect(()=>{
   dispatch(getTotals());
    },[cart,dispatch])

  const handleRemoveFromCart=(cartItem)=>{
   dispatch(removeFromCart(cartItem))
  }
  const handleClearCart=()=>{
    dispatch(clearCart())
  }
  const handleDecreaseCart=(cartItem)=>{
    dispatch(decreaseCart(cartItem));
  }
  const handleIncreaseCart=(cartItem)=>{
    dispatch(addToCart(cartItem))
  }

  return (
    <div className="pt-28 cart-container">
      <h2>Shopping Cart</h2>
      {cart.cartItems.length=== 0 ? (<div className="cart-empty">
        <p>Your cart is currently empty</p>
        <div className="start-shopping">
        <Link to='/'>
        <BsArrowLeft className="inline-block"/> <span>Start Shopping</span>
         
        </Link>
        </div>
      </div>): (
        <div>
        <div className="title">
          <h3 className="product-title">Product</h3>
          <h3 className="price">Price</h3>
          <h3 className="Quantity">Quantity</h3>
          <h3 className="total">Total</h3>
          </div>
          <div className="cart-items">
              {cart.cartItems?.map(cartItem=>(
                <div className="cart-item" key={cartItem.id}>
                  <div className="cart-product">
                    <img src={cartItem.image} alt={cartItem.title}/>
                    <div>
                      <h3>{cartItem.title}</h3>
                     
                      <button onClick={()=>{handleRemoveFromCart(cartItem)}}>Remove</button>
                    </div>
                  </div>
                  <div className="cart-product-price">
                    {'$' + cartItem.price}
                  </div>
                  <div className="cart-product-quantity">
                    <button onClick={()=>{handleDecreaseCart(cartItem)}}>-</button>
                    <div className="count">
                      {cartItem.cartQuantity}
                    </div>
                    <button onClick={()=>{handleIncreaseCart(cartItem)}}>+</button>
                  </div>
                  <div className="cart-product-total-price">
                    ${cartItem.price * cartItem.cartQuantity}
                  </div>
               </div> 
              ))}
              <div className="cart-summary">
                <button className="clear-cart" onClick={()=>handleClearCart()}>Clear Cart</button>
                <div className="cart-checkout">
                  <div className="subtotal">
                    <span>Subtotal</span>
                    <span className="amount">${cart.cartTotalAmount}</span>
                  </div>
                  <p>Taxes and shipping calculated as checkout</p>
                  <Link to='/checkout'><button>Check Out</button></Link>
                  <div className="continue-shopping">
                   <Link to='/'>
                   <BsArrowLeft className="inline-block"/> <span>Continue Shopping</span>
                  
                  </Link>
                 </div>
                 </div>
              </div> 
          </div>
        </div>  
      )}
    </div>
  )
}

export default Cart
