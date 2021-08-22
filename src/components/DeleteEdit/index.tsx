import React, { FC, useState } from 'react';
import { useDispatch } from 'react-redux';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {
  deletePostActionCreator,
  EditPostActionCreator,
} from '../../redux/actions/actions';
import { DeleteEditProps } from './interfaces';

const DeleteEdit: FC<DeleteEditProps> = ({ message, postId }) => {
  const [open, setOpen] = useState(false);
  const [postText, setPostText] = useState(message);
  const dispatch = useDispatch();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setPostText(message);
  };

  const textChange = (e) => {
    setPostText(e.target.value);
  };

  const onBtnEdit = () => {
    const data = {
      content: postText,
    };
    dispatch(EditPostActionCreator(postId, data));
    setOpen(false);
  };

  const onBtnDelete = () => {
    dispatch(deletePostActionCreator(postId));
    setOpen(false);
  };

  return (
    <div>
      <Button color="secondary" onClick={handleClickOpen}>
        Edit/Delete
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Your information</DialogTitle>
        <DialogContent>
          <DialogContentText>Delete or edit your post here</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="userPost"
            label="post"
            name="userPost"
            value={postText}
            onChange={textChange}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button type="submit" onClick={onBtnEdit} color="primary">
            Edit
          </Button>
          <Button type="submit" onClick={onBtnDelete} color="primary">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default DeleteEdit;
