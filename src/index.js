import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './components/app';
import ErrorBoundry from './components/error-boundry';
import ProductsService from './services/products-service';
import { ProductsServiceProvider } from './components/products-service-context';

import store from './store';

const productsService = new ProductsService();

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundry>
      <ProductsServiceProvider value={productsService}>
        <Router>
          <App />
        </Router>
      </ProductsServiceProvider>
    </ErrorBoundry>
  </Provider>,
  document.getElementById('root')
);