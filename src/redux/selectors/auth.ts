import { RootState } from '../store';

export const getIsAuthenticated = (state: RootState): boolean =>
  state.auth.isAuthenticated;

export const getIsSigningIn = (state: RootState): boolean => state.auth.isSigningIn;

export const getIsSigningUp = (state: RootState): boolean => state.auth.isSigningUp;

export const getIsSigningOut = (state: RootState): boolean => state.auth.isSigningOut;
