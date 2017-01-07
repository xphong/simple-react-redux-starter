import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import './styles/main.scss';

import { configureStore } from './store/configureStore';
import DevTools from './containers/DevTools';
import routes from './routes';

const store = configureStore();
const history = syncHistoryWithStore(hashHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <div>
      <Router history={history} routes={routes} />
      {process.env.NODE_ENV === 'development' ? <DevTools /> : ''}
    </div>
  </Provider>,
  document.getElementById('root')
);
