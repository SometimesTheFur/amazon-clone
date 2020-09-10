import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';

function Header() {
    return (
        <div className='header'>
            <img className='header__logo' src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'/>
            
            <div className='header__search'>
                <input className='header__searchInput' type='text' />
                <SearchIcon className='header__searchIcon' />
            </div>

            <div className='header__nav'>
                <div className='header__option'>
                    <span className='header__optionLineOne'>Hello, Guest</span>
                    <span className='header__lineTwo'> Sign In</span>
                </div>

                <div className='header__option'>
                    <span className='header__optionLineOne'>Returns</span>
                    <span className='header__lineTwo'> & Orders</span>
                </div>

                <div className='header__option'>
                    <span className='header__optionLineOne'>Your</span>
                    <span className='header__lineTwo'> Prime</span>
                </div>

                <div className='header__optionBasket'>
                    <ShoppingCartOutlinedIcon />
                    <span className='header__lineTwo header__basketCount'>0</span>
                </div>
            </div>
        </div>
    )
}

export default Header;
