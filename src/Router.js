import React from 'react';
import { Switch, Route, Redirect } from 'react-router';
import checkAuth from './checkAuth';
import Dashboard from './components/Dashboard';
import Request from './containers/request';
import About from './components/About';
import Blog from './containers/blog';
import Login from './containers/login';
import Driver from './containers/driver';
import Admin from './components/admin/Admin';
import Ordered from './components/Ordered';



const ProtectedRoute = ({ component: Component, ...rest}) => {
  return(
    <Route
      {...rest}
      render={(props) => checkAuth()
        ? <Component {...props} />
        : <Redirect to="/login" />}
    />
  );
}

const Router = () => {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route default exact path="/" component={Dashboard} />
      <Route path="/request" component={Request}/>
      <ProtectedRoute exact path="/driver" component={Driver} />
      <ProtectedRoute exact path="/admin" component={Admin} />
      <Route path="/about" component={About} />
      <Route path="/blog" component={Blog} />
      <Route path="/submitted" component={Ordered} />
    </Switch>
  );
};

export default Router;