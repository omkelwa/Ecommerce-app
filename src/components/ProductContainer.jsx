import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

function ProductContainer() {

  const [products, setProducts] = useState([])

  const getProducts = async() =>{
    const res = await fetch(`https://fakestoreapi.com/products`)
    const data = await res.json()
    setProducts(data)
  }
  useEffect(()=>{
    getProducts()
  },[])
  return (
    <div className="container">
      <h1 className="all-products-title">All Products</h1>
      {
        products.map(product =><ProductCard key={product.id} product={product}/>)
      }
    </div>
  );
}

export default ProductContainer;
