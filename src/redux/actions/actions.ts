import {
  CREATE_POST,
  GET_USER_DATA,
  REQUEST_USER_POSTS,
  REQUEST_USERS,
  EDIT_USER,
  UPLOAD_IMAGE,
  DELETE_POST,
  EDIT_POST,
} from '../types';

export const changeUserInfoActionCreator = (userData) => ({
  type: EDIT_USER,
  userData,
});

export const getAllUserPostsActionCreator = () => ({
  type: REQUEST_USER_POSTS,
});

export const getAllUsersActionCreator = () => ({
  type: REQUEST_USERS,
});

export const createPostActionCreator = (post) => ({
  type: CREATE_POST,
  post,
});

export const getUserDataActionCreator = () => ({
  type: GET_USER_DATA,
});

export const uploadImageActionCreator = (formData) => ({
  type: UPLOAD_IMAGE,
  formData,
});

export const deletePostActionCreator = (postId) => ({
  type: DELETE_POST,
  postId,
});

export const EditPostActionCreator = (postId, postText) => ({
  type: EDIT_POST,
  postId,
  postText,
});
