const express = require('express');
const router = express.Router();
const fs = require('fs');

// the bulk of the code will go in these three functions
// but feel free to make helper functions when necessary
function getLaptops(query) {
  // example of importing JSON
  let convertible = fs.readFileSync('data/laptops/convertible.json');
  convertible = JSON.parse(convertible);

  return [convertible[5], convertible[7], convertible[11]];
}

function getTablets(query) {
  let tablets = fs.readFileSync('data/tablets.json')
  tablets = JSON.parse(tablets);
  return [tablets[0], tablets[1], tablets[2]];
}

function getPhones(query) {
  let phones = fs.readFileSync('data/phones.json')
  phones = JSON.parse(phones);
  return [phones[0], phones[1], phones[2]];
}

// localhost:3000/products/laptops
router.get('/laptops', function (req, res, next) {
  const laptops = getLaptops(req); // req contains all of the form data  
  res.json(laptops);
});

// localhost:3000/products/tablets
router.get('/tablets', function (req, res, next) {
  const tablets = getTablets(req);
  res.json(tablets);
});

// localhost:3000/products/phones
router.get('/phones', function (req, res, next) {
  const phones = getPhones(req);
  res.json(phones);
  // res.send('Hello world');
});

module.exports = router;