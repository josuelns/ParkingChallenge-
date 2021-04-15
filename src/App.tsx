import React, {FC} from 'react';

import { Provider } from 'react-redux';
import { store } from './store';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import EntrancePage from './pages/entracePage';
import ExitPage from './pages/exitPage';

import { GlobalStyle} from '../src/assets/utils/styles/global-style'


const App: FC = () => {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Router>
        <Switch>
            <Route exact path="/entrace" component={EntrancePage} />
            <Route exact path="/exit" component={ExitPage} />
            <Route path="*" component={EntrancePage} />
          </Switch>
      </Router>
    </Provider>
  );
}

export default App;
