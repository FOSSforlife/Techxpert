function updateText() {
  console.log('update');
  const thingsToUpdate = ['question', 'answer-a', 'answer-b', 'answer-c', 'answer-d', 'answer-e'];

  for(let thing of thingsToUpdate) {
    document.getElementById(thing).innerHTML = document.getElementById('input-' + thing).value;
  }
}

function hide(letter) {
  document.getElementById('card-answer-' + letter).style.display = 'none';
}

function hide2(letter) {
  document.getElementById('answer-' + letter).style.display = 'none';
  document.getElementById('check-' + letter).style.display = 'none';
}

function show2(letter) {
  document.getElementById('answer-' + letter).style.display = 'inline';
  document.getElementById('check-' + letter).style.display = 'inline';
}

function toggleChecks() {
  Array.from(document.getElementsByClassName('checkbox')).forEach((check) => {
    if(check.style.display == 'inline') {
      console.log('DISPLAY IS INLINEENIEUGREKRGKLDVF');
      check.style.display = 'none';
    }
    else {
      check.style.display = 'inline';
    }
  })
}