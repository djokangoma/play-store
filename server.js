const express = require("express");
const mongoose = require('mongoose');

const app = express();
const stuffRoutes = require('./routes/stuff');

const port = 3000;

mongoose.connect('mongodb+srv://djokangoma:kangoma7@cluster0.dbz7z.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
 .then(() => console.log('Connexion à MongoDB réussie !'))
 .catch(() => console.log('Connexion à MongoDB échouée !'));


app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

app.use('/api/stuff', stuffRoutes);
  
app.listen(process.env.port || 3000)
console.log("le serveur est en ecoute");



module.exports = app;