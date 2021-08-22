import { takeEvery } from 'redux-saga/effects';
import { AuthAction } from '../actions/auth';
import {
  GET_USER_DATA,
  REQUEST_USER_POSTS,
  REQUEST_USERS,
  CREATE_POST,
  EDIT_USER,
  UPLOAD_IMAGE,
  DELETE_POST,
  EDIT_POST,
  LOAD_DIALOGLIST,
  LOAD_MESSAGES,
  NEW_DIALOG_ITEM,
  NEW_DIALOG_REQUEST,
} from '../types';

import * as workers from './workers';

export function* signInWatcher() {
  yield takeEvery(AuthAction.SIGN_IN, workers.signInWorker);
}

export function* signUpWatcher() {
  yield takeEvery(AuthAction.SIGN_UP, workers.signUpWorker);
}

export function* signOutWatcher() {
  yield takeEvery(AuthAction.SIGN_OUT, workers.signOutWorker);
}

export function* changeUserInfoWatcher() {
  yield takeEvery(EDIT_USER, workers.changeUserInfoWorker);
}

export function* createPostWatcher() {
  yield takeEvery(CREATE_POST, workers.createPostWorker);
}

export function* getPostsWatcher() {
  yield takeEvery(REQUEST_USER_POSTS, workers.getPostsWorker);
}

export function* getAllUsersWatcher() {
  yield takeEvery(REQUEST_USERS, workers.getAllUsersWorker);
}

export function* getUserDataWatcher() {
  yield takeEvery(GET_USER_DATA, workers.getUserDataWorker);
}

export function* getUserPostsWathcer() {
  yield takeEvery(GET_USER_DATA, workers.getUserPostsWorker);
}

export function* uploadImageWatcher() {
  yield takeEvery(UPLOAD_IMAGE, workers.uploadImageWorker);
}

export function* deletePostWatcher() {
  yield takeEvery(DELETE_POST, workers.deletePostWorker);
}

export function* editPostWatcher() {
  yield takeEvery(EDIT_POST, workers.editPostWorker);
}

export function* getDialoglistWatcher() {
  yield takeEvery(LOAD_DIALOGLIST, workers.getDialoglistWorker);
}

export function* getMessagesWatcher() {
  yield takeEvery(LOAD_MESSAGES, workers.getMessagestWorker);
}

export function* createChatWatcher() {
  yield takeEvery(NEW_DIALOG_REQUEST, workers.createChatWorker);
}
