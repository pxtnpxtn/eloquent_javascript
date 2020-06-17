// Chapter 2 Projects
// 1). Looping a triangle
let triangleCount = '';

while (triangleCount.length < 6) {
    triangleCount = triangleCount + '#';
    console.log(triangleCount);
}

// console.log('========================================');

// 2). FizzBuzz
let fizzCount = '';

for (let i = 1; i <= 100; i++) {
    fizzCount = ((i % 3 === 0 ? 'Fizz' : '') + (i % 5 === 0 ? 'Buzz' : '') || i)
    console.log(fizzCount);
}

// console.log('========================================');

// 3). Chessboard
function chessboard(size){
    let board = "";
    
    for(y = 0; y < size; y++) {
        for(x = 0; x <= size; x++){
          if ((x + y) % 2 == 0){
            board += ' ';
          } else{
            board += '#';
          }
        }
        board += '\n';
    }
    console.log(board);
}

chessboard(10);

// Closure Example
function multiplier(factor) {
    return number => number * factor;
}

let twice = multiplier(2);
console.log(twice(5));