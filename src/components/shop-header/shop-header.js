import React from 'react';
import './shop-header.scss';
import { Link } from 'react-router-dom';
import logo from '../../img/logo.svg';
import cart from '../../img/cart.svg';
import { connect } from 'react-redux';

const ShopHeader = ({ numItems, setShowCart, showCart }) => {
  return (
    <header className="header">
      <div/>
      <Link to="/">
        <div className="header__logo">
          <img src={logo} alt="Logo" />
        </div>
      </Link>
      <button className="header__cart" onClick={() => setShowCart(!showCart)}>
        <span>
          <img src={cart} alt="cart" />
        </span>
        <span className="header__cart__num">
          {numItems.length}
        </span>
      </button>
    </header>
  );
};

const mapStateToProps = ({ shoppingCart: { cartItems }}) => {
  return {
    numItems: cartItems,
  };
};

export default connect(mapStateToProps)(ShopHeader);
