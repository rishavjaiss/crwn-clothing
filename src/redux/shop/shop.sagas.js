import { takeEvery, call, put, all } from "redux-saga/effects";
import ShopActionTypes from "./shopActionTypes";
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";
import { fetchCollectionSuccess, fetchCollectionFailure } from "./shopActions";

export function* fetchCollectionsMain() {
  yield console.log("I am fired");
  try {
    const collectionRef = firestore.collection("collections");
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(
      convertCollectionsSnapshotToMap,
      snapshot
    );
    yield put(fetchCollectionSuccess(collectionsMap));
  } catch (e) {
    yield put(fetchCollectionFailure(e.message));
  }
}

export function* fetchCollectionsStart() {
  yield takeEvery(
    ShopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsMain
  );
}

export function* shopSagas() {
  yield all([call(fetchCollectionsStart)]);
}
