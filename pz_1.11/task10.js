function perimeter(side, count) {
    if (count < 3) { // якщо кількість сторін менше трьох, багатокутник не може бути правильним
        return "Помилка: кількість сторін повинна бути більше двох.";
    }
    return count * side; // повертаємо периметр правильного багатокутника
}
console.log(perimeter(5, 4)); // виведе 20