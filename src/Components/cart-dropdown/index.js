import React from "react";
import "./cart-dropdown.styles.scss";
import CustomButton from "../custom-button";
import CartItem from "../cart-item";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";
import { selectCartItems } from "../../redux/cart/cart.selector";
import { selectCurrentUser } from "../../redux/user/user.selector";
import { toggleCartHidden } from "../../redux/cart/cartActions";

function CartDropdown({ cartItems, currentUser, history, dispatch }) {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length > 0 ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      {cartItems.length > 0 && (
        <CustomButton
          type="button"
          inverted
          onClick={() => {
            currentUser ? history.push("/checkout") : history.push("/signin");
            dispatch(toggleCartHidden());
          }}
        >
          GO TO CHECKOUT
        </CustomButton>
      )}
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  currentUser: selectCurrentUser,
});

export default withRouter(connect(mapStateToProps, null)(CartDropdown));
