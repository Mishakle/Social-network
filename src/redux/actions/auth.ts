import { UserSignUpPayload } from '../../api/interfaces';

export enum AuthAction {
  SIGN_IN = 'SIGN_IN',
  SIGN_IN_STARTED = 'SIGN_IN_STARTED',
  SIGN_IN_DONE = 'SIGN_IN_DONE',
  SIGN_IN_FAILED = 'SIGN_IN_FAILED',

  SIGN_UP = 'SIGN_UP',
  SIGN_UP_STARTED = 'SIGN_UP_STARTED',
  SIGN_UP_DONE = 'SIGN_UP_DONE',
  SIGN_UP_FAILED = 'SIGN_UP_FAILED',

  SIGN_OUT = 'SIGN_OUT',
  SIGN_OUT_STARTED = 'SIGN_OUT_STARTED',
  SIGN_OUT_DONE = 'SIGN_OUT_DONE',
  SIGN_OUT_FAILED = 'SIGN_OUT_FAILED',
}

export interface SignInPayload {
  email: string;
  password: string;
}

export interface SignInResult {
  token: string;
}

export interface SignInFailure {
  error: string;
}

export interface SignInAction {
  type: AuthAction.SIGN_IN;
  payload: SignInPayload;
}

export interface SignInStartedAction {
  type: AuthAction.SIGN_IN_STARTED;
  payload: SignInPayload;
}

export interface SignInDoneAction {
  type: AuthAction.SIGN_IN_DONE;
  payload: SignInResult;
}

export interface SignInFailedAction {
  type: AuthAction.SIGN_IN_FAILED;
  payload: SignInFailure;
}

export interface SignUpResult {
  token: string;
}

export interface SignUpFailure {
  error: string;
}

export interface SignUpAction {
  type: AuthAction.SIGN_UP;
  payload: UserSignUpPayload;
}

export interface SignUpStartedAction {
  type: AuthAction.SIGN_UP_STARTED;
  payload: UserSignUpPayload;
}

export interface SignUpDoneAction {
  type: AuthAction.SIGN_UP_DONE;
  payload: SignUpResult;
}

export interface SignUpFailedAction {
  type: AuthAction.SIGN_UP_FAILED;
  payload: SignUpFailure;
}

export interface SignOutAction {
  type: AuthAction.SIGN_OUT;
  payload: void;
}

export interface SignOutStartedAction {
  type: AuthAction.SIGN_OUT_STARTED;
  payload: void;
}

export interface SignOutDoneAction {
  type: AuthAction.SIGN_OUT_DONE;
  payload: void;
}

export interface SignOutFailedAction {
  type: AuthAction.SIGN_OUT_FAILED;
  payload: void;
}

export type AuthActions =
  | SignInAction
  | SignInStartedAction
  | SignInDoneAction
  | SignInFailedAction
  | SignUpAction
  | SignUpStartedAction
  | SignUpDoneAction
  | SignUpFailedAction
  | SignOutAction
  | SignOutStartedAction
  | SignOutDoneAction
  | SignOutFailedAction;
