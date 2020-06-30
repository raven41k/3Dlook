import React, {useState} from 'react';
import { Route, Switch } from 'react-router-dom';
import ShopHeader from '../shop-header';
import { HomePage } from '../pages';
import { Product } from '../pages';

import './app.scss';

const App = () => {
  const [showCart, setShowCart] = useState(false);
  return (
    <main role="main" className="container">
      <ShopHeader showCart={showCart} setShowCart={setShowCart}/>
      <Switch>
        <Route
          path="/"
          render={(props) => <HomePage {...props} showCart={showCart} setShowCart={setShowCart} />}
          exact />

        <Route
          path="/product/:id"
          component={Product}
          />
      </Switch>
    </main>
  );
};

export default App;
