function count(obj) {
    let count = 0;
    for (let prop in obj) {
        if (obj.hasOwnProperty(prop)) {
            count++;
        }
    }
    return count;
}
let a = { a: 78, b: 67, c: 34 };
console.log(count(a));