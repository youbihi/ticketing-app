import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { BrowserRouter, Route } from 'react-router-dom';
import decode from 'jwt-decode';
import Cookies from 'js-cookie';

import App from './App';
import registerServiceWorker from './registerServiceWorker';
import rootReducer from './rootReducer';
import { userLoggedIn } from './actions/auth';

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

//access the token included in the session cookie
let JWT_TOKEN = Cookies.get('jwt');

// decoding the JWT token and dispatchig to the store the user
if (JWT_TOKEN) {
  const payload = decode(JWT_TOKEN);
  const user = {
    token: JWT_TOKEN,
    id: payload.id,
    email: payload.email,
  };
  store.dispatch(userLoggedIn(user));
}

// Adding React router and Redux Store to the App

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <Route component={App} />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
registerServiceWorker();
