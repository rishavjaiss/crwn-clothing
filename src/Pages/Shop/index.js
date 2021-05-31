import React from "react";
import { Route } from "react-router-dom";
import CollectionsOverview from "../../Components/collections-overview";
import CollectionPage from "../CollectionPage";

function Shop({ match }) {
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/:categoryId`} component={CollectionPage} />
    </div>
  );
}

export default Shop;
