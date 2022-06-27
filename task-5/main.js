const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
    let arr = parseInt(result.input.split(',')[0].split(' '));
    let matrix = [];
    for (let i = 0; i < arr; i++) {
       matrix.push(new Array(arr).fill('*'));
    }
    for (let item of matrix) {
        console.log(item.join(' '));
    }
  
});
