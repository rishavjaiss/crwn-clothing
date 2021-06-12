import { createSelector } from "reselect";

const selectShop = (state) => state.shop;

const ObjectToArrayConvertor = (object) =>
  Object.keys(object).map((key) => object[key]);

export const selectShopCollections = createSelector([selectShop], (shop) =>
  ObjectToArrayConvertor(shop.collections)
);

export const selectShopCollection = (collectionUrlParam) => {
  return createSelector([selectShopCollections], (collections) =>
    collections.find(
      (collection) => collection.routeName === collectionUrlParam
    )
  );
};

export const selectShopIsCollectionFetching = () =>
  createSelector([selectShop], (shop) => shop.isFetching);
