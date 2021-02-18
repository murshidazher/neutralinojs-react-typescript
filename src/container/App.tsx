import React from 'react';
import { ThemeProvider } from 'theme-ui';
import {
  Router,
  createMemorySource,
  createHistory,
  LocationProvider,
  RouteComponentProps
} from '@reach/router';
import Home from '../screens/Home';
import { theme } from '../theme';

const source = createMemorySource('/');
const history = createHistory(source);

const App = (): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <LocationProvider history={history}>
        <Router>
          <RouterPage path="/" pageComponent={<Home />} />
        </Router>
      </LocationProvider>
    </ThemeProvider>
  );
};

export default App;

const RouterPage = (
  props: { pageComponent: JSX.Element } & RouteComponentProps
) => props.pageComponent;
