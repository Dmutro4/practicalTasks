const languageQuestion = 'Виберіть мову "ua" або "en"?';
const dayOfWeekQuestion = {
    'ua': 'Введіть номер дня неділі від 1 до 7?',
    'en': 'Enter the day number of the week (from 1 to 7)?'
};
const daysOfWeek = {
    'ua': ['Неділя', 'Понеділок', 'Вівторок', 'Середа', 'Четвер', 'П’ятниця', 'Субота'],
    'en': ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
};

async function getLanguage() {
    let language = '';
    while (language !== 'ua' && language !== 'en') {
        language = prompt(languageQuestion).toLowerCase();
        if (language !== 'ua' && language !== 'en') {
            alert('Помилка: неправильне значення мови. Будь ласка, введіть "ua" або "en".');
        }
    }
    return language;
}

async function getDayOfWeek(language) {
    let dayOfWeek = 0;
    while (dayOfWeek < 1 || dayOfWeek > 7) {
        dayOfWeek = Number(prompt(dayOfWeekQuestion[language]));
        if (dayOfWeek < 1 || dayOfWeek > 7) {
            alert(`Помилка: неправильне значення дня тижня. Будь ласка, введіть число від 1 до 7.`);
        }
    }
    return dayOfWeek;
}

async function main() {
    const language = await getLanguage();
    const dayOfWeek = await getDayOfWeek(language);
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = daysOfWeek[language][dayOfWeek - 1];
}

main();