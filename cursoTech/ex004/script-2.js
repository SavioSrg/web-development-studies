//LUXON
const {DateTime, Interval} = require('luxon')

const agora = DateTime.now()
console.log(agora.month)
console.log(new Date().getMonth())
console.log(new Date().toLocaleString('en-US'))

//biblioteca do JS
console.log(new Date().getMonth())

const dataDoAniversario = DateTime.fromFormat('01/02/1998', 'dd/MM/yyyy')
console.log(dataDoAniversario)

const idade = Interval.fromDateTimes(dataDoAniversario, agora).length('year')
console.log(Math.floor(idade) + ' anos')

const iSODate = '2020-11-19T21:22:00-0300'
const RFC = 'Thu, 19 Nov 2020 21:22:00 -0300'

console.log(DateTime.fromISO(iSODate).toLocaleString())
console.log(DateTime.fromRFC2822(RFC).toLocaleString())