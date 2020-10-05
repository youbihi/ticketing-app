import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Header from './components/header';
import HomePage from './pages/HomePage';
import SignupPage from './pages/SignupPage';
import SigninPage from './pages/SigninPage';
import OrdersPage from './pages/OrdersPage';
import OrderDetailsPage from './pages/OrderDetailsPage';
import AddTicketPage from './pages/AddTicketPage';
import TicketDetailsPage from './pages/TicketDetailsPage';
import SignoutPage from './pages/SignoutPage';
import UserRoute from './components/routes/UserRoute';
import GuestRoute from './components/routes/GuestRoute';

const App = ({ location }) => {
  const currentUser = useSelector((state) => state.user);
  const isAuthenticated = !!currentUser.email;

  return (
    <div className="container">
      <Header currentUser={useSelector((state) => state.user)} />

      <Route location={location} path="/" exact component={HomePage} />
      <GuestRoute
        location={location}
        path="/signup"
        exact
        component={SignupPage}
      />
      <GuestRoute
        location={location}
        path="/signin"
        exact
        component={SigninPage}
      />
      <Route location={location} path="/orders" exact component={OrdersPage} />
      <Route
        location={location}
        path="/signout"
        exact
        component={SignoutPage}
      />
      <UserRoute
        location={location}
        path="/orderdetails"
        exact
        component={OrderDetailsPage}
      />
      <GuestRoute
        location={location}
        path="/addticket"
        exact
        component={AddTicketPage}
      />
      <Route
        location={location}
        path="/tickets/view-ticket"
        exact
        component={TicketDetailsPage}
      />
    </div>
  );
};

App.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default App;
