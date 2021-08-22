import { put, call, all } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import axios from 'axios';
import createToken from '../../socket';

import * as api from '../../api/api';
import { AuthAction, SignInAction, SignUpAction } from '../actions/auth';
import {
  GET_USER_DATA,
  NEW_DIALOG_ITEM,
  NEW_DIALOG_REQUEST,
  REQUEST_USER_POSTS,
  SET_ACTIVE_DIALOG,
  SET_DIALOGLIST,
  SET_USER,
  SET_USERS,
  SET_USER_POSTS,
} from '../types';

const setAuthorizationHeader = (token: string) => {
  const FBIdToken = `Bearer ${token}`;
  localStorage.setItem('FBIdToken', FBIdToken);
  axios.defaults.headers.common['Authorization'] = FBIdToken;
};

export function* signInWorker(action: SignInAction) {
  const { payload } = action;
  yield put({
    type: AuthAction.SIGN_IN_STARTED,
    payload,
  });
  try {
    const token = yield call(api.login, payload);
    yield call(setAuthorizationHeader, token.token);
    const socket = yield createToken(token.token);
    yield socket.connect();

    yield all([
      put({
        type: AuthAction.SIGN_IN_DONE,
        payload: { token },
      }),
      put({ type: 'SET_SOCKET', socket }),
      put({ type: GET_USER_DATA }),
      put(push('/profile')),
    ]);
  } catch (err) {
    console.error(err);
    yield put({
      type: AuthAction.SIGN_IN_FAILED,
      payload: { err },
    });
  }
}

export function* signUpWorker(action: SignUpAction) {
  const { payload } = action;
  yield put({
    type: AuthAction.SIGN_UP_STARTED,
    payload,
  });
  try {
    const token = yield call(api.signup, payload);
    yield put(push('/login'));
  } catch (err) {
    console.log(err);
  }
}

export function* signOutWorker() {
  yield put({ type: AuthAction.SIGN_OUT_STARTED });
  try {
    yield localStorage.removeItem('FBIdToken');
    yield axios.defaults.headers.common['Authorization'];
    yield put({ type: AuthAction.SIGN_OUT_DONE });
  } catch (err) {
    console.log(err);
    yield put({ type: AuthAction.SIGN_OUT_FAILED });
  }
}

export function* changeUserInfoWorker(payload) {
  try {
    yield call(api.changeUserInformation, payload.userData);
    yield put({ type: GET_USER_DATA });
  } catch (err) {
    console.log(err);
  }
}

export function* createPostWorker(payload) {
  try {
    yield call(api.createPost, payload.post);
    yield put({ type: REQUEST_USER_POSTS });
    yield put({ type: GET_USER_DATA });
  } catch (err) {
    console.log(err);
  }
}

export function* getPostsWorker() {
  try {
    const payload = yield call(api.getPosts);
    yield put({ type: SET_USER_POSTS, payload });
  } catch (err) {
    console.log(err);
  }
}

export function* getAllUsersWorker() {
  try {
    const payload = yield call(api.getUsers);
    yield put({ type: SET_USERS, payload });
  } catch (err) {
    console.log(err);
  }
}

export function* getUserDataWorker() {
  try {
    const payload = yield call(api.getUser);
    yield put({ type: SET_USER, payload });
  } catch (err) {
    console.log(err);
  }
}

export function* getUserPostsWorker() {
  try {
    const payload = yield call(api.getOwnPosts);
    yield put({ type: SET_USER, payload });
  } catch (err) {
    console.log(err);
  }
}

export function* uploadImageWorker(payload) {
  try {
    yield call(api.uploadImage, payload.formData);
    yield put({ type: GET_USER_DATA });
  } catch (err) {
    console.log(err);
  }
}

export function* deletePostWorker(payload) {
  try {
    yield call(api.deletePost, payload.postId);
    yield put({ type: GET_USER_DATA });
  } catch (err) {
    console.log(err);
  }
}

export function* editPostWorker(payload) {
  try {
    yield call(api.editPost, payload.postId, payload.postText);
    yield put({ type: GET_USER_DATA });
  } catch (err) {
    console.log(err);
  }
}

export function* getDialoglistWorker() {
  try {
    const payload = yield call(api.getDialoglist);
    yield put({ type: SET_DIALOGLIST, payload });
  } catch (err) {
    console.log(err);
  }
}

export function* getMessagestWorker(idPayload) {
  try {
    const payload = yield call(api.getMessages, idPayload.recipientId);
    yield put({ type: SET_ACTIVE_DIALOG, payload });
  } catch (err) {
    console.log(err);
  }
}

export function* createChatWorker(payload) {
  try {
    yield put(push('/dialogs'));
    yield put({ type: NEW_DIALOG_ITEM, payload });
  } catch (err) {
    console.log(err);
  }
}
