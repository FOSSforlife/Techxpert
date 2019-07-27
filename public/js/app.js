let currentQuestion = 0;

// this is the javascript from the example file. use it to h
function updateText() {
  const answerChoices =
      ['answer-a', 'answer-b', 'answer-c', 'answer-d', 'answer-e'];
  const NUM_QUESTIONS = 3;

  let questions = [
    'What operating system do you prefer?',
    'What do you plan on using this laptop for?',
    'Does the laptop need to be portable?'
  ];

  let answers = [
    ['Mac', 'Windows', 'Either'], ['School', 'Work', 'Gaming', 'Personal'],
    ['Very portable', 'Fairly Portable', 'Not Important']
  ];

  if (currentQuestion >= NUM_QUESTIONS) {
    document.getElementById('question').innerHTML = 'DONE';
  } else {
    document.getElementById('question').innerHTML = questions[currentQuestion];
    let currentAnswers = answers[currentQuestion];
    var i;
    for (i = 0; i < answerChoices.length; i++) {
      if (i < currentAnswers.length) {
        document.getElementById(answerChoices[i]).innerHTML = currentAnswers[i];
      } else {
        document.getElementById(answerChoices[i]).innerHTML = 'NA';
      }
    }
  }

  currentQuestion = currentQuestion + 1;
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
    if (check.style.display == 'inline') {
      console.log('DISPLAY IS INLINEENIEUGREKRGKLDVF');
      check.style.display = 'none';
    } else {
      check.style.display = 'inline';
    }
  })
}