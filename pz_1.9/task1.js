//#1
var num = 2;
while (num <= 100) {
    var isPrime = true;
    var i = 2;
    while (i <= Math.sqrt(num)) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
        i++;
    }
    if (isPrime) {
        console.log(num);
    }
    num++;
}