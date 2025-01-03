import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app.tsx';
import {Provider} from 'react-redux';
import {store} from '@store/index.ts';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <link rel="stylesheet" href="public/css/extended.css"  type = "text/css" />
      <App/>
    </Provider>
  </React.StrictMode>
);
