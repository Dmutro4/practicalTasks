class Random {
    static nextDouble(low, high) {
        return Math.random() * (high - low) + low;
    }

    static nextInt(low, high) {
        return Math.floor(Math.random() * (high - low) + low);
    }

    static nextElement(array) {
        return array[Math.floor(Math.random() * array.length)];
    }
}
const randomNum = Random.nextInt(1, 11); // випадкове число від 1 до 10
console.log(randomNum);
const fruits = ['apple', 'banana', 'orange', 'grape', 'kiwi'];
const randomFruit = Random.nextElement(fruits); // випадковий елемент масиву
console.log(randomFruit); // виведе випадковий фрукт в консоль