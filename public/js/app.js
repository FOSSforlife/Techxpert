let currentQuestion = -1;
let deviceChoice = 'null';
let fetchDataChoice;
const questionTitle = document.getElementById('question-title');
const answerA = document.getElementById('answer-a');
const answerB = document.getElementById('answer-b');
const answerC = document.getElementById('answer-c');
const answerD = document.getElementById('answer-d');
const answerE = document.getElementById('answer-e');
const answerChoices = ['answer-a', 'answer-b', 'answer-c', 'answer-d', 'answer-e'];

let questions;
const userAnswers = {};

const laptopQuestions = [{
    title: 'What is your budget?',
    answers: [
      '$400-$999', '$1000-$1399', '$1400-$1699', '$1700-$1999', '$2000 and Up'
    ],
    id: 'budget',
    jsonAnswers: [1000, 1400, 1700, 2000, 6000]
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

const tabletQuestions = [{
    title: 'What is your budget?',
    answers: [
      '$200-300', '$301-400', '$401-500', '$501+'
    ],
    id: 'budget',
    jsonAnswers: [300, 400, 500, 3000]
  },
  {
    title: 'Which operating system do you prefer? If unsure, choose Microsoft Windows',
    answers: ['Microsoft Windows', 'Apple iOS', 'Android'],
    id: 'os',
    jsonAnswers: ['windows', 'ios', 'android']
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

const phoneQuestions = [{
    title: 'What is your budget?',
    answers: [
      '$300-400', '$401-500', '$501-$600', '$801-900', '$1000+'
    ],
    id: 'budget',
    jsonAnswers: [400, 500, 600, 900, 1500]
  },
  {
    title: 'Which operating system do you prefer? If unsure, choose Andriod',
    answers: ['Android', 'Apple iOS'],
    id: 'os',
    jsonAnswers: ['Andriod', 'iOS']
  },
  {
    title: 'What will be the primary use of this phone?',
    answers: [
      'Web Browsing/Office Work', 'Gaming/Entertainment', 'Texting/Phone Calls'
    ],
    id: 'primaryUse',
    jsonAnswers: ['web', 'gaming', 'text']
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
  if (deviceChoice == 'laptop') {
    questions = laptopQuestions;
    fetchDataChoice = deviceChoice;
  } else if (deviceChoice == 'tablet') {
    questions = tabletQuestions;
    fetchDataChoice = deviceChoice;
  } else if (deviceChoice == 'phone') {
    questions = phoneQuestions;
    fetchDataChoice = deviceChoice;
  }

  nextQuestion();
  document.getElementById('home-page').style.display = 'none';
  document.getElementById('question-page').style.display = 'inline';
}

function nextQuestion(answer) {
  // save user response in userAnswers
  console.log(`Answer is ${answer}`);
  let question;
  if (answer) {
    question = questions[currentQuestion];
    if (question.jsonAnswers) {
      userAnswers[question.id] = question.jsonAnswers[answer - 1];
    } else {
      userAnswers[question.id] = question.answers[answer - 1];
    }
  }

  // go to next question
  currentQuestion++;
  question = questions[currentQuestion];
  if (currentQuestion >= questions.length) {
    questionTitle.innerHTML = 'Quiz Done. Click submit to recieve your recommendations!';
    document.getElementById(answerChoices[0]).style.display = "none";
    document.getElementById(answerChoices[1]).style.display = "none";
    document.getElementById(answerChoices[2]).style.display = "none";
    let btn = document.createElement("BUTTON");
    btn.innerHTML = "Submit";
    btn.classList.add("btn", "btn-lg", "btn-primary", "card-answer-noimg");
    btn.setAttribute('id', 'submit-button');
    document.getElementById('question-title').parentNode.insertAdjacentElement('afterend', btn);
    let submitBtn = document.getElementById('submit-button');
    submitBtn.addEventListener('click', showResults());
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

function showResults() {
  document.getElementById('question-page').style.display = 'none';
  let url;
  if (fetchDataChoice == 'laptop') {
    url = new URL(`${window.location.protocol}//${window.location.hostname}:${window.location.port}/products/laptops`);
    url.search = new URLSearchParams(userAnswers);
    fetch(url, {
        method: 'GET'
      })
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        console.log(json);
        updateLaptopRecommendations(json);
      });
  } else if (fetchDataChoice == 'tablet') {
    url = new URL(`${window.location.protocol}//${window.location.hostname}:${window.location.port}/products/tablets`);
    url.search = new URLSearchParams(userAnswers);
    fetch(url, {
        method: 'GET'
      })
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        console.log(json);
        updateTabletRecommendations(json);
      });
  } else if (fetchDataChoice == 'phone') {
    url = new URL(`${window.location.protocol}//${window.location.hostname}:${window.location.port}/products/phones/`);
    url.search = new URLSearchParams(userAnswers);
    fetch(url, {
        method: 'GET'
      })
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        console.log(json);
        updatePhoneRecommendations(json);
      });
  }
  document.getElementById('recommendation-page').style.display = 'inline';
}

function updateLaptopRecommendations(deviceData) {
  let list1 = document.getElementById('device-specs1');
  let list2 = document.getElementById('device-specs2');
  let list3 = document.getElementById('device-specs3');
  let picSrc = '../img/generic-laptop.png';

  document.getElementById('img4').src = picSrc;
  document.getElementById('img5').src = picSrc;
  document.getElementById('img6').src = picSrc;
  document.getElementById('recommendation-title').innerHTML = 'Laptop Recommendations';

  if (deviceData.length == 0) {
    alert("No matches found! Please try again.");
    location.reload();
  } else {
    let currentDevice = deviceData[0].item;
    document.getElementById('device-title1').innerHTML = currentDevice['Model'];

    for (let key in currentDevice) {
      if (currentDevice[key] != '' && key != 'Model') {
        let newListItem = document.createElement('li');
        newListItem.classList.add('list-group-item');
        newListItem.innerHTML = `${key} : ${currentDevice[key]}`
        list1.appendChild(newListItem);
      }
    }

    currentDevice = deviceData[1].item;
    document.getElementById('device-title2').innerHTML = currentDevice['Model'];
    for (let key in currentDevice) {
      if (currentDevice[key] != '' && key != 'Model') {
        let newListItem = document.createElement('li');
        newListItem.classList.add('list-group-item');
        newListItem.innerHTML = `${key} : ${currentDevice[key]}`
        list2.appendChild(newListItem);
      }
    }

    currentDevice = deviceData[2].item;
    document.getElementById('device-title3').innerHTML = currentDevice['Model'];
    for (let key in currentDevice) {
      if (currentDevice[key] != '' && key != 'Model') {
        let newListItem = document.createElement('li');
        newListItem.classList.add('list-group-item');
        newListItem.innerHTML = `${key} : ${currentDevice[key]}`
        list3.appendChild(newListItem);
      }
    }

  }
}

function updateTabletRecommendations(deviceData) {
  let list1 = document.getElementById('device-specs1');
  let list2 = document.getElementById('device-specs2');
  let list3 = document.getElementById('device-specs3');
  let picSrc = '../img/generic-tablet.jpg';

  document.getElementById('img4').src = picSrc;
  document.getElementById('img5').src = picSrc;
  document.getElementById('img6').src = picSrc;
  document.getElementById('recommendation-title').innerHTML = 'Tablet Recommendations'

  if (deviceData.length == 0) {
    alert("No matches found! Please try again.");
    location.reload();
  } else {
    let currentDevice = deviceData[0].item;
    document.getElementById('device-title1').innerHTML = currentDevice['Name'];
    for (let key in currentDevice) {
      if (currentDevice[key] != '' && key != 'Name') {
        let newListItem = document.createElement('li');
        newListItem.classList.add('list-group-item');
        newListItem.innerHTML = `${key} : ${currentDevice[key]}`
        list1.appendChild(newListItem);
      }
    }

    currentDevice = deviceData[1].item;
    document.getElementById('device-title2').innerHTML = currentDevice['Name'];
    for (let key in currentDevice) {
      if (currentDevice[key] != '' && key != 'Name') {
        let newListItem = document.createElement('li');
        newListItem.classList.add('list-group-item');
        newListItem.innerHTML = `${key} : ${currentDevice[key]}`
        list2.appendChild(newListItem);
      }
    }

    currentDevice = deviceData[2].item;
    document.getElementById('device-title3').innerHTML = currentDevice['Name'];
    for (let key in currentDevice) {
      if (currentDevice[key] != '' && key != "Name") {
        let newListItem = document.createElement('li');
        newListItem.classList.add('list-group-item');
        newListItem.innerHTML = `${key} : ${currentDevice[key]}`
        list3.appendChild(newListItem);
      }
    }
  }
}

function updatePhoneRecommendations(deviceData) {
  let list1 = document.getElementById('device-specs1');
  let list2 = document.getElementById('device-specs2');
  let list3 = document.getElementById('device-specs3');
  let picSrc = '../img/generic-phone.jpg';

  document.getElementById('img4').src = picSrc;
  document.getElementById('img5').src = picSrc;
  document.getElementById('img6').src = picSrc;
  document.getElementById('recommendation-title').innerHTML = 'Phone Recommendations'

  if (deviceData.length == 0) {
    alert("No matches found! Please try again.");
    location.reload();
  } else {
    let currentDevice = deviceData[0].item;
    document.getElementById('device-title1').innerHTML = currentDevice['Name'];
    for (let key in currentDevice) {
      if (currentDevice[key] != '' && key != 'Name') {
        let newListItem = document.createElement('li');
        newListItem.classList.add('list-group-item');
        newListItem.innerHTML = `${key} : ${currentDevice[key]}`
        list1.appendChild(newListItem);
      }
    }

    currentDevice = deviceData[1].item;
    document.getElementById('device-title2').innerHTML = currentDevice['Name'];
    for (let key in currentDevice) {
      if (currentDevice[key] != '' && key != 'Name') {
        let newListItem = document.createElement('li');
        newListItem.classList.add('list-group-item');
        newListItem.innerHTML = `${key} : ${currentDevice[key]}`
        list2.appendChild(newListItem);
      }
    }

    currentDevice = deviceData[2].item;
    document.getElementById('device-title3').innerHTML = currentDevice['Name'];
    for (let key in currentDevice) {
      if (currentDevice[key] != '' && key != "Name") {
        let newListItem = document.createElement('li');
        newListItem.classList.add('list-group-item');
        newListItem.innerHTML = `${key} : ${currentDevice[key]}`
        list3.appendChild(newListItem);
      }
    }
  }
}
