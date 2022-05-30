//1 -- > 100

let count = 0;
let userInput;
const x = ~~(Math.random() * 100) + 1;
// // console.log(x);

do {
  count++;
  userInput = Number(prompt('enter your number'));
  console.log(userInput);

  if (x > userInput) {
    console.log('x >', userInput);
  } else if (x < userInput) {
    console.log('x <', userInput);
  } else {
    console.log('Bingo!!!');
  }
} while (x !== userInput);

console.log('count:', count);