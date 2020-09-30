import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import {Link} from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import {auth} from '../firebase';
//Yo! I'm Geoff Beetoes!
function Header() {
    const [{cart, user}, dispatch] = useStateValue();
    const handleAuthentication = () => {
        if (user) {
            auth.signOut();
        }
    }

    return (
        <div className='header'>
            <Link to="/">
              <img className='header__logo' src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'/>  
            </Link>
            <div className='header__search'> 
                <input className='header__searchInput' type='text' /> 
                <SearchIcon className='header__searchIcon' />
            </div>

            <div className='header__nav'>
                <Link to={!user && '/login'}>
                    <div onClick={handleAuthentication} className='header__option'>
                        <span className='header__optionLineOne'>Hello, Guest</span>
                        <span className='header__lineTwo'>{user ? 'Sign Out' : 'Sign In'}</span>
                    </div>
                </Link>

                <div className='header__option'>
                    <span className='header__optionLineOne'>Returns</span>
                    <span className='header__lineTwo'> & Orders</span>
                </div>

                <div className='header__option'>
                    <span className='header__optionLineOne'>Your</span>
                    <span className='header__lineTwo'> Prime</span>
                </div>

                <Link to="/checkout">
                    <div className='header__optionBasket'>
                        <ShoppingCartOutlinedIcon />
                        <span className='header__lineTwo header__basketCount'>{cart?.length}</span>
                    </div>
                </Link>
                
            </div>
        </div>
    )
}

export default Header;
