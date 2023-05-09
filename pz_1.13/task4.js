function Greetable(str) {
    this.str = str;
}

Greetable.prototype.greet = function(greeting) {
    return `${greeting}, ${this.str}!`;
}

function createGreetable(str) {
    return new Greetable(str);
}

const g = createGreetable('Dmutro');
console.log(g.greet('Hello')); // виведе "Hello, Oleg!" в консоль