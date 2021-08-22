import React, { FC } from 'react';

import { DescriptionProps } from './interfaces';
import { InfoWrapper } from './styles';

const Description: FC<DescriptionProps> = ({ username, info, location }) => {
  return (
    <div>
      <InfoWrapper>
        <b>Nickname:</b>&nbsp;{username}
      </InfoWrapper>
      <InfoWrapper>
        <b>Bio:</b>&nbsp;{info}
      </InfoWrapper>
      <InfoWrapper>
        <b>Current city/town:</b>&nbsp;{location}
      </InfoWrapper>
      <InfoWrapper>
        <b>Followers: </b>&nbsp; 0 <b>&nbsp;Following:</b>&nbsp; 0
      </InfoWrapper>
    </div>
  );
};

export default Description;
