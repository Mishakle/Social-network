import React, { FC } from 'react';

import { AvatarWrapper } from './styles';
import { AvatarProps } from './interfaces';

const Avatar: FC<AvatarProps> = ({ profileImage }) => (
  <AvatarWrapper src={`${profileImage}`} alt="profile picture" />
);

export default Avatar;
