import React, { useEffect } from "react";
import Product from "./Product";
import { fetchData, STATUSES } from "../store/ProductSlice";
import { useDispatch, useSelector } from "react-redux";



function ProductContainer() {

  const {data : Products , status} = useSelector(state => state.product)

  const dispatch = useDispatch()

  // const Api = "https://fakestoreapi.com/products"

  // useEffect(() => {
  //   dispatch(fetchData(Api))
  // }, []) 

 if(status === STATUSES.LOADING){
     return <h1>Loading...</h1>
 }

 if(status === STATUSES.ERROR){
  return <h1>Something Went Wrong</h1>
 }

  


  return (
    <div className="container">
      <h1 className="all-products-title">All Products</h1>
      {
        Products.map(product => <Product key={product.id} product={product} />)
      }
    </div>
  );
}

export default ProductContainer;
