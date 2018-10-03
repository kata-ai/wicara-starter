import * as React from 'react';
import { Route, Switch, RouteComponentProps } from 'react-router';
import HomeFirstPage from './pages/first';
import HomeSecondPage from './pages/second';
import HomeThirdPage from './pages/third';

const HomeModule: React.SFC<RouteComponentProps> = ({ match }) => (
  <Switch>
    <Route exact path={`${match.path}`} component={HomeFirstPage} />
    <Route exact path={`${match.path}/second`} component={HomeSecondPage} />
    <Route exact path={`${match.path}/third`} component={HomeThirdPage} />
  </Switch>
);

export default HomeModule;
