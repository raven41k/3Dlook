import React from 'react';
import { connect } from 'react-redux';
import close from '../../img/close.svg';

import {
  productAddedToCart,
  productRemovedFromCart
 } from '../../actions';

import './shopping-cart.scss';

const ShoppingCartTable = ({ items, total, onIncrease, onDecrease, onDelete, setShowCart, showCart }) => {
  const renderRow = (item, idx) => {
    const { id, title, count, total, coverImage } = item;
    return (
      <li key={id}>
        <img className="shopping-cart__list__img" src={coverImage[0].original} alt="product" />
        <div className="shopping-cart__list__desc">
          <h3 className="shopping-cart__list__desc__title">{title}</h3>
          <div className="shopping-cart__list__desc__bottom">
            <div className="counter">
              <button
                onClick={() => onDecrease(id)}
                className="btn">
                -
              </button>
              <span className="count">{count}</span>
              <button
                onClick={() => onIncrease(id)}
                className="btn">
                +
              </button>
            </div>
            <span className="price">{`$${total}`}</span>
          </div>
        </div>
      </li>
    );
  };

  const result = items.map(i => i.total).reduce((sum, current) => sum + current, 0);

  return (
    <aside className={`${showCart ? 'open' : ''} shopping-cart`}>
      <div className="shopping-cart__content">
        <div className="shopping-cart__header">
          <button onClick={() => setShowCart(false)}>
            <img src={close} alt="close" />
          </button>
        </div>
        <ul className="shopping-cart__list">
          { items.map(renderRow) }
          {
            result > 0 ? (
            <div className="shopping-cart__total">
              <span className="shopping-cart__total__title">Итого:</span>
              <span className="shopping-cart__total__num">${result}</span>
            </div>
            ) : null
          }
          
        </ul>
      </div>
      
      
      <div className="shopping-cart__bottom">
        {result > 0 && <button onClick={() => setShowCart(false)} className="shopping-cart__buy-btn">Купить</button>}
      </div>
    </aside>
  );
};

const mapStateToProps = ({ shoppingCart: { cartItems, orderTotal }}) => {
  return {
    items: cartItems,
    total: orderTotal
  };
};

const mapDispatchToProps = {
  onIncrease: productAddedToCart,
  onDecrease: productRemovedFromCart
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable);
