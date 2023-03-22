let number = prompt("Введіть число від 1 до 7:");
if (!isNaN(number) && number >= 1 && number <= 7) {
    let day = "";
    switch (parseInt(number)) {
        case 1:
            day = "Неділя";
            break;
        case 2:
            day = "Понеділок";
            break;
        case 3:
            day = "Вівторок";
            break;
        case 4:
            day = "Середа";
            break;
        case 5:
            day = "Четвер";
            break;
        case 6:
            day = "П'ятниця";
            break;
        case 7:
            day = "Субота";
            break;
        default:
            break;
    }
    alert(`День тижня для числа ${number}: ${day}`);
} else {
    alert("Введене значення не є числом від 1 до 7");
}