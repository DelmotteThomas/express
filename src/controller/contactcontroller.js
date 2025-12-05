module.exports.index = (req, res) => {
    res.render('pages/contact/index', { 
        title: `Contact`, 
        message: `N'hésitez pas à nous contacter !` 
    });
};
