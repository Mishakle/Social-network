import React, { FC } from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { getIsAuthenticated } from '../redux/selectors/auth';

export interface ProtectedRouteProps extends RouteProps {
  component: FC<any>;
}

const ProtectedRoute: FC<ProtectedRouteProps> = ({ component: Component, ...rest }) => {
  const isAuthenticated = useSelector(getIsAuthenticated);

  return (
    <Route
      {...rest}
      render={(props: any) =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default ProtectedRoute;
