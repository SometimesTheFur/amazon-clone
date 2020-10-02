const functions = require('firebase-functions');
const express = require('express');
const cors = reuire('cors');
const stripe = require('stripe')('sk_test_51HXp0tA14Ijnxybvd5YTYrLPzmLBeqpJUChfkfBSsJMdz7iI3NOSO8mXZZ8qEUw1LkRaKY2EEGPVlLn97YFGvkoD00A2y9oADD');

//API

// - App Config
const app = express();

// - Middlewares
app.use(cors({origin: true}));
app.use(express.json());

// - API Routes
app.get('/', (request, response) => response.status(200).send ('hello world'))

// - Listen Command
exports.api = functions.https.onRequest(app);