import styled from 'styled-components';
import Fab from '@material-ui/core/Fab';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

export const PaperStyled = styled(Paper)`
  height: 100%;
`;

export const UsersListWrapper = styled(Grid)`
  height: 100%;
`;

export const DialogWrapper = styled(Grid)`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const ListStyled = styled(List)`
  overflow-y: auto;
`;

export const MessageInputStyled = styled.form`
  display: flex;
  padding: 16px;
  align-items: center;
  gap: 16px;
  width: 100%;
`;

export const PostInputStyled = styled.div`
  display: flex;
  padding: 16px;
  align-items: center;
  gap: 16px;
  width: 100%;
`;

export const SendMessageButtonStyled = styled(Fab)`
  flex: none;
`;

export const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  chatSection: {
    width: '100%',
    height: '100%',
  },
  headBG: {
    backgroundColor: '#e0e0e0',
  },
  borderRight500: {
    borderRight: '1px solid #e0e0e0',
  },
  messageArea: {
    height: '90%',
    overflowY: 'auto',
  },
});
