export interface PostProps {
  postId: string;
  message: string;
  userImage: string;
  likeCount: number;
  isShow?: boolean;
}

interface UserInPost {
  _id: string;
  profileImage: string;
}

export interface UserPost {
  _id: string;
  content: string;
  likeCount: number;
  user: UserInPost;
  userHandle: string;
  createdAt?: string;
}
