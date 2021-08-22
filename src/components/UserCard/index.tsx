import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';

import { CommunityAvatarWrapper, UserCardWrapper } from './styles';
import { newDialogItemActionCreator } from '../../redux/actions/dialog';
import { UserCardProps } from './interfaces';

const UserCard: FC<UserCardProps> = ({ userId, picture, username }) => {
  const dispatch = useDispatch();

  const sendButtonOnClick = () => {
    const recipientUser = {
      _id: userId,
      profileImage: picture,
      username,
    };
    dispatch(newDialogItemActionCreator(recipientUser));
  };

  return (
    <UserCardWrapper>
      <CommunityAvatarWrapper src={picture} alt="profilePic" />
      {username}
      <Button color="primary" onClick={sendButtonOnClick}>
        Send Message
      </Button>
    </UserCardWrapper>
  );
};

export default UserCard;
