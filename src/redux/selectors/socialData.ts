import { RootState } from '../store';

export const getUsers = (state: RootState) => state.socialData.users;

export const getAllPosts = (state: RootState) => state.socialData.posts;
