import React from 'react';
import './Products.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import Rating from 'react-rating';

function Products(props) {console.log(props.product);
    const {img, name, price, seller, stock, category, url, star} = props.product;

    const cart_icon = <FontAwesomeIcon icon={faShoppingCart} />
  return (
    <div className='Products'>
      <div className='ProductImage'>
        <img src={img} alt="product_image"/>
      </div>

      <div className='ProductDetails'>
        <a href={url} target='_main'>{name}</a>
        <p className='margin'>by : {seller}</p>
        <p className='margin'>Category : {category}</p>
        <h3 className='margin'>${price}</h3>
        <p className='margin' style={{marginBottom:'10px'}}><span>only {stock} left in stock - order now</span></p>
        
        <Rating
          readonly
          initialRating={star}
          emptySymbol="fa-regular fa-star"
          fullSymbol="fa-solid fa-star"
        >
        </Rating>
        <br/>
        <button
            onClick={() => props.handleAddCartButton(props.product)}
            className='CartButton'
        >{cart_icon} Add to cart</button>
      </div>
    </div>
  )
}

export default Products
