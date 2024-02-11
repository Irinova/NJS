const argv = require('yargs/yargs')(process.argv.slice(2))

const d = new Date();
const datePart = {
 year: d.getFullYear(),
 month: d.getMonth(),
 day: d.getDate()
}

/**
 * Функция для поиска переданного в командной строке параметра в параметрах datePart
 * @return {function}
 */
const generate = (data, fn) => {
 for (const property in data) {
  if (datePart[property]) {
   return fn(data[property], property)
  }
 }
 return 'Не удалось создать дату с заданным параметром'
}

const getCurrentDate = (data) => {
 let date = generate(data, (value) => datePart[value])
 if (!date) {
  date = d.toISOString()
 }
 return date
}

const getOtherDate = (data, operator) => {
 const sum = (a, b) => a + b
 const sub = (a, b) => a - b
 return generate(data, (value, property) => {
  const updateValue = (datePartValue) => {
   if (property !== datePartValue) {
    return datePart[datePartValue]
   }
   return operator === '+' ? sum(datePart[datePartValue], value) : sub(datePart[datePartValue], value)
  }
  return new Date(updateValue('year'), updateValue('month'), updateValue('day'))
 })
}


argv
 .usage('Usage: $0 <command> [options]')
 .command('current', 'get current date', () => {}, (data) => console.log(getCurrentDate(data)))
 .command('add', 'get next date', () => {}, (data) => console.log(getOtherDate(data, '+')))
 .command('sub', 'get next date', () => {}, (data) => console.log(getOtherDate(data, '-')))
 .alias('y', 'year')
 .alias('m', 'month')
 .alias('d', 'date')
 .parse();
