// Chapter 1 Projects
// 1). Looping a triangle
let triangleCount = '';

while (triangleCount.length < 7) {
    console.log(triangleCount);
    triangleCount = triangleCount + '#';
}

// 2). FizzBuzz
let fizzCount = '';

for (let i = 1; i <= 100; i++) {
    fizzCount = ((i % 3 === 0 ? 'Fizz' : '') + (i % 5 === 0 ? 'Buzz' : '') || i)
    console.log(fizzCount);
}
