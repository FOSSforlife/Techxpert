const express = require('express');
const router = express.Router();

// the bulk of the code will go in these three functions
// but feel free to make helper functions when necessary
function getLaptops(query) {
    return {
        sample: 'data'
    };
}

function getDesktops(query) {
    return {
        sample: 'data'
    };
}

function getPhones(query) {
    return {
        sample: 'data'
    };
}

router.get('/laptops', function(req, res, next) {
    const laptops = getLaptops(req); // req contains all of the form data  
    res.json(laptops);
});

router.get('/desktops', function(req, res, next) {
    const desktops = getDesktops(req); // req contains all of the form data  
    res.json(desktops);
});

router.get('/phones', function(req, res, next) {
    const phones = getPhones(req); // req contains all of the form data  
    res.json(phones);
});

module.exports = router;
