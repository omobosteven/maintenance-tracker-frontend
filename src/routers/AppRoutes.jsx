
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import routes from '../constants/routes';
import Header from '../components/Header';
import Footer from '../components/Footer';
import NotFoundPage from '../views/NotFoundPage';
import SignupForm from '../components/auth/SignupForm';
import LoginForm from '../components/auth/LoginForm';
import LandingPage from '../views/LandingPage';
import Requests from '../components/Requests';
import CreateRequestForm from '../components/requests/CreateRequests';
import EditRequestForm from '../components/requests/EditRequests';
import RequestDetails from '../components/requests/RequestDetail';
import PrivateRoute from '../utils/PrivateRoute';

const AppRoutes = () => (
  <BrowserRouter>
    <div className="content">
      <Header />
      <Switch>
        <Route exact path={routes.LANDING} component={LandingPage} />
        <Route exact path={routes.SIGN_UP} component={SignupForm} />
        <Route exact path={routes.SIGN_IN} component={LoginForm} />
        <PrivateRoute exact path={routes.USER_REQUESTS} component={Requests} />
        <PrivateRoute exact path={routes.CREATE_REQUESTS} component={CreateRequestForm} />
        <PrivateRoute exact path={routes.EDIT_REQUESTS} component={EditRequestForm} />
        <PrivateRoute exact path={routes.USER_REQUEST} component={RequestDetails} />
        <Route component={NotFoundPage} />
      </Switch>
      <Footer />
    </div>
  </BrowserRouter>
);
export default AppRoutes;
