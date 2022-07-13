

const x = ~~(Math.random() * 100) + 1;
console.log(x);

const STORAGE_KEY = 'Best Score';

const refs = {
  input: document.querySelector('.input'),
  button: document.getElementById('button'),
  resultText: document.querySelector('.result-text'),
  currentText: document.querySelector('.current-point-text'),
  message: document.querySelector('#game-message'),
  bingo: document.querySelector('.bingo')
}

const { input, button, resultText, message, bingo, currentText } = refs

button.addEventListener('click', onCheck)
let count = 0;
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

  currentText.textContent = `${count}`
  console.log('count:', count);
}
const bestScore = JSON.parse(localStorage.getItem(STORAGE_KEY))
if (STORAGE_KEY, JSON.stringify(count) === null) {
  resultText.textContent = 0
}
function saveResult() {
  message.classList.add('bingo')
  message.textContent = 'Bingo!!!'

  localStorage.setItem(STORAGE_KEY, JSON.stringify(count))
  resultText.textContent = `${localStorage.getItem(STORAGE_KEY)}`

  setTimeout(() => {
    location.reload()
  }, 2000);
}

resultText.textContent = `${localStorage.getItem(STORAGE_KEY)}`;