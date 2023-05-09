function numberToObject(number) {
    if (number > 9999 || isNaN(number)) {
        return {}
    } else {
        let numberInString = number.toString()
        let arrayOfDischarges = ['одиниці', 'десятки', 'сотні', 'тисячі']
        let numberToObject = { 'одиниці': 0, 'десятки': 0, 'сотні': 0, 'тисячі': 0 }

        let index = 0;
        for (let i = numberInString.length - 1; i >= 0; i--) {
            numberToObject[arrayOfDischarges[index]] = Number.parseInt(numberInString[i])

            index++;
        }

        return numberToObject
    }
}

console.log(numberToObject(2101))