import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import Avatar from './Avatar';

import EditDetails from '../../../components/EditDetails';
import { uploadImageActionCreator } from '../../../redux/actions/actions';
import Description from './Description';

const useStyles = makeStyles({
  userInfoSection: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    padding: '10px',
    minWidth: '1000px',
    minHeight: '150px',
  },
  buttonAvatar: {
    margin: '10px',
  },
});

interface RootState {
  user: any;
}

const ProfileInfo: FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const userData = useSelector((state: RootState) => state.user.credentials);
  if (!userData) return null;
  const handleImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const image = event.target.files?.[0];
    if (image) {
      const formData = new FormData();
      formData.append('profileImage', image, image.name);
      dispatch(uploadImageActionCreator(formData));
    }
  };

  return (
    <Card className={classes.userInfoSection}>
      <Avatar profileImage={userData.profileImage} />
      <Description
        username={userData.username}
        info={userData.bio}
        location={userData.location}
      />
      <EditDetails bio={userData.bio} location={userData.location} />
      <div>
        <Button
          className={classes.buttonAvatar}
          variant="outlined"
          color="primary"
          component="label"
        >
          Change avatar
          <input type="file" onChange={handleImage} hidden />
        </Button>
      </div>
    </Card>
  );
};

export default ProfileInfo;
