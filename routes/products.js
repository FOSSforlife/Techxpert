const express = require('express');
const router = express.Router();

// the bulk of the code will go in this function
// but feel free to make helper functions when necessary
function getProducts(query) {
    return {
        sample: 'data'
    };
}

router.get('/', function(req, res, next) {
    const products = getProducts(req); // req contains all of the form data  
    res.json(products);
});

module.exports = router;
