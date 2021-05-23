import React from "react";
import "./collection-item.styles.scss";

export default function CollectionItem({ id, name, price, imageUrl }) {
  // backgroundImage: `url(../../assets${imageUrl})`
  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundColor: "beige" }} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
    </div>
  );
}
