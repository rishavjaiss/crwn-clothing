import React from "react";
import "./cart-dropdown.styles.scss";
import CustomButton from "../custom-button";
import CartItem from "../cart-item";
import { connect } from "react-redux";
import { selectedCartItems } from "../../redux/cart/cart.selector";

function CartDropdown({ cartItems }) {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </div>
      <CustomButton type="button" inverted>
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
}

const mapStateToProps = (state) => ({
  cartItems: selectedCartItems(state),
});

export default connect(mapStateToProps, null)(CartDropdown);
