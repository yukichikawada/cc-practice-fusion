import React from 'react';
import { Route, Switch } from 'react-router-dom';

import DoctorsIndexContainer from './doctorsIndexContainer';
import DoctorDetailContainer from './doctorDetailContainer';
import MyNavbar from './myNavbar';
import DoctorCategories from './doctorCategories';
import DoctorCategoryResults from './doctorCategoryResults';

const Root = () => (
  <div>
    <MyNavbar />
    <Switch>
      <Route path="/categories/*"   component={DoctorCategoryResults} />
      <Route path="/category"       component={DoctorCategories} />
      <Route path="/doctors/:id"    component={DoctorDetailContainer} />
      <Route exact path="/doctors"  component={DoctorsIndexContainer} />
    </Switch>
  </div>
)

export default Root;