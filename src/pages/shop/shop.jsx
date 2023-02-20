import React from "react";
import Product from "./product";
import { PRODUCTS } from "../../products";
import "./shop.css";
const Shop = () => {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>ShopKart</h1>
      </div>
      <div className="products">
        {PRODUCTS.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
