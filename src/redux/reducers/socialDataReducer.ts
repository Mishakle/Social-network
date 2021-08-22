import { SET_USER_POSTS, SET_USERS } from '../types';
import { UserPost } from '../../components/Post/interfaces';
import { User } from '../../api/interfaces';

export interface SocialDataState {
  posts: UserPost[];
  users: User[];
}

const initialState: SocialDataState = {
  posts: [],
  users: [],
};

const socialDataReducer = (
  state: SocialDataState = initialState,
  action: any,
): SocialDataState => {
  switch (action.type) {
    case SET_USER_POSTS: {
      return { ...state, posts: action.payload };
    }
    case SET_USERS: {
      return { ...state, users: action.payload };
    }
    default:
      return state;
  }
};

export default socialDataReducer;
