// Функція додавання
function Add(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Both arguments must be numbers');
    }
    return a + b;
}

// Функція віднімання
function Sub(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Both arguments must be numbers');
    }
    return a - b;
}

// Функція множення
function Mul(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Both arguments must be numbers');
    }
    return a * b;
}

// Функція ділення
function Div(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Both arguments must be numbers');
    }
    if (b === 0) {
        throw new Error('Division by zero');
    }
    return a / b;
}

// Функція для обробки значень з використанням відповідної операції
function Calc(a, b, operation) {
    return operation(a, b);
}

// Приклад виклику функції Calc:
const a = 5;
const b = 3;
const operation = Mul;
const result = Calc(a, b, operation);
console.log(result); // 15