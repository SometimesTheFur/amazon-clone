import React from 'react';
import classes from './Header.css';

function Header() {
    return (
        <div className='header'>
            <img className='header_logo' src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'/>
            
            <div className='header_search'>
                <input className='header_searchInput' type='text' />
                {/* Logo */}
            </div>
            
            <div className='header_nav'>

            </div>
        </div>
    )
}

export default Header
