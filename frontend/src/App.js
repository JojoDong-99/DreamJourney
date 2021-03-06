import React from 'react';
import Navbar from './components/Navbar/Navbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Homepage from './pages/Homepage';
import TripDetailsPage from './pages/TripDetailsPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { LinearProgress } from '@material-ui/core';
import {
  TripDetailsContextProvider,
  TripDetailsContext,
} from './pages/TripDetailsProvider';

function App() {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <LinearProgress />;
  }

  return (
    <Router>
      <CssBaseline />
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Homepage />
        </Route>
        <Route path="/tripdetails/:id">
          <TripDetailsContextProvider>
            <TripDetailsPage />
          </TripDetailsContextProvider>
        </Route>
      </Switch>
    </Router>
  );
}
export default App;
