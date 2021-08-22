import { AuthActions, AuthAction } from '../actions/auth';

export interface AuthState {
  token?: string;
  isAuthenticated: boolean;
  isSigningIn: boolean;
  isSigningUp: boolean;
  isSigningOut: boolean;
  error?: string;
}

const initialState: AuthState = {
  isAuthenticated: false,
  isSigningIn: false,
  isSigningUp: false,
  isSigningOut: false,
};

const authReducer = (state: AuthState = initialState, action: AuthActions): AuthState => {
  switch (action.type) {
    case AuthAction.SIGN_IN_STARTED:
      return {
        ...state,
        isSigningIn: true,
      };
    case AuthAction.SIGN_IN_DONE:
      return {
        ...state,
        isSigningIn: false,
        isAuthenticated: true,
        token: action.payload.token,
      };
    case AuthAction.SIGN_IN_FAILED:
      return {
        ...state,
        isSigningIn: false,
        error: action.payload.error,
      };

    case AuthAction.SIGN_UP_STARTED:
      return {
        ...state,
        isSigningUp: true,
      };
    case AuthAction.SIGN_UP_DONE:
      return {
        ...state,
        isSigningUp: false,
        isAuthenticated: true,
        token: action.payload.token,
      };
    case AuthAction.SIGN_UP_FAILED:
      return {
        ...state,
        isSigningUp: false,
        error: action.payload.error,
      };

    case AuthAction.SIGN_OUT_STARTED:
      return {
        ...state,
        isSigningOut: true,
      };
    case AuthAction.SIGN_OUT_DONE:
      return {
        ...state,
        isSigningOut: false,
        isAuthenticated: false,
      };
    case AuthAction.SIGN_OUT_FAILED:
      return {
        ...state,
        isSigningOut: false,
      };

    default:
      return state;
  }
};

export default authReducer;
