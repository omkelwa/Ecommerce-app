import { useDispatch } from "react-redux"
import { add } from "../store/cart/cartSlice"

function Product({product}) {
const {title , price , image} = product
const dispatch = useDispatch()
const handleAdd = (product)=>{
  dispatch(add(product))
}

  return (
    <div className="product">
      <img src={image} alt="" />
      <h1>{title}</h1>
      <span>
        <h3>Price : {price}</h3>
        <button className="add_cart" onClick={()=>handleAdd(product)} >Add to cart</button>
      </span>
    </div>
  )
}

export default Product
