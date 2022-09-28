import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import './Product.css'
const Product = (props) => {
    const {name, price, img, ratings,seller}= props.product;

    return (
        <div className='product_container'>
           <img src={img} alt="Product"></img>
           <h3>{name}</h3>
           <h2>Price: {price}$</h2>
            <h3>Brand: {seller} </h3>
           <p>Rattings: {ratings} starts</p>
           <button onClick={()=>props.handleClick(props.product)} className='button'>Add To Cart <FontAwesomeIcon icon={faCoffee} /></button>
        </div>
    );
};

export default Product;