let readline = require('readline-sync');

function printAnswer(attempt, number, message) {
    let date = new Date()

    return `${date.getDate()}.${date.getMonth()}.${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} Спроба ${attempt} : число ${number} - ${message}`
}

let randomNumber = Math.floor((Math.random() * 100) + 1);

console.log(randomNumber)

let counter = 10

console.log('Now you play a game, your task try to guess a number (0 - 100)')

while (counter !== 0) {
    let selectedNumber = parseInt(readline.question('Enter your number : '))

    if (selectedNumber === randomNumber) {
        console.log(printAnswer(10 - counter, selectedNumber, 'Ви виграли!!'))
        break;
    }

    let difference = Math.abs(randomNumber - selectedNumber)

    if (difference >= 50) {
        console.log(printAnswer((10 - counter) + 1, selectedNumber, 'не вірно'))
        console.log('дуже холодно ( різниця >= 50 )')
    }
    if (difference < 50 && difference > 40) {
        console.log(printAnswer((10 - counter) + 1, selectedNumber, 'не вірно'))
        console.log('холодно ( різниця 50 < && > 40)')
    }
    if (difference < 40 && difference > 30) {
        console.log(printAnswer((10 - counter) + 1, selectedNumber, 'не вірно'))
        console.log('холодніше ( різниця 40 < && > 30)')
    }
    if (difference < 30 && difference > 20) {
        console.log(printAnswer((10 - counter) + 1, selectedNumber, 'не вірно'))
        console.log('тепліше ( різниця 30 < && > 20)')
    }
    if (difference < 20 && difference > 5) {
        console.log(printAnswer((10 - counter) + 1, selectedNumber, 'не вірно'))
        console.log('гаряче ( різниця 20 < && > 5)')
    }
    if (difference <= 5) {
        console.log(printAnswer((10 - counter) + 1, selectedNumber, 'не вірно'))
        console.log('дуже гаряче ( різниця < 5)')
    }

    counter--
}

if (counter === 0) {
    console.log('Ви програли')
}