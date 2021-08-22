import React, { FC, useState } from 'react';
import { useDispatch } from 'react-redux';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { changeUserInfoActionCreator } from '../../redux/actions/actions';
import { EditProps } from './interfaces';

const EditDetails: FC<EditProps> = ({ bio, location }) => {
  const [open, setOpen] = useState(false);
  const [formInformation, setFormInformation] = useState(bio);
  const [formLocation, setFormLocation] = useState(location);
  const dispatch = useDispatch();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setFormInformation(bio);
    setFormLocation(location);
  };

  const textInfoChange = (e) => {
    setFormInformation(e.target.value);
  };

  const textLocationChange = (e) => {
    setFormLocation(e.target.value);
  };

  const onBtnSubmit = () => {
    const userData = {
      bio: formInformation,
      location: formLocation,
    };
    dispatch(changeUserInfoActionCreator(userData));
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Edit profile information
      </Button>
      <form>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Your information</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Write about yourself, it will help you to find more friends!
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="bio"
              label="Bio"
              name="bio"
              value={formInformation}
              onChange={textInfoChange}
              fullWidth
            />
            <TextField
              autoFocus
              margin="dense"
              id="location"
              label="Current city/town"
              name="location"
              value={formLocation}
              onChange={textLocationChange}
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button type="submit" onClick={onBtnSubmit} color="primary">
              Confirm
            </Button>
          </DialogActions>
        </Dialog>
      </form>
    </div>
  );
};

export default EditDetails;
