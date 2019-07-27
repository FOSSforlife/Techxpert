const express = require('express');
const router = express.Router();
const fs = require('fs');

// the bulk of the code will go in these three functions
// but feel free to make helper functions when necessary
function getLaptops(query) {
  // example of importing JSON
  let convertible = fs.readFileSync('data/laptops/convertible.json');
  convertible = JSON.parse(convertible);

  return { // You can also return arrays
    budget: convertible[0].Budget
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

// localhost:3000/products/laptops
router.get('/laptops', function (req, res, next) {
  const laptops = getLaptops(req); // req contains all of the form data  
  res.json(laptops);
});

// localhost:3000/products/desktops
router.get('/desktops', function (req, res, next) {
  const desktops = getDesktops(req);
  res.json(desktops);
});

// localhost:3000/products/phones
router.get('/phones', function (req, res, next) {
  const phones = getPhones(req);
  res.json(phones);
  // res.send('Hello world');
});

module.exports = router;