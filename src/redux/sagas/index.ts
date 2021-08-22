import { all, fork } from 'redux-saga/effects';
import {
  signInWatcher,
  signUpWatcher,
  signOutWatcher,
  getPostsWatcher,
  getUserDataWatcher,
  getAllUsersWatcher,
  createPostWatcher,
  changeUserInfoWatcher,
  uploadImageWatcher,
  deletePostWatcher,
  editPostWatcher,
  getUserPostsWathcer,
  getDialoglistWatcher,
  getMessagesWatcher,
  createChatWatcher,
} from './watchers';

export function* rootWatcher() {
  yield all([
    fork(signInWatcher),
    fork(signUpWatcher),
    fork(signOutWatcher),
    fork(getPostsWatcher),
    fork(getUserDataWatcher),
    fork(getAllUsersWatcher),
    fork(createPostWatcher),
    fork(changeUserInfoWatcher),
    fork(uploadImageWatcher),
    fork(deletePostWatcher),
    fork(editPostWatcher),
    fork(getUserPostsWathcer),
    fork(getDialoglistWatcher),
    fork(getMessagesWatcher),
    fork(createChatWatcher),
  ]);
}
