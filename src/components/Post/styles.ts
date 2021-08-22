import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';

export const PostAvatarWrapper = styled.img`
  min-width: 15px;
  width: 200px;
  height: 150px;
  object-fit: cover;
`;

export const useStyles = makeStyles({
  card: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 10,
    marginTop: 10,
    minWidth: '1000px',
  },
  content: {
    padding: 25,
    objectFit: 'cover',
    width: '100%',
    fontSize: '1.2em',
  },
  contentAndButton: {
    display: 'flex',
    justifyContent: 'space-between',
    height: '80%',
  },
});
