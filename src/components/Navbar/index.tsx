import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Toolbar from '@material-ui/core/Toolbar';

import { DrawerContentStyled } from './styles';
import { useStyles } from './styles';

const Navbar: FC = () => {
  const classes = useStyles();

  return (
    <Drawer
      open
      variant="permanent"
      className={classes.drawer}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <Toolbar />
      <DrawerContentStyled>
        <List>
          <ListItem button component={NavLink} to="/profile">
            <ListItemText>Profile</ListItemText>
          </ListItem>
          <ListItem button component={NavLink} to="/dialogs">
            <ListItemText>Dialogs</ListItemText>
          </ListItem>
          <ListItem button component={NavLink} to="/allusers">
            <ListItemText>Community</ListItemText>
          </ListItem>
          <ListItem button component={NavLink} to="/feed">
            <ListItemText>Feed</ListItemText>
          </ListItem>
        </List>
      </DrawerContentStyled>
    </Drawer>
  );
};

export default Navbar;
