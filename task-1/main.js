    let matrix = [
        [4, -2, 5],
        [1, -4, -12],
        [0, 1, -3]
    ]
    let count = 0;
    let sum = 0;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix.length; j++) {
            if (matrix[i][j] < 0) { 
                if (matrix[i][j]%2==0) {
                sum += matrix[i][j];   
                count++;
                }
            }
        }    
    }
    console.log(sum);
    console.log(count);
