import styled from 'styled-components';
import Card from '@material-ui/core/Card';

export const CommunityAvatarWrapper = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 30px;
`;

export const UserCardWrapper = styled(Card)`
  position: relative;
  display: flex;
  flex-direction: row;
  padding: 5px;
  margin-bottom: 10px;
  margin-top: 10px;
  min-width: 400px;
  justify-content: space-between;
  align-items: center;
`;
