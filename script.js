'use strict';

const btnAgain = document.querySelector('.again');
const btnCheck = document.querySelector('.check');
const numberPrint = document.querySelector('.number');
const headerText = document.querySelector('.header');
const inputValue = document.querySelector('.guess');
const message = document.querySelector('.message');
let score = Number(document.querySelector('.score').textContent);
const highscore = document.querySelector('.highscore');

function randomNumber() {
  return Math.round(Math.random() * (20 - 1)) + 1;
}

let randomNum = randomNumber();
console.log(randomNum);
let high = 0;

window.addEventListener('keydown', function (e) {
  if (e.key == 'Enter') {
    mainCode();
  }
});

btnAgain.addEventListener('click', function () {
  randomNum = randomNumber();
  console.log(randomNum, ' yangi');
  numberPrint.textContent = '?';
  headerText.textContent = 'Guess My Number!';
  inputValue.value = '';
  message.textContent = 'Start guessing...';
  score = document.querySelector('.score').textContent = 20;
  highscore.textContent = high;
  document.querySelector('body').style.backgroundColor = '#222';
});

btnCheck.addEventListener('click', function () {
  mainCode();
});

function mainCode() {
  if (inputValue.value == '') {
    message.textContent = '😡 Enter a number!';
  } else if (randomNum > inputValue.value) {
    score--;
    document.querySelector('.score').textContent = score;
    message.textContent = '📈Enter a little bigger number!';
    inputValue.value = '';
  } else if (randomNum < inputValue.value) {
    score--;
    document.querySelector('.score').textContent = score;
    message.textContent = '📉Enter a little smaller number!';
    inputValue.value = '';
  } else {
    message.textContent = '🏅🏆You win!';
    numberPrint.textContent = randomNum;
    headerText.textContent = 'Winner!!!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('body').style.backgroundColor = 'blue';

    if (score > high) {
      high = score;
    }

    highscore.textContent = high;
  }
}
