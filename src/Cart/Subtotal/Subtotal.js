import React from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../../StateProvider';
import { getCartTotal } from '../../reducer';

function Subtotal() {
    const [{cart}, dispatch] = useStateValue();
    // let priceSum = 0;
    // const addTotal = () => {
    //     if({price} = "" || NaN)
    //         return priceSum ;
    //     else (priceSum = {price} + {price})
    //         return priceSum;
    // }
    // console.log("addTotal>>>", addTotal);

    return (
        <div className='subtotal'>
            <CurrencyFormat 
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({cart?.length} items):
                <strong> {value}</strong>
                        </p>
                        <small className='subtotal__gift'>
                            <input type="checkbox" /> This order contains a gift.
                        </small>
                    </>
                )}
                decimalScale={2}
                value={0}
                value={getCartTotal(cart)}
                displayType={"text"}
                thousandSeperator={true}
                prefix={"$"}
            />

            <button>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal
