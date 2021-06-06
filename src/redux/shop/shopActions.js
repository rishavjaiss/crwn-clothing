import ShopActionTypes from "./shopActionTypes";

export const updateCollection = (collectionMap) => ({
  type: ShopActionTypes.UPDATE_COLLECTIONS,
  payload: collectionMap,
});
