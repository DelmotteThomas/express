module.exports.index = (req, res) => {
    const fruits = ['Pomme', 'Poire', 'Orange', 'Mangue'];

    res.render('pages/homepage/index', {  // templates/pages/homepage.html
        title: `Accueil`, 
        message: `Bienvenue sur mon super site !`,
        fruits: fruits
    });
};