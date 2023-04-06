function removeDuplicates(arr) {
    return arr.filter((elem, index, self) => index === self.indexOf(elem));
}

let myArray = [1, 2, 2, 3, 3, 3, 4, 5, 5];
let uniqueArray = removeDuplicates(myArray);
console.log(uniqueArray);