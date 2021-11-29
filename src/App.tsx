import React, { useEffect } from 'react';
import {
  Switch,
  Route,
  useLocation
} from 'react-router-dom';

import AOS from 'aos';

import Home from './pages/Home';
import Photos from './pages/Photos';
import MyAccount from './pages/MyAccount';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import ResetPassword from './pages/ResetPassword';
import AllPhotos from './pages/AllPhotos';
import AddNew from './pages/AddNew';

const App = () => {

  const location = useLocation();

  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 700,
      easing: 'ease-out-cubic',
    });
  });

  useEffect(() => {
    window.scroll({ top: 0 });
  }, [location.pathname]);

  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/photos">
          <Photos />
        </Route>
        <Route path="/myaccount">
          <MyAccount />
        </Route>
        <Route path="/allphotos">
          <AllPhotos />
        </Route>
        <Route path="/addnew">
          <AddNew />
        </Route>
        <Route path="/signin">
          <SignIn />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/reset-password">
          <ResetPassword />
        </Route>
      </Switch>
    </>
  );
}

export default App;
