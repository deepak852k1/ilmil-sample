import React from 'react'
import './Product.css'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

function Product({ id, title, image, price, rating }) {
  return (
    <div className='product'>
        <div className='product__info'>
        <p>{title}</p>
        <p className="product__price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
         
              <p>{rating}</p>
           
            </div>
        </div>
    
        <img src={image} alt="" />
        <button className="button">
     <span>Add to cart</span>
    <div className="cart">
     <svg viewBox="0 0 36 26">
     <polyline points="1 2.5 6 2.5 10 18.5 25.5 18.5 28.5 7.5 7.5 7.5"></polyline>
     <polyline points="15 13.5 17 15.5 22 10.5"></polyline>
     </svg>
     </div>
     </button>
    </div>
  )
} 

export default Product