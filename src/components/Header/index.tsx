import React, { FC } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';

import { ToolbarStyled } from './styles';
import { useStyles } from './styles';

const Header: FC = () => {
  const classes = useStyles();

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <ToolbarStyled>
        <Typography variant="h6">Social Network App</Typography>
      </ToolbarStyled>
    </AppBar>
  );
};

export default Header;
