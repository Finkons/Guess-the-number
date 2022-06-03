
let count = 0;
const x = ~~(Math.random() * 100) + 1;

const STORAGE_KEY = 'Best Score';

const refs = {
  input: document.querySelector('.input'),
  button: document.getElementById('button'),
  resultText: document.querySelector('.result-text'),
  message: document.querySelector('#game-message'),
  bingo: document.querySelector('.bingo')
}

const { input, button, resultText, message, bingo } = refs

button.addEventListener('click', onCheck)

function onCheck() {
  const onCheckInput = input.value.trim()
  count++;
  console.log(onCheckInput);
  if (onCheckInput > 100) {
    message.textContent = 'Enter a number less than 100'
  } else if (onCheckInput <= 0) {
    message.textContent = 'Enter a number more than 0'
  } else if (x > onCheckInput) {
    message.textContent = 'more'
  } else if (x < onCheckInput) {
    message.textContent = 'less'
  }
  else {
    saveResult()
  }
  console.log('count:', count);
}
const bestScore = JSON.parse(localStorage.getItem(STORAGE_KEY))
function saveResult() {
  message.classList.add('bingo')
  message.textContent = 'Bingo!!!'
  setTimeout(() => {
    location.reload()
  }, 2000);

  sessionStorage.setItem('Current point', JSON.stringify(count))
  if (count < bestScore) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(count))
    resultText.textContent = `${bestScore}`;
  }
}
resultText.textContent = `${sessionStorage.getItem('Current point')}`;
