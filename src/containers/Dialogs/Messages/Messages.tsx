import React, { FC } from 'react';
import ListItem from '@material-ui/core/ListItem';
import Grid from '@material-ui/core/Grid';
import ListItemText from '@material-ui/core/ListItemText';

import { MessageProps } from './interfaces';

const Messages: FC<MessageProps> = ({
  messageId,
  text,
  author,
  recipient,
  createdAt,
  updatedAt,
}) => {
  return (
    <ListItem>
      <Grid container>
        <Grid item xs={12}>
          <ListItemText primary={`User ${author.username}`}></ListItemText>
        </Grid>
        <Grid item xs={12}>
          <ListItemText primary={text}>{author.username}</ListItemText>
        </Grid>
      </Grid>
    </ListItem>
  );
};

export default Messages;
