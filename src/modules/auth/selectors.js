export const isAuthenticated = state => !!state.auth.user;
export const getUserName = state => isAuthenticated(state) ? state.auth.user.name : null;
export const getUserPicture = state => isAuthenticated(state) ? state.auth.user.picture : null;
export const isLoading = state => state.auth.loading;
