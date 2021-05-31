import React from "react";
import CollectionItem from "../collection-item";

function CollectionPreview({ title, items }) {
  return (
    <div className="collection-preview">
      <h1>{title.toUpperCase()}</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        {items.map((item) => (
          <CollectionItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}

export default CollectionPreview;
