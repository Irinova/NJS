const config = require('./config')
const readline = require('node:readline')
const { stdin: input, stdout: output } = require('node:process')

const rl = readline.createInterface({ input, output })

rl.question(`Input city: `, (input) => {
  input = input || 'Moscow'
  fetch(`http://api.weatherapi.com/v1/current.json?key=${config.API_KEY}&q=${input}&aqi=no`)
    .then(response => response.json())
    .then((json) => {
      let temp = json?.current?.temp_c?.toString() || ''
      const condition = json?.current?.condition?.text || ''
      let humidity = json?.current?.humidity?.toString() || ''
      temp += ' C°'
      humidity += ' %'
      console.log(`
+----------------------------------+---------+------------------------+----------------+
|City                              |Temp     |Condition               |Humidity        |
+----------------------------------+---------+------------------------+----------------+
|${input.padEnd(34, ' ')}|${temp.padEnd(9, ' ')}|${condition.padEnd(24, ' ')}|${humidity.padEnd(16, ' ')}|
+----------------------------------+---------+------------------------+----------------+
`)
    })
  rl.close()
})
