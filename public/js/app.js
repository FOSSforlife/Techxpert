let currentQuestion = 0;
let deviceChoice = 'null';
let questionTitle = document.getElementById('question-title');
let answerA = document.getElementById('answer-a');
let answerB = document.getElementById('answer-b');
let answerC = document.getElementById('answer-c');
let answerD = document.getElementById('answer-d');
let answerE = document.getElementById('answer-e');

document.getElementById('laptop-device').addEventListener('click', function() {
  laptopQuestions();
  deviceChoice = 'laptop'
})

document.getElementById('desktop-device').addEventListener('click', function() {
  desktopQuestions();
  deviceChoice = 'desktop';
})

document.getElementById('phone-device').addEventListener('click', function() {
  phoneQuestions();
  deviceChoice = 'phone';
})

document.getElementById('answer-section').addEventListener('click', function() {
  currentQuestion = currentQuestion + 1;

  if (deviceChoice == 'laptop') {
    laptopQuestions();
  } else if (deviceChoice == 'desktop') {
    desktopQuestions();
  } else if (deviceChoice == 'phone') {
    phoneQuestions();
  }
})

// Function to ask laptop questions
function laptopQuestions() {
  document.getElementById('home-page').style.display = 'none';
  document.getElementById('question-page').style.display = 'inline';

  const answerChoices =
      ['answer-a', 'answer-b', 'answer-c', 'answer-d', 'answer-e'];

  const questions = [
    {
      title: 'What is your budget?',
      answers: [
        '$400-$999', '$1000-$1399', '$1400-$1699', '$1700-$1999', '$2000 and Up'
      ]
    },
    {
      title:
          'Which operating system do you prefer? If unsure, choose Microsoft Windows',
      answers: ['Microsoft Windows', 'Apple MacOS']
    },
    {
      title: 'What will be the primary use of this laptop?',
      answers: [
        'Web Browsing/Office Work', 'Gaming',
        'Heavy Computing - Video Editing, Programming', 'Travel'
      ]
    },
    {
      title: 'How much do you value portability and battery life?',
      answers: [
        'Very much - will be traveling with laptop/moving it around a lot',
        'Somewhat', 'Not at all'
      ]
    }
  ];

  if (currentQuestion >= questions.length) {
    questionTitle.innerHTML = 'DONE';
  } else {
    questionTitle.innerHTML = questions[currentQuestion].title;
    let currentAnswers = questions[currentQuestion].answers;
    for (let i = 0; i < answerChoices.length; i++) {
      if (i < currentAnswers.length) {
        document.getElementById(answerChoices[i]).innerHTML = currentAnswers[i];
      } else {
        document.getElementById(answerChoices[i]).innerHTML = 'NA';
      }
    }
  }
}

function desktopQuestions() {
  document.getElementById('home-page').style.display = 'none';
  document.getElementById('question-page').style.display = 'inline';

  const answerChoices =
      ['answer-a', 'answer-b', 'answer-c', 'answer-d', 'answer-e'];

  const questions = [
    {
      title: 'DESKTOP-TEST',
      answers: [
        '$400-$999', '$1000-$1399', '$1400-$1699', '$1700-$1999', '$2000 and Up'
      ],
    },
    {
      title:
          'Which operating system do you prefer? If unsure, choose Microsoft Windows',
      answers: ['Microsoft Windows', 'Apple MacOS'],
    },
    {
      title: 'What will be the primary use of this laptop?',
      answers: [
        'Web Browsing/Office Work', 'Gaming',
        'Heavy Computing - Video Editing, Programming', 'Travel'
      ],
    },
    {
      title: 'How much do you value portability and battery life?',
      answers: [
        'Very much - will be traveling with laptop/moving it around a lot',
        'Somewhat', 'Not at all'
      ],
    }
  ];

  if (currentQuestion >= questions.length) {
    questionTitle.innerHTML = 'DONE';
  } else {
    questionTitle.innerHTML = questions[currentQuestion].title;
    let currentAnswers = questions[currentQuestion].answers;
    for (let i = 0; i < answerChoices.length; i++) {
      if (i < currentAnswers.length) {
        document.getElementById(answerChoices[i]).innerHTML = currentAnswers[i];
      } else {
        document.getElementById(answerChoices[i]).innerHTML = 'NA';
      }
    }
  }
}

function phoneQuestions() {
  document.getElementById('home-page').style.display = 'none';
  document.getElementById('question-page').style.display = 'inline';

  const answerChoices =
      ['answer-a', 'answer-b', 'answer-c', 'answer-d', 'answer-e'];

  const questions = [
    {
      title: 'PHONE TEST',
      answers: [
        '$400-$999', '$1000-$1399', '$1400-$1699', '$1700-$1999', '$2000 and Up'
      ],
    },
    {
      title:
          'Which operating system do you prefer? If unsure, choose Microsoft Windows',
      answers: ['Microsoft Windows', 'Apple MacOS'],
    },
    {
      title: 'What will be the primary use of this laptop?',
      answers: [
        'Web Browsing/Office Work', 'Gaming',
        'Heavy Computing - Video Editing, Programming', 'Travel'
      ],
    },
    {
      title: 'How much do you value portability and battery life?',
      answers: [
        'Very much - will be traveling with laptop/moving it around a lot',
        'Somewhat', 'Not at all'
      ],
    }
  ];

  if (currentQuestion >= questions.length) {
    questionTitle.innerHTML = 'DONE';
  } else {
    questionTitle.innerHTML = questions[currentQuestion].title;
    let currentAnswers = questions[currentQuestion].answers;
    for (let i = 0; i < answerChoices.length; i++) {
      if (i < currentAnswers.length) {
        document.getElementById(answerChoices[i]).innerHTML = currentAnswers[i];
      } else {
        document.getElementById(answerChoices[i]).innerHTML = 'NA';
      }
    }
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
    if (check.style.display == 'inline') {
      console.log('DISPLAY IS INLINEENIEUGREKRGKLDVF');
      check.style.display = 'none';
    } else {
      check.style.display = 'inline';
    }
  })
}

document.querySelector('#answer-a').addEventListener('click', addLaptop);
document.querySelector('#answer-b').addEventListener('click', addDesktop);
document.querySelector('#answer-c').addEventListener('click', addPhone);
document.querySelector('#answer-d').addEventListener('click', addTablet);

var choice = {};

function addLaptop() {
  choice['device'] = 'laptop';
  console.log(choice);
}

function addDekstop() {
  choice('device') = 'Desktop';
  console.log(choice);
}

function addPhone() {
  choice('device') = 'Phone';
  console.log(choice);
}

function addTablet() {
  choice('device') = 'Tablet';
  console.log(choice);
}
