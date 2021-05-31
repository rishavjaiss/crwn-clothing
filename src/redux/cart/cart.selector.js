import { createSelector } from "reselect";

const selectCart = (state) => state.cart;

export const selectedCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectedCartItems],
  (cartItems) =>
    cartItems.reduce(
      (accumulatedQuantity, cartItem) =>
        accumulatedQuantity + cartItem.quantity,
      0
    )
);
