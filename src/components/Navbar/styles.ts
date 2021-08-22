import styled from 'styled-components';
import { createStyles, makeStyles } from '@material-ui/core';

export const DrawerContentStyled = styled.div`
  padding: 20px;
  grid-area: navbar;
  overflow: auto;
`;

const DRAWER_WIDTH = 240;

export const useStyles = makeStyles(() =>
  createStyles({
    drawer: {
      width: DRAWER_WIDTH,
      flexShrink: 0,
    },
    drawerPaper: {
      width: DRAWER_WIDTH,
    },
  }),
);
