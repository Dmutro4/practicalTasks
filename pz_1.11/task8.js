function calculate(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    const average = sum / arr.length;
    console.log(`Середнє арифметичне: ${average}`);
}
const arr = [2, 4, 6, 8, 10];
calculate(arr); // виведе на екран "Середнє арифметичне: 6"