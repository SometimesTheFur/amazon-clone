const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const { response } = require('express');
const stripe = require('stripe')('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');

//API

// - App Config
const app = express();

// - Middlewares
app.use(cors({origin: true}));
app.use(express.json());

// - API Routes
app.get('/', (request, response) => res.status(200).send ('hello world'))

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;

    console.log('payment Request Recieved >>>', total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, 
        currency: 'usd',
    });

    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})

// - Listen Command
exports.api = functions.https.onRequest(app);

// - http://localhost:5001/clone-ea67e/us-central1/api