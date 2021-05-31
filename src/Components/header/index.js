import React from "react";
import "./header.styles.scss";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import CartIcon from "../cart-icon";
import CartDropdown from "../cart-dropdown";
import { auth } from "../../firebase/firebase.utils";

function Header({ currentUser, cartDropdownHidden, cartLength }) {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/shop">
          CONTACT
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
        )}
        <CartIcon cartLength={cartLength} />
      </div>
      {cartDropdownHidden ? null : <CartDropdown />}
    </div>
  );
}

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
  cartDropdownHidden: state.cart.hidden,
  cartLength: state.cart.cartItems.length,
});

export default connect(mapStateToProps)(Header);
