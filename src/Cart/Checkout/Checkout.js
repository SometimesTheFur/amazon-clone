import React from 'react'
import "./Checkout.css"
import Subtotal from '../Subtotal/Subtotal'

function Checkout() {
    return (
        <div className='checkout'>
            <div className='checkout__left'>
                <img
                    className='checkout__ad'
                    src="https://www.outdoored.com/sites/default/files/images/events/WRMC_2020_Banner%20and%20logos%20for%20email.jpg"
                    alt=""
                />

                <div>
                    <h2 className='checkout__title'>
                        Your Shopping Cart
                    </h2>
                    {/* CartItem */}
                    {/* CartItem */}
                    {/* CartItem */}
                    {/* CartItem */}
                    {/* CartItem */}
                </div>
            </div>
               
                <div className='checkout__right'>
                    <Subtotal />
                </div>
            
        </div>
    );
}

export default Checkout
