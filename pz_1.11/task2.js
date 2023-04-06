function findUnique(arr) {
    let uniqueNum = arr[0];
    for (let i = 1; i < arr.length; i++) {
        uniqueNum ^= arr[i];
    }
    return uniqueNum;
}

// Приклад виклику функції
const arr = [2, 4, 2, 3, 4];
console.log(findUnique(arr));