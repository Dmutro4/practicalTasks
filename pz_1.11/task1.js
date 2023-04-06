function primeNumber() {
    let myArray = [];
    let num = 0;
    let n = prompt("Введіть число: ");
    for (; n > 0; n--) {
        myArray.push(n);
        num++;
    }

    return document.write("n = " + num + " ==> [" + myArray + " ]");
}
// document.write(primeNumber());
primeNumber();