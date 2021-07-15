const getHome = (req, res, next) => {
    res.render('./home/index');
}

module.exports = {
    getHome,
}