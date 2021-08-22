import { RootState } from '../store';

export const getUserPosts = (state: RootState) => state.user.posts;

export const getCred = (state: RootState) => state.user.credentials;

export const getUserImage = (state: RootState) => getCred(state)?.profileImage || '';

export const getSocket = (state: RootState) => state.user.socket;
