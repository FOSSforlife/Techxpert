let currentQuestion = -1;
let deviceChoice = 'null';
const questionTitle = document.getElementById('question-title');
const answerA = document.getElementById('answer-a');
const answerB = document.getElementById('answer-b');
const answerC = document.getElementById('answer-c');
const answerD = document.getElementById('answer-d');
const answerE = document.getElementById('answer-e');
const answerChoices = ['answer-a', 'answer-b', 'answer-c', 'answer-d', 'answer-e'];

let questions;
const userAnswers = {};

const laptopQuestions = [
  {
    title: 'What is your budget?',
    answers: [
      '$400-$999', '$1000-$1399', '$1400-$1699', '$1700-$1999', '$2000 and Up'
    ],
    id: 'budget',
  },
  {
    title: 'Which operating system do you prefer? If unsure, choose Microsoft Windows',
    answers: ['Microsoft Windows', 'Apple MacOS'],
    id: 'os',
    jsonAnswers: ['windows', 'macos']
  },
  {
    title: 'What will be the primary use of this laptop?',
    answers: [
      'Web Browsing/Office Work', 'Gaming',
      'Heavy Computing - Video Editing, Programming', 'Travel'
    ],
    id: 'primaryUse',
    jsonAnswers: ['web', 'gaming', 'heavy', 'travel']
  },
  {
    title: 'How much do you value portability and battery life?',
    answers: [
      'Very much - will be traveling with laptop/moving it around a lot',
      'Somewhat', 'Not at all'
    ],
    id: 'portability',
    jsonAnswers: ['high', 'medium', 'low']
  }
];

const desktopQuestions = [
  {
    title: 'desktop',
    answers: [
      '$400-$999', '$1000-$1399', '$1400-$1699', '$1700-$1999', '$2000 and Up'
    ],
    id: 'budget',
    // if 'jsonAnswers' is omitted, it will use 'answers' by default
  },
  {
    title: 'Which operating system do you prefer? If unsure, choose Microsoft Windows',
    answers: ['Microsoft Windows', 'Apple MacOS'],
    id: 'os',
    jsonAnswers: ['windows', 'macos']
  },
  {
    title: 'What will be the primary use of this laptop?',
    answers: [
      'Web Browsing/Office Work', 'Gaming',
      'Heavy Computing - Video Editing, Programming', 'Travel'
    ],
    id: 'primaryUse',
    jsonAnswers: ['web', 'gaming', 'heavy', 'travel']
  },
  {
    title: 'How much do you value portability and battery life?',
    answers: [
      'Very much - will be traveling with laptop/moving it around a lot',
      'Somewhat', 'Not at all'
    ],
    id: 'portability',
    jsonAnswers: ['high', 'medium', 'low']
  }
];

const phoneQuestions = [
  {
    title: 'phone',
    answers: [
      '$400-$999', '$1000-$1399', '$1400-$1699', '$1700-$1999', '$2000 and Up'
    ],
    id: 'budget',
  },
  {
    title: 'Which operating system do you prefer? If unsure, choose Microsoft Windows',
    answers: ['Microsoft Windows', 'Apple MacOS'],
    id: 'os',
    jsonAnswers: ['windows', 'macos']
  },
  {
    title: 'What will be the primary use of this laptop?',
    answers: [
      'Web Browsing/Office Work', 'Gaming',
      'Heavy Computing - Video Editing, Programming', 'Travel'
    ],
    id: 'primaryUse',
    jsonAnswers: ['web', 'gaming', 'heavy', 'travel']
  },
  {
    title: 'How much do you value portability and battery life?',
    answers: [
      'Very much - will be traveling with laptop/moving it around a lot',
      'Somewhat', 'Not at all'
    ],
    id: 'portability',
    jsonAnswers: ['high', 'medium', 'low']
  }
];


function initQuestions(deviceChoice) {
  if(deviceChoice == 'laptop') {
    questions = laptopQuestions;
  }
  else if(deviceChoice == 'desktop') {
    questions = desktopQuestions;
  }
  else if(deviceChoice == 'phone') {
    questions = phoneQuestions;
  }

  nextQuestion();
  document.getElementById('home-page').style.display = 'none';
  document.getElementById('question-page').style.display = 'inline';
}

function nextQuestion(answer) {
  // save user response in userAnswers
  let question;
  if(answer) {
    question = questions[currentQuestion];
    if(question.jsonAnswers) {
      userAnswers[question.id] = question.jsonAnswers[answer];
    }
    else {
      userAnswers[question.id] = question.answers[answer];
    }
  }

  // go to next question
  currentQuestion++;
  question = questions[currentQuestion];
  if (currentQuestion >= questions.length) {
    questionTitle.innerHTML = 'DONE';
    console.log(userAnswers);
  } else {
    questionTitle.innerHTML = question.title;
    let currentAnswers = question.answers;
    for (let i = 0; i < answerChoices.length; i++) {
      if (i < currentAnswers.length) {
        document.getElementById(answerChoices[i]).innerHTML = currentAnswers[i];
        document.getElementById(answerChoices[i]).style.display = 'inline';
      } else {
        document.getElementById(answerChoices[i]).style.display = 'none';
      }
    }
  }
}
