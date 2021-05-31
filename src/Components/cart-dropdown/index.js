import React from "react";
import "./cart-dropdown.styles.scss";
import CustomButton from "../custom-button";

function CartDropdown() {
  return (
    <div className="cart-dropdown">
      <div className="cart-items"></div>
      <CustomButton type="button" inverted>
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
}

export default CartDropdown;
