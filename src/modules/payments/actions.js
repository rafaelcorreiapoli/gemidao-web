
import {
  FETCH_ITEMS,
  FETCH_ITEMS_SUCCESS,
  FETCH_ITEMS_ERROR,
  FETCH_CHECKOUT_URL,
  FETCH_CHECKOUT_URL_SUCCESS,
  FETCH_CHECKOUT_URL_ERROR,
} from './actionTypes';

const fetchItemsStart = () => ({
  type: FETCH_ITEMS,

});
const fetchItemsSuccess = items => ({
  type: FETCH_ITEMS_SUCCESS,
  payload: items,
});

const fetchItemsError = error => ({
  type: FETCH_ITEMS_ERROR,
  payload: error,
});

export const fetchItems = () => (dispatch, _, api) => {
  dispatch(fetchItemsStart());

  return api.getItems()
  .then((items) => {
    dispatch(fetchItemsSuccess(items));
    return items;
  })
  .catch((err) => {
    dispatch(fetchItemsError(err));
  });
};


const fetchCheckoutUrlStart = () => ({
  type: FETCH_CHECKOUT_URL,
});
const fetchCheckoutUrlSuccess = checkoutUrl => ({
  type: FETCH_CHECKOUT_URL_SUCCESS,
  payload: checkoutUrl,
});
const fetchCheckoutUrlError = err => ({
  type: FETCH_CHECKOUT_URL_ERROR,
  payload: err,
});

export const fetchCheckoutUrl = itemId => (dispatch, _, api) => {
  dispatch(fetchCheckoutUrlStart());

  return api.getCheckoutUrl(itemId)
  .then((checkoutUrl) => {
    dispatch(fetchCheckoutUrlSuccess(checkoutUrl));
    return checkoutUrl;
  })
  .catch((err) => {
    dispatch(fetchCheckoutUrlError(err));
  });
};
