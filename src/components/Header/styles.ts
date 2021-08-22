import styled from 'styled-components';
import Toolbar from '@material-ui/core/Toolbar';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export const ToolbarStyled = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
`;

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
    },
  }),
);
