import React from 'react';
import { Router, Route, Redirect, Switch, Link, NavLink, useLocation } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import AboutMePage from '../components/AboutMePage'; 
import ProjectsPage from '../components/ProjectsPage';
import ContactPage from '../components/ContactPage'; 
import NotFoundPage from '../components/NotFoundPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import Header from '../components/Header';
import Footer from '../components/Footer';

import { TransitionGroup, CSSTransition } from "react-transition-group";

export const history = createBrowserHistory();

export const AppRouter = () => (
  <div>
  <Router history={history}>
    <Switch>
      <PublicRoute path="/" exact={true} />
      <Route path="*">
        <Header />
        <Page />
        <Footer />
      </Route>
    </Switch>
  </Router>
  </div>
);

export const Page = () => {
  let location = useLocation();

  return (
    <div className="main">
      <TransitionGroup class="transition">
        <CSSTransition
          key={location.key}
          classNames="page-change"
          timeout={500}
          onEnter={(e) => {
            let enteringDirection = Direction('ENTER');
            e.style.transform = `translate(${enteringDirection}%)`
          }}
          onEntering={(e) => {
            e.style.transform = "translate(0%)"
          }}
          onExiting={(e) => {
            let exitingDirection = Direction('EXIT');
            e.style.transform = `translate(${exitingDirection}%)`
          }}
        >
          <Switch location={location}>
            <PrivateRoute path="/aboutme" component={AboutMePage} />
            <PrivateRoute path="/projects" component={ProjectsPage} />
            <PrivateRoute path="/contact" component={ContactPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </div>
  )
}

export const Direction = (dir) => {
  const newPathValue = LocationValue(history.location.pathname);
  const oldPathValue = LocationValue(history.location.state.previousPath.pathname);
  if((newPathValue > oldPathValue && dir === 'ENTER') || (newPathValue < oldPathValue && dir === 'EXIT')) {
    return 100;
  } else {
    return -100;
  } 
}

export const LocationValue = (path) => {
  let pathValue;
  switch (path) {
    case '/aboutme':
      return 0;
    case '/projects':
      return 1;
    case '/contact':
      return 2;
    default:
      return 10;
  }
}

export default AppRouter;
