import React from 'react'
import { useDispatch } from 'react-redux'
import {add} from '../store/cartSlice'

function Product({ product }) {

  const {title, price, image } = product

  const dispach = useDispatch()

  const handleAdd = (product) => {
    dispach(add(product))
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