import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <nav className='navbar bg-dark'>
            <h3 className='text-warning ps-5'>Cocktail DB</h3>
            <div className='header-item'>
                <a href="/shop">Shop</a>
                <a href="/Order">Order</a>
                <a href="/review">Review</a>
                <a href="/Home">Home</a>
            </div>
           
        </nav>
    );
};

export default Header;