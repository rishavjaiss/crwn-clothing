import React from "react";
import "./checkout-item.styles.scss";

function CheckoutItem({ cartItem }) {
  const { name, price, quantity, imageUrl } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={require(`../../assets${imageUrl}`).default} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">{quantity}</span>
      <span className="price">{price}</span>
      <div className="remove">&#10005;</div>
    </div>
  );
}

export default CheckoutItem;
