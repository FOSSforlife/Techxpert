const express = require('express');
const router = express.Router();
const fs = require('fs');

// the bulk of the code will go in these three functions
// but feel free to make helper functions when necessary




//object to store laptops returned from query
var laptopList = []; //laptoplist is the final returned list of the 4 highest ranked laptops for the given query
//score each GPU
function rankGPU(gpu) {
  if(gpu.includes("Intel Graphics 620") || gpu.includes("Intel HD Graphics 500") || gpu.includes("Intel HD 6000")) {
      return 0.5;
  }
  if(gpu.includes("Intel UHD Graphics 620") || gpu.includes("AMD Radeon R5")) {
      return 1;
  }
  if(gpu.includes("Nvidia MX150") || gpu.includes("Iris")) {
      return 2;
  }
  if(gpu.includes("Nvidia GTX 1050Ti")) {
      return 4;
  }
  if(gpu.includes("Nvidia GTX 1050") || gpu.includes("AMD Radeon Pro 450")) {
      return 3;
  }
  if(gpu.includes("Nvidia GTX 1060")) {
      return 6;
  }
  if(gpu.includes("Nvidia GTX 1070")) {
      return 7;
  }
  if(gpu.includes("Nvidia GTX 1080")) {
      return 9;
  }
  else {
  return 0.25;
  }
  };
//score the CPU
function rankCPU(cpu) {
  let score = 0;
  if (cpu.includes('i7')) {
    score += 8;
  }
  else if (cpu.includes('i5')) {
    score += 5;
  }
  else if (cpu.includes('i3')) {
    score += 3;
  }
  else {
    score += 1;
  }
  if (cpu.includes('U')) { //U-series processors are less powerful
    score /= 2;
  }
    return score;
}

//score the portability based on weight and batterylife
function rankPortability(weight, batteryLife){

  let portability = Number(batteryLife.split(" ")[0]);
  if (Number(weight.split(" ")[0]) <= 3) {
    portability += 6;
  }
  else if (Number(weight.split(" ")[0]) <= 5) {
    portability += 4;
  }
  else if (Number(weight.split(" ")[0]) <= 7) {
    portability += 1;
  }
  return portability;
}

//score the screen based on type and touch features
function rankScreen(display, quality) {
  let screenQuality = Number(quality.split('/')[0]);
  if (display.includes("IPS")) {
  screenQuality += 3;
  }
  if (display.includes("Touch")) {
  screenQuality += 1;
}

  return screenQuality;
}
function scoreLaptop(laptop) {

  //console.log(rankGPU(laptop.Graphics));

  return (rankGPU(laptop.Graphics) + rankCPU(laptop.CPU) + rankPortability(laptop.Weight, laptop.Battery) + rankScreen(laptop.Display, laptop.Quality));
}

function compareLaptops(a,b){
  return a.score - b.score;
}
function getLaptops(query) {
  laptopList = [];

  // example of importing JSON
if(query.primaryUse == 'travel')
  { //sorting code goes here
    let ultraportable = fs.readFileSync('data/laptops/ultraportable.json');
    ultraportable = JSON.parse(ultraportable);
    for (let i = 0; i < ultraportable.length; i++) {
      if ((parseInt(ultraportable[i].Price.substring(1)) <= query.budget)) {
        if((ultraportable[i].Model.includes("Macbook") && (query.os == "macos")) || (!(ultraportable[i].Model.includes("Macbook")) && (query.os == "windows"))) {
          let score = scoreLaptop(ultraportable[i]);
          laptopList.push({points: score, item: ultraportable[i]})
          }
        }
      }

        laptopList.sort(compareLaptops);
        laptopList.reverse();
        return (laptopList.slice(0,4));
    }

else if(query.primaryUse == 'gaming')
{

  //sorting code goes here
    let gaming = fs.readFileSync('data/laptops/gaming.json');
    gaming = JSON.parse(gaming);
    for (let i = 0; i < gaming.length; i++) {

        if ((parseInt(gaming[i].Price.substring(1)) <= query.budget)) {
          if((gaming[i].Model.includes("Macbook") && (query.os == "macos")) || (!(gaming[i].Model.includes("Macbook")) && (query.os == "windows"))) {
          let score = scoreLaptop(gaming[i]);
          laptopList.push({points: score, item: gaming[i]})
          }
        }
      }

        laptopList.sort(compareLaptops);
        laptopList.reverse();
        return (laptopList.slice(0,4));
    }

else if(query.primaryUse == 'heavy')
{
  //sorting code goes here
    let programming = fs.readFileSync('data/laptops/programming.json');
    programming = JSON.parse(programming);

    for (let i = 0; i < programming.length; i++) {
      if((programming[i].Model.includes("Macbook") && (query.os == "macos")) || (!(programming[i].Model.includes("Macbook")) && (query.os == "windows"))) {
          //console.log("hello");
          //
        if ((parseInt(programming[i].Price.substring(1)) <= query.budget)) {
          console.log("hello");
          let score = scoreLaptop(programming[i]);
          laptopList.push({points: score, item: programming[i]})
          }
        }
      }

        laptopList.sort(compareLaptops);
        laptopList.reverse();
        return (laptopList.slice(0,4));
    }

else if(query.primaryUse == 'web')
{
  //sorting code goes here
    let mainstream = fs.readFileSync('data/laptops/mainstream.json');
    mainstream = JSON.parse(mainstream);
    for (let i = 0; i < mainstream.length; i++) {
      if((mainstream[i].Model.includes("Macbook") && (query.os == "macos")) || (!(mainstream[i].Model.includes("Macbook")) && (query.os == "windows"))) {
      if ((parseInt(mainstream[i].Price.substring(1)) <= query.budget)) {
          let score = scoreLaptop(mainstream[i]);
          laptopList.push({points: score, item: mainstream[i]})
          }
        }
      }

        laptopList.sort(compareLaptops);
        laptopList.reverse();
        return (laptopList.slice(0,4));
    }
}


function getTablets(query) {
  list = []
  let tablets = fs.readFileSync('data/tablets.json')
  tablets = JSON.parse(tablets);
  budget = query["budget"]
  tablets.forEach(function(item) {
    if (budget > item["Price"] && budget <= item["Price"]+100){
      list.push({"item" : item})
    }
  });
  return (list.slice(0,4));
}

function getPhones(query) {
  list = []
  let phones = fs.readFileSync('data/phones.json')
  phones = JSON.parse(phones);
  budget = query["budget"]
  phones.forEach(function(item) {
    if (budget > item["Price"] && budget <= item["Price"]+100){
      list.push({"item" : item})
    }
  });
  console.log(list.slice(0,4))
  return (list.slice(0,4));
}

// localhost:3000/products/laptops
router.get('/laptops', function (req, res, next) {
  const laptops = getLaptops(req.query); // req contains all of the form data
  res.json(laptops);
});

// localhost:3000/products/tablets
router.get('/tablets', function (req, res, next) {
  const tablets = getTablets(req.query);
  res.json(tablets);
});

// localhost:3000/products/phones
router.get('/phones', function (req, res, next) {
  const phones = getPhones(req.query);
  res.json(phones);
  // res.send('Hello world');
});

module.exports = router;
