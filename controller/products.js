

const getProducts = (req, res, next) => {
    res.render('./products/index');
}

module.exports = {
    getProducts,
}