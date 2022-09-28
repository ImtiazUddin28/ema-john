import React from 'react';
import logo from '../../images/Logo.svg';
import './Header.css';
const Header = () => {
    return (
        <nav className='headerClass'>
            <img src={logo} alt=""/>
            <div>
                <a href="/shop" >Shop</a>
                <a href="/orders" >Orders</a>
                <a href="/inventory" >Inventory</a>
                <a href="/about" >About</a>
            </div>
        </nav>
    );
};

export default Header;