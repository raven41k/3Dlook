import React from 'react';
import ProductsList from '../products-list';
import Nav from '../navigation';
import ShoppingCartTable from '../shopping-cart/shopping-cart';
import './home-page.scss';

const HomePage = ({showCart, setShowCart}) => {
  return (
    <div className="content">
      <Nav/>
      <ProductsList />
      <ShoppingCartTable showCart={showCart} setShowCart={setShowCart} />
    </div>
  );
};

export default HomePage;
