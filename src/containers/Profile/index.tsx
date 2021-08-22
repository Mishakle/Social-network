import React, { FC } from 'react';

import ProfileInfo from './ProfileInfo';
import MyWallPosts from './MyWallPosts';
import Divider from '@material-ui/core/Divider';
import useStyles from './styles';

const Profile: FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.profileSection}>
      <ProfileInfo />
      <Divider />
      <MyWallPosts />
    </div>
  );
};

export default Profile;
