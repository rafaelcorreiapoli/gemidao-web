const getSubscription = (state, subscriptionId) => state.subscriptions[subscriptionId] || {};

export const isLoading = (state, subscriptionId) => getSubscription(state, subscriptionId).loading;
export const getErrorDescription = (state, subscriptionId) => getSubscription(state, subscriptionId).errorDescription;
export const isSuccess = (state, subscriptionId) => getSubscription(state, subscriptionId).success;
export const isError = (state, subscriptionId) => getSubscription(state, subscriptionId).error;
