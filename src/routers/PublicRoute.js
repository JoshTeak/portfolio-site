import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

export const PublicRoute = () => (
  <Route component={() => (
    <Redirect to="/aboutme" />
  )} />
);

export default PublicRoute;
