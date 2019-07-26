// fixes some of the issues in the json data
const fs = require('fs');

const files = ['convertible', 'gaming', 'mainstream', 'programming', 'ultraportable'];
const fileIndex = process.argv[2];

let arr = fs.readFileSync(files[fileIndex] + '.json');
arr = JSON.parse(arr);

let currentBudget = '';
arr.map(item => {
    if(item.Budget === '') {
        item.Budget = currentBudget;
    }
    else {
        currentBudget = item.Budget;
    }
});

fs.writeFileSync(files[fileIndex] + '.json', JSON.stringify(arr, null, 2));
