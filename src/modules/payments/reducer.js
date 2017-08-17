import {
  FETCH_ITEMS_SUCCESS,
  CONFIRM_FACEBOOK_SHARE,
  CONFIRM_FACEBOOK_SHARE_SUCCESS,
  CONFIRM_FACEBOOK_SHARE_ERROR,
  SHARE_ON_FACEBOOK_FOR_REWARD_START,
  SHARE_ON_FACEBOOK_FOR_REWARD_END,
} from './actionTypes';

const initialState = {
  items: [],
  loadingConfirmFacebookShare: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ITEMS_SUCCESS:
      return {
        ...state,
        items: action.payload,
      };
    case CONFIRM_FACEBOOK_SHARE:
      // return {
      //   ...state,
      //   loadingConfirmFacebookShare: true,
      // };
    case CONFIRM_FACEBOOK_SHARE_SUCCESS:
      // return {
      //   ...state,
      //   loadingConfirmFacebookShare: false,
      // };
    case CONFIRM_FACEBOOK_SHARE_ERROR:
      // return {
      //   ...state,
      //   loadingConfirmFacebookShare: false,
      // };
    case SHARE_ON_FACEBOOK_FOR_REWARD_START:
      return {
        ...state,
        loadingConfirmFacebookShare: true,
      };
    case SHARE_ON_FACEBOOK_FOR_REWARD_END:
      return {
        ...state,
        loadingConfirmFacebookShare: false,
      };
    default:
      return state;
  }
};
