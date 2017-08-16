import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import CircularProgress from 'material-ui/CircularProgress';
import Login from '../../pages/Login';
import Purchase from '../../pages/Purchase';
import History from '../../pages/History';
import AuthenticatedLayout from '../../containers/AuthenticatedLayout';
import Main from '@containers/Main';

const AuthenticatedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      <AuthenticatedLayout>
        <Component {...props} />
      </AuthenticatedLayout>
  )}
  />
);

const Routes = ({
  isAuthenticated,
  loading,
}) => {
  if (loading) {
    return (
      <CircularProgress />
    );
  }

  return (
    <Router>
      <Switch>
        {/* <AuthenticatedLayout> */}
        <AuthenticatedRoute exact path="/" component={Main} />
        <AuthenticatedRoute exact path="/purchase" component={Purchase} />
        <AuthenticatedRoute exact path="/history" component={History} />
        <AuthenticatedRoute exact path="/welcome" component={() => <h1>Welcome</h1>} />
        {/* </AuthenticatedLayout> */}

        <Route exact path="/login" component={Login} />
        <Route component={() => <h1>Not found</h1>} />

      </Switch>


    </Router>
  );
};

export default Routes;
