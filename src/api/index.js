/* global localStorage */
import fetch from 'isomorphic-fetch';

const __DEV__ = process.env.NODE_ENV === 'development';
const ENDPOINT = __DEV__
? 'http://192.168.1.40:3001'
: 'https://gemidao-api.herokuapp.com';

console.log(ENDPOINT);

const fetchJson = (uri, options = {}) => fetch(uri, {
  ...options,
  headers: {
    ...options.headers,
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(options.body),
}).then(data => data.json());

const request = (resource, options = {}) => {
  const token = localStorage.getItem('token');
  const authHeader = token
  ? { Authorization: `${token}` }
  : null;

  const finalOptions = {
    ...options,
    headers: {
      ...options.header,
      ...authHeader,
    },
  };
  return fetchJson(`${ENDPOINT}${resource}`, finalOptions);
};

export default {
  loginWithFacebook(facebookToken) {
    return request(`/authenticate?access_token=${facebookToken}`, {
      method: 'POST',
    });
  },

  fetchMe() {
    return request('/me');
  },


  createGemidao(from, to) {
    console.log(from, to);
    return request('/gemidao', {
      method: 'POST',
      body: {
        from,
        to,
      },
    });
  },

  getItems() {
    return request('/payments/items', {
      method: 'GET',
    });
  },

  getGemidoes() {
    return request('/gemidoes', {
      method: 'GET',
    });
  },

  getCheckoutUrl(itemId) {
    return request(`/payments/checkout-url?itemId=${itemId}`);
  },
};
