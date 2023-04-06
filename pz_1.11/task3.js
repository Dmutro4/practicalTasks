function simplifyAndSortArray(arr) {
    // розгортаємо масив в одномірний
    const flatArr = arr.flat();

    // сортуємо масив
    const sortedArr = flatArr.sort((a, b) => a - b);

    // повертаємо результат
    return sortedArr;
}

// Приклад виклику функції:
const arr = [
    [3, 2, 1],
    [6, 5, 4]
];
const simplifiedAndSortedArr = simplifyAndSortArray(arr);
console.log(simplifiedAndSortedArr); // [1, 2, 3, 4, 5, 6]