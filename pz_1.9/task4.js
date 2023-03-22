var rows = prompt("Введіть кількість рядків: ");

for (var i = 1; i <= rows; i++) {
    var row = "";
    for (var j = 1; j <= i; j++) {
        row += "* ";
    }
    console.log(row);
}
var rows = prompt("Введіть кількість рядків: ");

for (var i = 1; i <= rows; i++) {
    var row = "";
    for (var j = 1; j <= rows - i; j++) {
        row += " ";
    }
    for (var k = 1; k <= 2 * i - 1; k++) {
        row += "*";
    }
    console.log(row);
}
var rows = prompt("Введіть кількість рядків: ");

for (var i = 1; i <= rows; i++) {
    var row = "";
    for (var j = 1; j <= rows - i; j++) {
        row += " ";
    }
    for (var k = 1; k <= 2 * i - 1; k++) {
        row += "*";
    }
    console.log(row);
}

for (var i = rows - 1; i >= 1; i--) {
    var row = "";
    for (var j = 1; j <= rows - i; j++) {
        row += " ";
    }
    for (var k = 1; k <= 2 * i - 1; k++) {
        row += "*";
    }
    console.log(row);
}