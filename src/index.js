import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './redux/store';
import './scss/app.scss';
import App from './App';

ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Route path='/' component={App} />
      </Provider>
    </BrowserRouter>
  </StrictMode>,
  document.getElementById('root'),
);
