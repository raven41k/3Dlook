import React from 'react';
import { ProductsServiceConsumer } from '../products-service-context';

const withProductsService = () => (Wrapped) => {

  return (props) => {
    return (
      <ProductsServiceConsumer>
        {
          (productsService) => {
            return (<Wrapped {...props}
                     productsService={productsService}/>);
          }
        }
      </ProductsServiceConsumer>
    );
  }
};

export default withProductsService;
