import { useSelector } from "react-redux";
import CartItems from "../components/CartItem";

function Cart() {

  const cartProducts = useSelector(state => state.cart)
  
  const totalPrice = cartProducts.reduce((p , c)=>{
    return p + c.price
  },0)
  return (
    <>
      <div className="cart-container">
        <div className="cart-items">
        {
          cartProducts.map(product => <CartItems key={product.id} product={product}/>)
        }
        </div>
        <div className="bill-section">
          <h1>
            Total Amount : <br /> <br /> ${totalPrice}
          </h1>
          <button className="pay-btn">Pay Now</button>
        </div>
      </div>
    </>
  );
}

export default Cart;
