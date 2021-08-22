import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Post from '../../components/Post';
import { getAllUserPostsActionCreator } from '../../redux/actions/actions';
import { getAllPosts } from '../../redux/selectors/socialData';

const Feed: FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllUserPostsActionCreator());
  }, []);
  const postData = useSelector(getAllPosts);
  const posts = postData.map((post) => (
    <Post
      key={post._id}
      userImage={post.user.profileImage}
      message={post.content}
      likeCount={post.likeCount}
      postId={post._id}
      isShow={false}
    />
  ));
  return <div>{posts}</div>;
};

export default Feed;
