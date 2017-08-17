import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import { bool, func } from 'prop-types';
import CircularProgress from 'material-ui/CircularProgress';
import Login from '../../pages/Login';
import Purchase from '../../pages/Purchase';
import History from '../../pages/History';
import AuthenticatedLayout from '../../containers/AuthenticatedLayout';
import TermsOfUse from '../../pages/TermsOfUse';
import HowItWorks from '../../pages/HowItWorks';
import Main from '@containers/Main';

const AuthenticatedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      <AuthenticatedLayout>
        <Component {...props} />
      </AuthenticatedLayout>)}
  />
);
AuthenticatedRoute.propTypes = {
  component: func.isRequired,
};

const Routes = () => (
  <Router>
    <Switch>
      <AuthenticatedRoute exact path="/" component={Main} />
      <AuthenticatedRoute exact path="/purchase" component={Purchase} />
      <AuthenticatedRoute exact path="/history" component={History} />
      <AuthenticatedRoute exact path="/terms-of-use" component={TermsOfUse} />
      <AuthenticatedRoute exact path="/how-it-works" component={HowItWorks} />
      <AuthenticatedRoute exact path="/welcome" component={() => <h1>Welcome</h1>} />

      <Route exact path="/login" component={Login} />
      <Route component={() => <h1>Not found</h1>} />

    </Switch>


  </Router>
);


export default Routes;
