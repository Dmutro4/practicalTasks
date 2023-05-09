function pluck(arr, property) {
    return arr.map(obj => obj[property]);
}

let characters = [
    { name: "barney", age: 36 },
    { name: "fred", age: 40 }
];

console.log(pluck(characters, "age")); // ['barney', 'fred'];