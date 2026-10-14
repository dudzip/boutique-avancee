require('dotenv').config();
const express = require('express');
const produits = require('./routes/produits');
const commandes = require('./routes/commandes');

const app = express();
app.use(express.json());
app.use(express.static('public'));
app.use('/api/produits', produits);
app.use('/api/commandes', commandes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Boutique démarrée sur le port ${PORT}`));
