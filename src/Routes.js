import React from 'react';
import {
  Routes,
  Route,
  BrowserRouter,
} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Notification from './containers/notification';
import FeedbackContainer from './containers/feedback';
import { makeStyles } from '@material-ui/core/styles';
import ErrorBoundary from './errorBoundary';
import Welcome from './containers/welcome';

const history = createBrowserHistory();

const useStyles = makeStyles(theme => ({
  containerHeight: {
    minHeight: '100vh',
  },
}));

function Routes1() {
  const classes = useStyles();
  return (
    <BrowserRouter location={history.location} navigator={history}>
    <ErrorBoundary>
      <Notification />
      <div className={classes.containerHeight}>
        <Routes>
          <Route path="/" element={<Welcome />} exact />
          <Route path="/feedback" element={<FeedbackContainer />} exact />
        </Routes>
      </div>
      </ErrorBoundary>
    </BrowserRouter>
  );
}

export default Routes1;