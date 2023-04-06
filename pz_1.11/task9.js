function reverseAndSquare(arr) {
    let result = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        if (typeof arr[i] === 'number') {
            result.push(arr[i] ** 2);
        } else {
            result.push(arr[i]);
        }
    }
    return result;
}
let arr = [1, 2, 3, "four", "five", 6];
let reversedAndSquared = reverseAndSquare(arr);
console.log(reversedAndSquared); // [36, "five", 16, 9, 4, 1]