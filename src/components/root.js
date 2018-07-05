import React from 'react';
import { Route, Switch } from 'react-router-dom';

import DoctorsIndexContainer from './doctorsIndexContainer';
import MyNavbar from './myNavbar';

const Root = () => (
  <div>
    <MyNavbar />
    <Switch>
      <Route path="/doctors" component={DoctorsIndexContainer} />
    </Switch>
  </div>
)

export default Root;