import React from "react";
import "./collection-item.styles.scss";
import CustomButton from "../custom-button";

export default function CollectionItem({ id, name, price, imageUrl }) {
  return (
    <div className="collection-item">
      <div className="image-container">
        <img
          className="image"
          src={require(`../../assets${imageUrl}`).default}
          alt={name}
        />
      </div>
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton inverted>ADD TO CART</CustomButton>
    </div>
  );
}
