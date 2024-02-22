const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

const rl = readline.createInterface({ input, output });

function randomIntFromInterval(min, max) { // min and max included
 return Math.floor(Math.random() * (max - min + 1) + min)
}
const range_low = 0
const range_high = 100

const processQuestion = (number, question) => {
 rl.question(question || `Загадано число в диапазоне от ${range_low} до ${range_high} `, (answer) => {
  answer = Number(answer)
  if (answer === number) {
   console.log(`Отгадано число ${answer}`)
   rl.close()
  } else {
   processQuestion(number, number < answer ? 'Меньше ' : 'Больше ')
  }
 });
}


const guessNumber = () => {
 const number = randomIntFromInterval(range_low, range_high)
 processQuestion(number)
}

guessNumber()
