module.exports.index = (req, res) => {
    res.render('pages/about/index', { 
        title: `À propos`, 
        message: `Ceci est la page à propos.` 
    });
};
