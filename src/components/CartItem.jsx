import { useDispatch } from "react-redux"
import { remove } from "../store/cart/cartSlice"

function CartItems({product}){ 

  const {title , image , price , id } = product
  const dispach = useDispatch()

  const handleRemove = (id)=>{
    dispach(remove(id))
  }

  return (
    <div className="cart-item">
      <img src={image} alt="" />
      <span>
        <h1>{title}</h1>
        <h3>Rate : ${price}</h3>
        <h3>Qty : 1</h3>
      </span>
      <button className="remove-btn" onClick={()=>handleRemove(id)} >Remove Item</button>
    </div>
  )
}

export default CartItems