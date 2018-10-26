import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Home from './components/Pages/Home';
import PageNotFound from './components/Pages/PageNotFound';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <Router>
          <div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route component={PageNotFound} />
            </Switch>
          </div>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
