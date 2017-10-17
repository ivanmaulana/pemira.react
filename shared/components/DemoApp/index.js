import 'normalize.css/normalize.css';

import React from 'react';
import Switch from 'react-router-dom/Switch';
import Route from 'react-router-dom/Route';
import Helmet from 'react-helmet';

import { Provider } from 'react-redux';

import config from '../../../config';
import configureStore from './store.js';
import initialState from './initialState.js';

import './globals.css';

import Error404 from './Error404';

import App from './App';

const store = configureStore(initialState);

function DemoApp() {
  return (
    <Provider store={store}>
      <div style={{ padding: '2rem' }}>
        <Helmet>
          <html lang="en" />
          <meta charSet="utf-8" />
          <meta name="application-name" content={config('htmlPage.defaultTitle')} />
          <meta name="description" content={config('htmlPage.description')} />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="msapplication-TileColor" content="#2b2b2b" />
          <meta name="msapplication-TileImage" content="/favicon.ico" />
          <meta name="theme-color" content="#2b2b2b" />
          <title>{config('htmlPage.defaultTitle')}</title>
          <link rel="icon" sizes="16x16 32x32" href="/favicon.ico" />
          <link rel="manifest" href="/manifest.json" />
          <link href="https://fonts.googleapis.com/css?family=Varela+Round" rel="stylesheet" />
          <link href="bootstrap.min.css" rel="stylesheet" />
        </Helmet>
        <div style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
          <Switch>
            <Route exact path="/" component={App} />
            <Route component={Error404} />
          </Switch>
        </div>
      </div>
    </Provider>
  );
}

export default DemoApp;
