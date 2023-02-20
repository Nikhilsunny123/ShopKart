import React, { useContext } from "react";
import { PRODUCTS } from "../../products";

import { ShopContext } from "../../context/shop-context";
import CartItem from "./cartitem";
import "./cart.css";
import { useNavigate } from "react-router-dom";
const Cart = () => {
  const navigate = useNavigate();
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  console.log(totalAmount);
  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cartItems">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem key={product.id} data={product} />;
          }
        })}
      </div>
      {totalAmount > 0 ? (
        <div className="checkout">
          <p>SubTotal :${totalAmount}</p>

          <button onClick={() => navigate("/")}>Continue shopping</button>

          <button>CheckOut</button>
        </div>
      ) : (
        <p>Cart is Empty</p>
      )}
    </div>
  );
};

export default Cart;
