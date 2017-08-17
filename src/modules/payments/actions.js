
import {
  FETCH_ITEMS,
  FETCH_ITEMS_SUCCESS,
  FETCH_ITEMS_ERROR,
  FETCH_CHECKOUT_URL,
  FETCH_CHECKOUT_URL_SUCCESS,
  FETCH_CHECKOUT_URL_ERROR,
  CONFIRM_FACEBOOK_SHARE,
  CONFIRM_FACEBOOK_SHARE_SUCCESS,
  CONFIRM_FACEBOOK_SHARE_ERROR,
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
  .then((response) => {
    dispatch(fetchItemsSuccess(response.items));
    return response;
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


const confirmFacebookShareStart = () => ({
  type: CONFIRM_FACEBOOK_SHARE,

});
const confirmFacebookShareSuccess = response => ({
  type: CONFIRM_FACEBOOK_SHARE_SUCCESS,
  payload: response,
});

const confirmFacebookShareError = error => ({
  type: CONFIRM_FACEBOOK_SHARE_ERROR,
  payload: error,
});

export const confirmFacebookShare = url => (dispatch, _, api) => {
  dispatch(confirmFacebookShareStart());

  return api.confirmFacebookShare(url)
  .then((response) => {
    if (response.error) {
      throw new Error(response.error);
    }
    dispatch(confirmFacebookShareSuccess(response.items));
    return response;
  })
  .catch((err) => {
    dispatch(confirmFacebookShareError(err));
  });
};
