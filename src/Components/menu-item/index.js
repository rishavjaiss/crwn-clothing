import React from "react";
import "./menu-item.styles.scss";

export default function MenuItem({ title, imageUrl }) {
  return (
    <div className="menu-item">
      <div
        style={{ backgroundImage: `url(${imageUrl})` }}
        className="background-image"
      />
      <div className="content">
        <h1 className="title">{title}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
}
