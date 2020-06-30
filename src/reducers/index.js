import updateProductList from './product-list';
import updateShoppingCart from './shopping-cart';

const reducer = (state, action) => {
  return {
    productList: updateProductList(state, action),
    shoppingCart: updateShoppingCart(state, action)
  };
};

export default reducer;
