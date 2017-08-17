export const isAuthenticated = state => !!state.auth.user;
export const getUserName = state => isAuthenticated(state) ? state.auth.user.name : null;
export const getUserGemidoesLeft = state => isAuthenticated(state) ? state.auth.user.gemidoesLeft : 0;
export const getUserPicture = state => isAuthenticated(state) ? state.auth.user.picture : null;
export const isLoading = state => state.auth.loading && !state.auth.user;
export const hasSharedTodayOnFacebook = state => isAuthenticated(state) ? state.auth.user.sharedTodayOnFacebook : false;
export const hasSharedTodayOnTwitter = state => isAuthenticated(state) ? state.auth.user.sharedTodayOnTwitter : false;
