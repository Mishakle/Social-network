import React, { FC, useCallback, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { DialogUser, MessageText, RecievedMessage } from './interfaces';
import { useSelector, useDispatch } from 'react-redux';
import { getSocket } from '../../redux/selectors/user';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import SendIcon from '@material-ui/icons/Send';

import DialogUserItem from './DialogUserItem/DialogUserItem';
import {
  dialogListItemsActionCreator,
  newMessageActionCreator,
} from '../../redux/actions/dialog';
import { getDialogList, getUserMessages } from '../../redux/selectors/dialog';
import Messages from './Messages/Messages';
import ScrollToBottom from 'react-scroll-to-bottom';
import {
  DialogWrapper,
  ListStyled,
  MessageInputStyled,
  SendMessageButtonStyled,
  UsersListWrapper,
} from './styles';
import { useStyles } from './styles';

const Dialogs: FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { register, handleSubmit, reset } = useForm();
  const [recipientId, setRecipient] = useState('');
  const socket = useSelector(getSocket);

  useEffect(() => {
    dispatch(dialogListItemsActionCreator());
  }, []);

  const userList = useSelector(getDialogList);
  const messagesList = useSelector(getUserMessages);

  useEffect(() => {
    console.log(userList);
  }, [userList]);

  const users = userList.map((user: DialogUser) => (
    <DialogUserItem
      key={user._id}
      userId={user._id}
      userImage={user.profileImage}
      username={user.username}
      setRecipient={setRecipient}
    />
  ));

  const messages = messagesList.map((message: RecievedMessage) => (
    <Messages
      key={message._id}
      messageId={message._id}
      text={message.text}
      author={message.author}
      recipient={message.recipient}
      createdAt={message.createdAt}
      updatedAt={message.updatedAt}
    />
  ));

  const onMessage = useCallback((message) => {
    console.log(`Received a message from ${message.user}: ${message.messageText}`);
    const recievedMessage = {
      text: message.messageText,
      author: { _id: message.user, username: message.user },
    };
    dispatch(newMessageActionCreator(recievedMessage));
  }, []);

  useEffect(() => {
    if (socket) {
      socket.on('message', onMessage);
    }
    return () => {
      socket?.off('message', onMessage);
    };
  }, []);

  const onSubmitForm = ({ messageText }: MessageText) => {
    if (!messageText) return;

    console.log(messageText);

    const message = {
      messageText,
      recipientId,
    };

    if (socket) {
      socket.emit('sendMessage', message);
    }

    reset();
  };

  return (
    <Grid container component={Paper} className={classes.chatSection}>
      <UsersListWrapper item xs={3} className={classes.borderRight500}>
        <Divider />
        <Grid item xs={12} style={{ padding: '10px' }}>
          <TextField
            id="outlined-basic-email"
            label="Search"
            variant="standard"
            fullWidth
          />
        </Grid>
        <Divider />
        <ListStyled>{users}</ListStyled>
      </UsersListWrapper>
      <DialogWrapper item xs={9}>
        <ScrollToBottom className={classes.messageArea}>{messages}</ScrollToBottom>
        <Divider />
        <Grid container>
          <MessageInputStyled onSubmit={handleSubmit(onSubmitForm)}>
            <TextField
              inputRef={register}
              name="messageText"
              label="Write a message..."
              multiline
              rowsMax="3"
              fullWidth
            />
            <SendMessageButtonStyled color="primary" aria-label="add" type="submit">
              <SendIcon />
            </SendMessageButtonStyled>
          </MessageInputStyled>
        </Grid>
      </DialogWrapper>
    </Grid>
  );
};

export default Dialogs;
