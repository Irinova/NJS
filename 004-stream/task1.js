const fs = require('fs')
const inquirer = require('inquirer')
const argv = require('yargs/yargs')(process.argv.slice(2))

function randomIntFromInterval(min, max) { // min and max included
 return Math.floor(Math.random() * (max - min + 1) + min)
}

const rndInt = randomIntFromInterval(1, 2)
let isRightAnswer

const guessNumber = async (message) => {
 const answers = await inquirer.prompt([
  {
   message,
   name: 'name',
   type: 'string'
  }
 ])
 if (rndInt.toString() === answers.name) {
  isRightAnswer = true
 }
 return answers.name
}

const start = async (args) => {
 const filename = args.filename || 'logs'
 const writer = fs.createWriteStream(`${filename}.txt`)

 writer.on('error', () => {
  console.error('error')
  writer.end()
 })

 while (!isRightAnswer) {
  const data = await guessNumber('Орёл или решка?')
  writer.write(data, 'UTF8')
 }
 writer.end()
}

argv
 .usage('Usage: $0 <any> [filename]')
 .command('*', 'input --filename', () => {}, start)
 .parse();
