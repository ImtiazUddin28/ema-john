import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';

import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
            .then(res=>res.json())
            .then(data => setProducts(data))
     }, [])

     useEffect(()=>{
        const storedData = getStoredCart();
        const saveCart =[];
        for(const id in storedData){
            const addedProduct = products.find(product => product.id === id);
            if(addedProduct){
                const quantity = storedData[id];
                addedProduct.quantity = quantity;
                saveCart.push(addedProduct);
               
            }
           
        }
        setCart(saveCart)
     },[products])

     const handleClick=  (selectedProduct)=>{
        let newCart =[];
        const exists = cart.find(product=>product.id === selectedProduct.id);
        if(!exists){
            selectedProduct.quantity = 1;
            newCart =[...cart, selectedProduct];
        }
        else{
            const rest = cart.filter(product=>product.id !== selectedProduct.id);
            exists.quantity = exists.quantity + 1;
            newCart =[...rest, exists];
        }
        
        setCart(newCart)
        addToDb(selectedProduct.id)
        
     }
    return (
        <div className='shop_container'>
            <div className='products_container'>
                {
                    products.map(product => <Product product={product} key={product.id} handleClick={handleClick}></Product>)
                }
            </div>
            
            <div className="orders_container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;