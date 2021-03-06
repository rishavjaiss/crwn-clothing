import React from "react";
import "./cart-item.styles.scss";

function CartItem({ item }) {
  const { name, price, imageUrl, quantity } = item;
  return (
    <div className="cart-item">
      <img src={require(`../../assets${imageUrl}`).default} alt={name} />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
}

export default CartItem;
