import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import EntrancePage from './pages/entracePage';
import ExitPage from './pages/exitPage';


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App>
        <Switch>
          <Route exact path="/entrace" component={EntrancePage} />
          <Route exact path="/exit" component={ExitPage} />
          <Route path="*" component={EntrancePage} />
        </Switch>
      </App>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
