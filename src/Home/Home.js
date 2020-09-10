import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className='home'>
            <div className='home__container'>
                <img className='home__image' src="https://images-na.ssl-images-amazon.com/images/G/01/Audible/en_US/images/creative/amazon/Minerva_Gateway_Hero_Desktop_070820_PremiumPlus_2x._CB410855810_.jpg" alt="Try the new Audible: audiobooks plus so much more" />

                <div className='home__row'>
                    <Product
                        id="BL001aER" 
                        title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
                        price={19.99} 
                        image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg" 
                        rating={5} 
                    />
                    <Product
                        id="KMSo6" 
                        title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen mixer with K-Beater, Dough Hook and Whisk, 5 Liter Glass Bowl" 
                        price={239.99} 
                        image="https://images-na.ssl-images-amazon.com/images/I/71mv04koc5L._AC_SL1500_.jpg" 
                        rating={4} 
                    />
                </div>

                <div className='home__row'>
                    <Product
                        id="0AEg3" 
                        title="Amazon Echo (3rd Generation) | Smart Speaker with 'Alexa', Charcoal Grey" 
                        price={98.99} 
                        image="https://images-na.ssl-images-amazon.com/images/I/6182S7MYC2L._AC_SL1000_.jpg" 
                        rating={4} 
                    />
                    
                    <Product
                        id="FBvlg4Bl" 
                        title="Fitbit Versa Lite Edition Smart Watch, One Size (S and L Bands Included)" 
                        price={120.90} 
                        image="https://images-na.ssl-images-amazon.com/images/I/7171bI5B6qL._AC_SL1500_.jpg" 
                        rating={4} 
                    />
                    <Product
                        id="AiPADPgb128SILg4" 
                        title="New Apple iPad Pro (12.9inch, Wi-Fi, 128GB) - 4th Generation" 
                        price={598.99} 
                        image="https://images-na.ssl-images-amazon.com/images/I/81FH2j7EnJL._AC_SL1500_.jpg" 
                        rating={4} 
                    />
                </div>

                <div className='home__row'>
                    <Product
                        id="" 
                        title="Samsung LC49RG90SSUXEN 49inch Curved LED Gaming Monitor" 
                        price={199.99} 
                        image="https://images-na.ssl-images-amazon.com/images/I/61Hh-0F7AbL._AC_SL1000_.jpg" 
                        rating={3} 
                    />
                </div>
            </div>
        </div>
    );
}

export default Home
