function changeDiagonalElements(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        if (matrix[i][i] < 0) {
            matrix[i][i] = 0;
        } else {
            matrix[i][i] = 1;
        }
    }
    return matrix;
}
const arr = [
    [1, 2, -3],
    [4, -5, 6],
    [-7, 8, 9]
];
console.log(changeDiagonalElements(arr));
[
    [1, 2, 0],
    [4, 0, 6],
    [0, 8, 1]
]