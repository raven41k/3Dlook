import React, { Component } from 'react';
import ProductsListItem from '../products-list-item';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { withProductsService } from '../hoc';
import { fetchProducts, productAddedToCart } from '../../actions';
import { compose } from '../../utils';

import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

import './products-list.scss';

const ProductsList = ({ products, onAddedToCart }) => {
  return (
    <section className="product-list">
      {
        products.map((product) => {
          return (
            <article key={product.id}>
              <ProductsListItem
                product={product}
                onAddedToCart={() => onAddedToCart(product.id)}/>
            </article>
          );
        })
      }
    </section>
  );
};

class ProductListContainer extends Component {

  componentDidMount() {
    this.props.fetchProducts();
  }

  render() {
    const { products, loading, error, onAddedToCart } = this.props;

    if (loading) {
      return <Spinner />;
    }

    if (error) {
      return <ErrorIndicator />;
    }

    return <ProductsList products={products} onAddedToCart={onAddedToCart}/>;
  }
}

const mapStateToProps = ({ productList: { products, loading, error }}) => {
  return { products, loading, error };
};

const mapDispatchToProps = (dispatch, { productsService }) => {

  return bindActionCreators({
    fetchProducts: fetchProducts(productsService),
    onAddedToCart: productAddedToCart
  }, dispatch);
};

export default compose(
  withProductsService(),
  connect(mapStateToProps, mapDispatchToProps)
)(ProductListContainer);
