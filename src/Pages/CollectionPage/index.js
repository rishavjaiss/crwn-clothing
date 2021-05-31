import React from "react";
import "./collection-page.styles.scss";
import CollectionPreview from "../../Components/collection-preview";
import { connect } from "react-redux";
import { selectShopCollection } from "../../redux/shop/shop.selector";

function CollectionPage({ collection }) {
  console.log(collection);
  return (
    <div className="collection-page">
      <CollectionPreview title={collection.title} items={collection.items} />
    </div>
  );
}

const mapStateToProps = (state, props) => ({
  collection: selectShopCollection(props.match.params.categoryId)(state),
});

export default connect(mapStateToProps, null)(CollectionPage);
