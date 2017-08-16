import { ApolloClient, createNetworkInterface } from 'react-apollo';

const networkInterface = createNetworkInterface({
  uri: 'https://api.graph.cool/relay/v1/cj4fak8lvrawf0192i7eufvxo',
});
networkInterface.use([{
  applyMiddleware(req, next) {
    if (!req.options.headers) {
      req.options.headers = {};  // Create the header object if needed.
    }
    // get the authentication token from local storage if it exists
    const token = localStorage.getItem('token');
    req.options.headers.authorization = token ? `Bearer ${token}` : null;
    next();
  },
}]);
const client = new ApolloClient({
  networkInterface,
});

export default client;
