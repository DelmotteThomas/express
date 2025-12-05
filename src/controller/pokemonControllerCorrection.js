const { name } = require('ejs');
const config = require('../../config/config.pokeapi');


async function getPokemons() {

    // Definir un tableau pour stocker les pokemons
    let pokemons = [];


    // Faire une requête à l'API PokeAPI pour récupérer les pokémons
    try {
        const response = await fetch(config.url);
        const data = await response.json();
        
        pokemons = data.results;

    } catch (error) {
        console.error('Erreur lors de la récupération des Pokémons :', error);
    }

    // Ajouter l'ID et l'URL de l'image à chaque Pokémon
    pokemons = pokemons.map((pokemon, index) => {
        const urlParts = pokemon.url.split('/');
        const id = urlParts[urlParts.length - 2];

        return {
            id: id,
            name: pokemon.name,
            url: pokemon.url,
            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
        };
    });

    return pokemons;
}

async function getPokemon(id) {
    let pokemon = null;
    
    try {
        const response = await fetch(`${config.url}/${id}`);
        pokemon = await response.json();
    } catch (error) {
        console.error('Erreur lors de la récupération du Pokémon :', error);
    }

    return pokemon;
}



/**
 * Liste des Pokémons
 * 
 * @param {*} req 
 * @param {*} res 
 */
exports.index = async (req, res) => {
    let pokemons = await getPokemons();

    res.render('pages/pokemons/index', { 
        title: 'Liste des Pokémons',
        pokemons: pokemons
    });
};

/**
 * Crée un nouveau Pokémon
 * 
 * @param {*} req 
 * @param {*} res 
 */
exports.create = (req, res) => {};

/**
 * Lire un Pokémon spécifique
 * 
 * @param {*} req 
 * @param {*} res 
 */
exports.show = async (req, res) => {

    const pokemonId = req.params.id;
    const pokemon = await getPokemon(pokemonId);

    res.render('pages/pokemons/show', { 
        title: 'Détail du Pokémon',

        pokemon: pokemon,

        id    : pokemonId,
        name  : pokemon.name,
        image : `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`,
        height: pokemon.height || 'N/A',
        weight: pokemon.weight || 'N/A',
        types : pokemon.types.map(typeInfo => typeInfo.type.name) || []
    });
};

/**
 * Met à jour un Pokémon existant
 * 
 * @param {*} req 
 * @param {*} res 
 */
exports.update = (req, res) => {};

/**
 * Supprime un Pokémon
 * 
 * @param {*} req 
 * @param {*} res 
 */
exports.delete = (req, res) => {};