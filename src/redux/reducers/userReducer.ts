import { Socket } from 'socket.io-client';

import { User } from '../../api/interfaces';
import { UserPost } from '../../components/Post/interfaces';
import { SET_AUTHENTICATED, SET_UNAUTHENTICATED, SET_USER } from '../types';

export interface UserState {
  authenticated: boolean;
  credentials?: User;
  posts: UserPost[];
  socket?: Socket;
}

const initialState: UserState = {
  authenticated: false,
  // credentials: {},
  posts: [],
};

const userReducer = (state: UserState = initialState, action): UserState => {
  switch (action.type) {
    case SET_AUTHENTICATED:
      return {
        ...state,
        authenticated: true,
      };
    case SET_UNAUTHENTICATED:
      return initialState;
    case 'SET_SOCKET':
      return {
        ...state,
        socket: action.socket,
      };
    case SET_USER:
      return {
        ...state,
        authenticated: true,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
