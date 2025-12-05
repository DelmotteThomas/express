// Importe le router d'Express
const express = require('express');
const router = express.Router();

// Importe les contrôleurs
const homepageController = require('../src/controller/homepagecontroller');
const aboutController = require('../src/controller/aboutcontroller');
const contactController = require('../src/controller/contactcontroller');

// Route pour la page d'accueil
router.get('/', homepageController.index);

// Route pour la page "À propos"
router.get('/about', aboutController.index);

// Route pour la page "Contact"
router.get('/contact', contactController.index);

// Quand on fait une collection / une api on mets au pluriels 
// ( orienté pour DEV)

// /pokemons                // Liste des Pokémons
// /pokemons/new            // Crée un nouveau Pokémon
// /pokemons/:id            // Affiche un Pokémon spécifique
// /pokemons/:id/edit       // Modifie un Pokémon existant
// /pokemons/:id/delete     // Supprime un Pokémon




// orienté utilisateur

// /pokemons                // Liste des Pokémons
// /pokemon                 // Crée un nouveau Pokémon
// /pokemon/:id            // Affiche un Pokémon spécifique
// /pokemon/:id/edit       // Modifie un Pokémon existant
// /pokemon/:id/delete     // Supprime un Pokémon

const pokemoncontroller = require('../src/controller/pokemoncontroller');


// Route pour afficher la liste des Pokémons
router.get('/pokemons',pokemoncontroller.index);


// Route pour créer un nouveau Pokémon
router.get('/pokemon',pokemoncontroller.create);
router.post('/pokemon',pokemoncontroller.create);

// Route pour afficher un Pokémon spécifique
router.get('/pokemon/:id', pokemoncontroller.show);

// Route pour mettre à jour un Pokémon existant
router.get('/pokemon/:id/edit', pokemoncontroller.update);
router.post('/pokemon/:id/edit', pokemoncontroller.update);


// Route pour supprimer un Pokémon
// message de confirmation
router.get('/pokemon/:id/delete', pokemoncontroller.delete);
// traiter la demande de suppression du pokemon
router.post('/pokemon/:id/delete', pokemoncontroller.delete);

// Exporte le router

module.exports = router;