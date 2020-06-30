import React, {useState} from 'react';
import ImageGallery from 'react-image-gallery';
import { Link } from 'react-router-dom';
import './products-list-item.scss';

const ProductsListItem = ({ product, onAddedToCart }) => {
  const { title, warehouse, price, coverImage, category, id } = product;
  const [ isShowThumbnails, setShowThumbnails ] = useState(false);
  return (
    <>
      <div onMouseEnter={() => setShowThumbnails(true)} onMouseLeave={() => setShowThumbnails(false)} className="products-list-item">
        <ImageGallery 
          showFullscreenButton={false} 
          showThumbnails={!!isShowThumbnails}
          showNav={!!isShowThumbnails}
          showPlayButton={false}
          items={coverImage}
        />
        <Link to={`/product/${id}`}>
          <div className="product__details">
            <p className="product__details__category">{category}</p>
            <h2 className="product__details__title">{title}</h2>
            <div className="product__details__price">${price}</div>
            <div className="product__details__warehouse">На складе {warehouse}</div>
          </div>
        </Link>
      </div>
      <button
        onClick={onAddedToCart}
        className="product__details__add-to-cart">
        Добавить в корзину
      </button>
    </>
  );
};

export default ProductsListItem;
