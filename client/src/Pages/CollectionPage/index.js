import React from "react";
import "./collection-page.styles.scss";
import { connect } from "react-redux";
import { selectShopCollection } from "../../redux/shop/shop.selector";
import CollectionItem from "../../Components/collection-item";

function CollectionPage({ collection }) {
  const { items, title } = collection;
  return (
    <div className="collection-page">
      <div className="title">{title}</div>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = (state, props) => ({
  collection: selectShopCollection(props.match.params.categoryId)(state),
});

export default connect(mapStateToProps, null)(CollectionPage);
