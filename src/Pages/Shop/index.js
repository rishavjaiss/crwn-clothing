import React, { Component } from "react";
import SHOP_DATA from "../../assets/shop.data";
import CollectionPreview from "../../Components/collection-preview";

export default class Shop extends Component {
  constructor() {
    super();
    this.state = { collections: SHOP_DATA };
  }
  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map((collection) => (
          <CollectionPreview key={collection.id} {...collection} />
        ))}
      </div>
    );
  }
}
