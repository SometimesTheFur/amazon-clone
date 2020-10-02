import { useElements, useStripe, CardElement } from '@stripe/react-stripe-js';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useStateValue } from '../../StateProvider';
import CheckoutProd from '../Checkout/CheckoutProd';
import './Payment.css';
import CurrencyFormat from 'react-currency-format';
import {getCartTotal} from '../../reducer';
import Axios from 'axios';

function Payment() {
    const [{cart, user}, dispatch] = useStateValue();

    const stripe = useStripe();
    const elements = useElements();

    const [processing, setProcessing] = useState("");
    const [succeded, setSucceded] = useState(false);
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState(true); 
    
    useEffect(() => {
        const getClientSecret = async () => {
            const response = await Axios({
                method: 'post',
                url: `/payments/create?total=${getCartTotal(cart) * 100}`
            });
            setClientSecret(response.data.clientSecret)
        }
        getClientSecret();
    }, [cart])

    const handleSubmit = async (event) => {
        event.preventDefault();
        setProcessing(true);
        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({paymentIntent}) => {
            setSucceded(true);
            setError(null)
            setProcessing(false)

            history.replace('/orders')
        })
    }
    const handleChange = event => {
        setDisabled(event.empty);
        setError(event.error ? event.error.messgage : "")
    }

    return (
        <div className='payment'>
            <div className='payment__container'>
                <h1>
                    Checkout (
                        <Link to="/checkout">{cart?.length} items</Link>
                    )
                </h1>

                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Delivery Address</h3>
                    </div>
                    <div className='payment__address'>
                        <p>{user?.email}</p>
                        <p>123 React Lane</p>
                        <p>Los Angeles, CA</p>
                    </div>
                </div>
                
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className='payment__items'>
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
                
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Payment Method</h3>
                    </div>
                    <div className='payment__details'>
                        <form>
                            <CardElement onChange={handleChange}/>
                            <div className='payment__priceContainer'>
                                <CurrencyFormat 
                                    renderText={(value) => (
                                        <h3>Order Total: {value}</h3>
                                    
                                    )}
                                    decimalScale={2}
                                    value={getCartTotal(cart)}
                                    displayType={"text"}
                                    thousandSeperator={true}
                                    prefix={"$"}
                                />
                                <button disabled={processing || disabled || succeded}>
                                    <span> {processing ? <p>Processing</p> : "Buy Now"}</span>
                                </button>
                            </div>
                            {error && <div>{error}</div>}

                        </form>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Payment
