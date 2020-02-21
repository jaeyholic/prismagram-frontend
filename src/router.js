import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
import Feed from './Routes/Feed';
import Auth from './Routes/Auth';

const LoggedIn = () => (
  <Fragment>
    <Route exact path='/' component={Feed} />
  </Fragment>
);

const LoggedOut = () => (
  <Fragment>
    <Route exact path='/' component={Auth} />
  </Fragment>
);

const Router = ({ isLoggedIn }) => {
  return (
    <BrowserRouter>
      <Switch>
        {isLoggedIn ? <LoggedIn /> : <LoggedOut />}
      </Switch>
    </BrowserRouter>
  );
};

Router.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired
};

export default Router;
