import React, { FC } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import { useDispatch } from 'react-redux';

import { DialogUserItemProps } from './interfaces';
import { dialogMessagesActionCreator } from '../../../redux/actions/dialog';

const DialogUserItem: FC<DialogUserItemProps> = ({
  userId,
  userImage,
  username,
  setRecipient,
}) => {
  const dispatch = useDispatch();

  const userOnClick = () => {
    setRecipient(userId);
    dispatch(dialogMessagesActionCreator(userId));
  };

  return (
    <ListItem button onClick={userOnClick}>
      <ListItemIcon>
        <Avatar alt="Profile picture" src={userImage} />
      </ListItemIcon>
      <ListItemText primary={username}>{username}</ListItemText>
    </ListItem>
  );
};

export default DialogUserItem;
