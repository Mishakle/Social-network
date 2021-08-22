import { Author } from '../containers/Dialogs/Messages/interfaces';

interface UserInPost {
  _id: string;
  profileImage: string;
}
export interface UserSignInPayload {
  email: string;
  password: string;
}

export interface UserSignInResponse {
  token: string;
}

export interface UserSignUpPayload {
  email: string;
  password: string;
  confirmPassword: string;
  handle: string;
}

export interface UserSignUpResponse {
  token: string;
}

export interface ChangeUserInformationPayload {
  info?: string;
  location?: string;
}

export interface CreatePostPayload {
  body: string;
}

export interface EditPostPayload {
  body: string;
  postId: string;
}

export interface DeletePostPayload {
  postId: string;
}

export interface DialogMessagesPayload {
  _id: string;
  text: string;
  recipient: string;
  createdAt: string;
  updatedAt: string;
  author: Author;
  isRead: boolean;
}

export interface DialogListPayload {
  _id: string;
  username: string;
  profileImage: string;
}

export interface OwnPostPayload {
  _id: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  likeCount: number;
  user: UserInPost;
}

export interface AllPostsPayload {
  _id: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  likeCount: number;
  user: UserInPost;
}

export interface User {
  _id: string;
  email: string;
  username: string;
  profileImage: string;
  bio?: string;
  location?: string;
  createdAt: string;
}
