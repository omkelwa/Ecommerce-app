import { useDispatch } from "react-redux"
import { decrement, increment, remove } from "../store/cart/cartSlice"

function CartItems({product}){ 

  const {title , image , price , id, cartQuantity } = product
  const dispatch = useDispatch()

  const handleRemove = (id)=>{
    dispatch(remove(id))
  }

  const handleDecrement = (id)=>{
    dispatch(decrement(id))
    if(cartQuantity === 1){
      dispatch(remove(id))
    }
  }

  const handleIncrement = (id)=>{
    dispatch(increment(id))
  }
  return (
    <div className="cart-item">
      <img src={image} alt="" />
      <span>
        <h1>{title}</h1>
        <h3>Rate : ${price}</h3>
        <h3>Qty :<button className="decrement" onClick={()=>handleDecrement(id)}>-</button> {cartQuantity} <button className="increment" onClick={()=>handleIncrement(id)} >+</button></h3>
      </span>
      <button className="remove-btn" onClick={()=>handleRemove(id)} >Remove Item</button>
    </div>
  )
}

export default CartItems