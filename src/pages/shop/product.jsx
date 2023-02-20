import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
function Product({ product }) {
  const { addToCart, cartItems } = useContext(ShopContext);
  const cartItemAmount = cartItems[product.id];

  return (
    <div className="product">
      <img src={product.productImage} />
      <div className="description">
        <p>
          <b>{product.productName}</b>
        </p>
        <p>${product.price}</p>
      </div>
      <button className="addToCartBttn" onClick={() => addToCart(product.id)}>
        Add to Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
      </button>
    </div>
  );
}

export default Product;
