import React, { FC } from 'react';
import Button from '@material-ui/core/Button';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';

import { createPostActionCreator } from '../../../redux/actions/actions';

import Post from '../../../components/Post';
import { UserPost } from '../../../components/Post/interfaces';
import { PostText } from './interfaces';
import { getUserImage, getUserPosts } from '../../../redux/selectors/user';
import TextField from '@material-ui/core/TextField';
import { PostInputStyled } from '../../Dialogs/styles';

const MyWallPosts: FC = () => {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();
  const postData = useSelector(getUserPosts);
  const image = useSelector(getUserImage);

  const posts = postData.map((post: UserPost) => (
    <Post
      key={post._id}
      userImage={image}
      message={post.content}
      likeCount={post.likeCount}
      postId={post._id}
      isShow={true}
    />
  ));

  const onSubmitForm = ({ postText }: PostText) => {
    if (!postText) return;

    const post = {
      content: postText,
    };
    dispatch(createPostActionCreator(post));
    reset();
  };

  return (
    <div>
      <h2>Durov finally returned the wall</h2>
      <form onSubmit={handleSubmit(onSubmitForm)}>
        <PostInputStyled>
          <TextField
            inputRef={register}
            name="postText"
            label="Create post"
            multiline
            rowsMax="3"
            fullWidth
          />
          <Button type="submit" variant="outlined" color="primary">
            Post
          </Button>
        </PostInputStyled>
      </form>
      <div>{posts}</div>
    </div>
  );
};

export default MyWallPosts;
