function currentDateWithFormat() {
    let date = new Date()

    const dayOfWeekUA = ['Неділя', 'Понеділок', 'Вівторок', 'Середа', 'Четвер', 'П\'ятниця',
        'Субота'
    ]

    const months = ['Січеня', 'Лютого', 'Березеня', 'Квітеня', 'Травеня', 'Червеня',
        'Липеня', 'Серпеня', 'Вересеня', 'Жовтеня', 'Листопада', 'Груденя'
    ]

    return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}, ${dayOfWeekUA[date.getDay()]} , ${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()} року`
}

console.log(currentDateWithFormat())