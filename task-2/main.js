let matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 1, 2, 3],
    [4, 5, 6, 7]
];
let r = 3;
let c = 2;
let arr2 = [];
for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
        arr2.push(matrix[i][j])
    }   
}
console.log(arr2.join(' '));
