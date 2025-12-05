// Importe le router d'Express
const express = require('express');
const router = express.Router();

// Route pour la page d'accueil
router.get('/', (req, res) => {
    const fruits = ['Pomme', 'Poire', 'Orange', 'Mangue'];

    res.render('homepage', { 
        title: `Accueil`, 
        message: `Bienvenue sur la page d'accueil !`,
        fruits: fruits
    });
});

// Route pour la page "À propos"
router.get('/about', (req, res) => {
    res.render('about', { 
        title: `À propos`, 
        message: `Ceci est la page à propos.` 
    });
});

// Route pour la page "Contact"
router.get('/contact', (req, res) => {
    res.render('contact', { 
        title: `Contact`, 
        message: `N'hésitez pas à nous contacter !` 
    });
});

module.exports = router;