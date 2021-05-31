import React from "react";
import "./collection-item.styles.scss";
import CustomButton from "../custom-button";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cartActions";

function CollectionItem({ item, addItem }) {
  const { name, price, imageUrl } = item;
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
      <CustomButton inverted onClick={() => addItem(item)}>
        ADD TO CART
      </CustomButton>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
