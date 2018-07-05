import React from 'react';
import { Route, Switch } from 'react-router-dom';

import DoctorsIndexContainer from './doctorsIndexContainer';
import DoctorDetailContainer from './doctorDetailContainer';
import MyNavbar from './myNavbar';

const Root = () => (
  <div>
    <MyNavbar />
    <Switch>
      <Route path="/doctors/:id" component={DoctorDetailContainer} />
      <Route path="/doctors" component={DoctorsIndexContainer} />
    </Switch>
  </div>
)

export default Root;