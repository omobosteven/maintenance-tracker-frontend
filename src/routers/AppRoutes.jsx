
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import routes from '../constants/routes';
import Header from '../components/Header';
import Footer from '../components/Footer';
import NotFoundPage from '../views/NotFoundPage';
import LoginPage from '../views/LoginPage';
import SignupPage from '../views/SignupPage';
import LandingPage from '../views/LandingPage';

const AppRoutes = () => (
  <BrowserRouter>
    <div className="content">
      <Header />
      <Switch>
        <Route exact path={routes.LANDING} component={LandingPage} />
        <Route exact path={routes.SIGN_IN} component={LoginPage} />
        <Route exact path={routes.SIGN_UP} component={SignupPage} />
        <Route component={NotFoundPage} />
      </Switch>
      <Footer />
    </div>
  </BrowserRouter>
);
export default AppRoutes;
