function analyzeNumber(num) {
    const result = {};


    if (num > 0) {
        result.positive = true;
        result.negative = false;
    } else if (num < 0) {
        result.positive = false;
        result.negative = true;
    } else {
        result.positive = false;
        result.negative = false;
    }


    if (num <= 1) {
        result.prime = false;
    } else {
        let isPrime = true;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }
        result.prime = isPrime;
    }


    result.divisibleBy2 = num % 2 === 0;
    result.divisibleBy5 = num % 5 === 0;
    result.divisibleBy3 = num % 3 === 0;
    result.divisibleBy6 = num % 6 === 0;
    result.divisibleBy9 = num % 9 === 0;

    return result;
}

// Приклад виклику функції
const num = 123;
const result = analyzeNumber(num);
console.log(result);
// { positive: true, negative: false, prime: false, divisibleBy2: false, divisibleBy5: false, divisibleBy3: true, divisibleBy6: false, divisibleBy9: false }