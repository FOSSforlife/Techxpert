let currentQuestion = 0;
let budgetButton = document.getElementById('budget-button');

window.onload = function () {
  document.getElementById('question-page').style.display = 'hide';
  document.getElementById('budget-slider').style.display = 'hide';
}

// Obtains the budget from sliders after clicking next
budgetButton.addEventListener('click', function () {
  let min = document.getElementById('slider-min').value;
  let max = document.getElementById('slider-max').value;
  console.log(min, max);
  document.getElementById('question-page').style.display = 'inline';
  document.getElementById('budget-slider').style.display = 'none';
});

// Function to ask laptop questions
function laptopQuestions() {
  document.getElementById('home-page').style.display = 'none';
  document.getElementById('budget-slider').style.display = 'inline';
  document.getElementById('question-page').style.display = 'none';

  const answerChoices = ['answer-a', 'answer-b', 'answer-c', 'answer-d', 'answer-e'];

  const questions = [{
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
    document.getElementById('question').innerHTML =
      questions[currentQuestion].title;
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

document.querySelector("#answer-a").addEventListener("click", addLaptop);
document.querySelector("#answer-b").addEventListener("click", addDesktop);
document.querySelector("#answer-c").addEventListener("click", addPhone);
document.querySelector("#answer-d").addEventListener("click", addTablet);

var choice = {};

function addLaptop() {
  choice["device"] = "laptop";
  console.log(choice);
}

function addDekstop() {
  choice("device") = "Desktop";
  console.log(choice);
}

function addPhone() {
  choice("device") = "Phone";
  console.log(choice);
}

function addTablet() {
  choice("device") = "Tablet";
  console.log(choice);
}
