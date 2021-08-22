import React, { FC } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { ConnectedRouter as Router } from 'connected-react-router';

import Navbar from '../components/Navbar';
import Header from '../components/Header';
import AllUsers from '../containers/AllUsers';
import Feed from '../containers/Feed';
import Profile from '../containers/Profile';
import Dialogs from '../containers/Dialogs';
import SignIn from '../containers/SignIn';
import SignUp from '../containers/SignUp';

import { HeadWrapper, AppWrapper, MainWrapper } from './styles';
import ProtectedRoute from './ProtectedRoute';
import { history } from '../redux/store';

const Routes: FC = () => (
  <Router history={history}>
    <Switch>
      <Redirect exact from="/" to="/profile" />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/login" component={SignIn} />
      <AppWrapper>
        <HeadWrapper>
          <Header />
        </HeadWrapper>
        <Navbar />
        <MainWrapper>
          <ProtectedRoute exact path="/profile" component={Profile} />
          <ProtectedRoute exact path="/dialogs" component={Dialogs} />
          <ProtectedRoute exact path="/allusers" component={AllUsers} />
          <ProtectedRoute exact path="/feed" component={Feed} />
        </MainWrapper>
      </AppWrapper>
    </Switch>
  </Router>
);

export default Routes;
