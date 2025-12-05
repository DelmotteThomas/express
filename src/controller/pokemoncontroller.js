const BASE_URL = "https://pokeapi.co/api/v2/";
const axios = require("axios").default;

/**
 * Liste des Pokémons
 *
 * @param {*} req
 * @param {*} res
 */
// exports.index = async (req, res) => {
//   try {
//     const response = await axios.get(`${BASE_URL}/pokemon`, {
//       params: { limit: 20 },
//     });

//     const pokemons = response.data.results.map((p) => {
//       const id = p.url.match(/\/pokemon\/(\d+)\//)[1];

//       return {
//         id: id,
//         name: p.name,
//       };
//     });

//     res.render("pages/pokemons/index", {
//       title: "Pokémons",
//       message: "Voici la liste des Pokémons depuis la PokéAPI",
//       pokemons: pokemons,
//     });
//   } catch (error) {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/html');
//     return res
//       .status(500)
//       .json({ error: "Impossible de récupérer les Pokémons" });
//   }
//   finally{

//   }
// };

module.exports.index = async (req, res) => {
    try {
        // D'abord, on récupère la liste
        const response = await axios.get(`${BASE_URL}pokemon?limit=50`);

        //Ensuite, pour chaque Pokémon on fait une requête GET supplémentaire
        const detailRequests = response.data.results.map(p => axios.get(p.url));

        //On exécute toutes les requêtes en parallèle
        const details = await Promise.all(detailRequests);

        //On construit enfin notre tableau final propre
        const pokemons = details.map(d => ({
            id: d.data.id,
            name: d.data.name,
            sprite: d.data.sprites.front_default
        }));

        res.render('pages/pokemons/index', {
            title: 'Pokémons',
            message: 'Liste complète depuis l\'api PokéAPI',
            pokemons
        });

    } catch (error) {
        console.error(error);
        res.status(500).send("Erreur lors de la récupération des Pokémons");
    }
};

/**
 * Créer un nouveau Pokémon
 *
 * @param {*} req
 * @param {*} res
 */
exports.create = async (req, res) => {
  try {
    
  } catch (error) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
  }
};

/**
 * Lire un Pokémon spécifique
 *
 * @param {*} req
 * @param {*} res
 */
// exports.show = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const response = await axios.get(`${BASE_URL}/pokemon/${id}`);

//     res.render("pages/pokemons/show", {
//       title: `Pokémon ${response.data.name}`,
//       message: "Description du pokémon depuis la PokéAPI",
//       pokemon: response.data,
//     });
//   } catch (error) {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/html');

//     return res
    
//   }
// };

module.exports.show = async (req, res) => {
    const { id } = req.params;

    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const pokemon = response.data;

        // Formatage propre des données
        const data = {
            id: pokemon.id,
            name: pokemon.name,
            sprite: pokemon.sprites.other['official-artwork'].front_default,
            height: pokemon.height / 10 ?? 'N/A',  // mètres
            weight: pokemon.weight / 10 || 'N/A', // kg
            types: pokemon.types.map(t => t.type.name),
            stats: pokemon.stats.map(s => ({
                name: s.stat.name,
                value: s.base_stat
            }))
        };

        res.render('pages/pokemons/show', {
            title: `Pokémon : ${pokemon.name}`,
            message: 'Description complète',
            pokemon: data
        });

    } catch (error) {
        console.error("Erreur PokéAPI :", error.message);
        res.status(404).send("Pokémon introuvable");
    }
};

/**
 * Met à jour un Pokémon existant
 *
 * @param {*} req
 * @param {*} res
 */
exports.update = async (req, res) => {
  try {

  } catch (error) {

  }finally{

  }
};

/**
 * Supprimer un Pokémon
 *
 * @param {*} req
 * @param {*} res
 */
exports.delete = async (req, res) => {
  try {
  } catch (error) {

  } finally{

  }
};
