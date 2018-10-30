
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import routes from '../constants/routes';
import Header from '../components/Header';
import Footer from '../components/Footer';
import NotFoundPage from '../views/NotFoundPage';
import LoginPage from '../views/LoginPage';
import SignupForm from '../components/auth/SignupForm';
import LandingPage from '../views/LandingPage';
import Requests from '../components/Requests';

const AppRoutes = () => (
  <BrowserRouter>
    <div className="content">
      <Header />
      <Switch>
        <Route exact path={routes.LANDING} component={LandingPage} />
        <Route exact path={routes.SIGN_IN} component={LoginPage} />
        <Route exact path={routes.SIGN_UP} component={SignupForm} />
        <Route exact path={routes.USER_REQUESTS} component={Requests} />
        <Route component={NotFoundPage} />
      </Switch>
      <Footer />
    </div>
  </BrowserRouter>
);
export default AppRoutes;
