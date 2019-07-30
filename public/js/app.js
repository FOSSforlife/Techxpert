let currentQuestion = 0;

// this is the javascript from the example file. use it to h
function updateText() {
  const answerChoices = ['answer-a', 'answer-b', 'answer-c', 'answer-d', 'answer-e'];

  const questions = [
    {
      title: 'What operating system do you prefer?',
      answers: ['Mac', 'Windows', 'Either'],
      template: 'template1'
    },
    {
      title: 'What do you plan on using this laptop for?',
      answers: ['School', 'Work', 'Gaming', 'Personal'],
      template: 'template1'
    },
    {
      title: 'Does the laptop need to be portable?',
      answers: ['Very portable', 'Fairly Portable', 'Not Important'],
      template: 'template1'
    },
  ];

  if (currentQuestion >= questions.length) {
    document.getElementById('question').innerHTML = 'DONE';
  } else {
    document.getElementById('question').innerHTML = questions[currentQuestion].title;
    let currentAnswers = questions[currentQuestion].answers;
    for (let i = 0; i < answerChoices.length; i++) {
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