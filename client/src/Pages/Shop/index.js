import React, { Component } from "react";
import { Route } from "react-router-dom";
import { default as CollectionsOverview } from "../../Components/collections-overview";
import { default as CollectionPage } from "../CollectionPage";
class Shop extends Component {
  render() {
    const { match } = this.props;
    return (
      <div className="shop-page">
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route path={`${match.path}/:categoryId`} component={CollectionPage} />
      </div>
    );
  }
}

export default Shop;
