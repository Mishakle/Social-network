import axios from 'axios';
import {
  UserSignInPayload,
  UserSignInResponse,
  UserSignUpPayload,
  UserSignUpResponse,
  ChangeUserInformationPayload,
  CreatePostPayload,
  User,
  EditPostPayload,
  DeletePostPayload,
  DialogListPayload,
  DialogMessagesPayload,
  OwnPostPayload,
  AllPostsPayload,
} from './interfaces';
import { UserPost } from '../components/Post/interfaces';

export async function login(userData: UserSignInPayload): Promise<UserSignInResponse> {
  const response = await axios.post<UserSignInResponse>('/login', userData);
  return response.data;
}

export async function signup(userData: UserSignUpPayload): Promise<UserSignUpResponse> {
  const response = await axios.post<UserSignUpResponse>('/signup', userData);
  return response.data;
}

export async function createPost(post: CreatePostPayload) {
  const response = await axios.post('/posts', post);
  return response.data;
}

export async function changeUserInformation(userData: ChangeUserInformationPayload) {
  const response = await axios.post('/user', userData);
  return response.data;
}

export async function getOwnPosts() {
  const response = await axios.get<OwnPostPayload>('/user/posts');
  return response.data;
}

export async function getPosts() {
  const response = await axios.get<AllPostsPayload>('/posts');
  return response.data;
}

export async function getUsers() {
  const response = await axios.get<UserPost>('/users');
  return response.data;
}

export async function getUser() {
  const response = await axios.get<User>('/user');
  return response.data;
}

export async function uploadImage(image) {
  const response = await axios.post('/user/image', image);
  return response.data;
}

export async function deletePost(postId) {
  const response = await axios.delete<DeletePostPayload>(`/posts/${postId}`);
  return response.data;
}

export async function editPost(postId, postText) {
  const response = await axios.put<EditPostPayload>(`/posts/${postId}`, postText);
}

export async function getDialoglist() {
  const response = await axios.get<DialogListPayload>(`/dialoglist`);
  return response.data;
}

export async function getMessages(recipientId) {
  const response = await axios.get<DialogMessagesPayload>(`/messages/${recipientId}`);
  return response.data;
}
