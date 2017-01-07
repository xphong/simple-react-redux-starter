import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import './styles/main.scss';

import { configureStore } from './store/configureStore';
import DevTools from './containers/DevTools';
import routes from './routes';
import App from './containers/App';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <div>
      <Router history={history} routes={routes} />
      {process.env.NODE_ENV === 'development' ? <DevTools /> : ''}
    </div>
  </Provider>,
  document.getElementById('root')
);
