// Отримання значення місяця з модального вікна prompt
const month = parseInt(prompt("Введіть номер місяця (від 1 до 12)"));

// Перевірка чи введене значення є числом і чи воно знаходиться в діапазоні від 1 до 12
if (!isNaN(month) && month >= 1 && month <= 12) {
    let season, monthName;

    // Визначення пори року та назви місяця
    switch (month) {
        case 12:
        case 1:
        case 2:
            season = "зима";
            break;
        case 3:
        case 4:
        case 5:
            season = "весна";
            break;
        case 6:
        case 7:
        case 8:
            season = "літо";
            break;
        default:
            season = "осінь";
            break;
    }

    switch (month) {
        case 1:
            monthName = "Січень";
            break;
        case 2:
            monthName = "Лютий";
            break;
        case 3:
            monthName = "Березень";
            break;
        case 4:
            monthName = "Квітень";
            break;
        case 5:
            monthName = "Травень";
            break;
        case 6:
            monthName = "Червень";
            break;
        case 7:
            monthName = "Липень";
            break;
        case 8:
            monthName = "Серпень";
            break;
        case 9:
            monthName = "Вересень";
            break;
        case 10:
            monthName = "Жовтень";
            break;
        case 11:
            monthName = "Листопад";
            break;
        default:
            monthName = "Грудень";
            break;
    }

    // Виведення результату в модальному вікні alert
    alert(`Місяць ${monthName} належить до пори року ${season}`);
} else {
    alert("Ви ввели неправильне значення місяця!");
}