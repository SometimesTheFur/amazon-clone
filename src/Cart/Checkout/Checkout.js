import React from 'react'
import "./Checkout.css"
import Subtotal from '../Subtotal/Subtotal'
import CheckoutProd from './CheckoutProd'
import { useStateValue } from '../../StateProvider'

function Checkout() {
    const [{cart, user}, dispatch] = useStateValue();

    return (
        <div className='checkout'>
            <div className='checkout__left'>
                <img
                    className='checkout__ad'
                    src="https://media.wizards.com/2020/images/magic/znr/release/en_pBjFlyI.jpg"
                    alt="Magic The Gathering 2021 Product Lineup"
                    href="https://magic.wizards.com/en/products?source=MX_Nav2020"
                />

                <div>
                    <h3>Hello, {user ? user?.email : 'Guest'}</h3>
                    <h2 className='checkout__title'>
                        Your Shopping Cart
                    </h2>

                    {cart.map(item => (
                        <CheckoutProd
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating} 
                        />
                    ))}
                   
                </div>
            </div>
               
                <div className='checkout__right'>
                    <Subtotal />
                </div>
            
        </div>
    );
}

export default Checkout
