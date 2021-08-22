import React, { FC } from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';

import { useStyles } from './styles';
import DeleteEdit from '../DeleteEdit';
import { PostAvatarWrapper } from './styles';
import { PostProps } from './interfaces';

const Post: FC<PostProps> = ({ userImage, message, likeCount, postId, isShow }) => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardMedia>
        <PostAvatarWrapper src={userImage} alt="profile picture" />
      </CardMedia>
      <CardContent className={classes.content}>
        <div className={classes.contentAndButton}>
          {message}
          {isShow && <DeleteEdit message={message} postId={postId} />}
        </div>
        <Button>{likeCount} Likes </Button>
      </CardContent>
      <Divider />
    </Card>
  );
};

export default Post;
