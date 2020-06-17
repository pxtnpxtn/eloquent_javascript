// Chapter 3 Projects
// 1). Minimum - Write function that returns the lowest of two numbers.

function min(num1, num2) {
    return num1 <= num2 ? num1 : num2;
}

console.log('minimum: ', min(9, 5));

// // 2). Recursion - Write a recursive function that checks if a number is odd or even.
function isEven(num) {
    num = Math.abs(num);

    // Less readable multi-ternary one-liner
    // return num === 0 ? true : num === 1 ? false : isEven(num - 2);

    // More readable, longer
    if (num === 0)
        return true;
    else if (num === 1)
        return false;
    else
        return isEven(num - 2);
};

console.log('isEven: ', isEven(50));

// 3). Bean Counting
function countBs(word) {
    let numberOfBs = 0;

    for(let i = 0; i < word.length; i++) {
        if (word[i] === 'B') {
            numberOfBs++;
        }
    }

    return numberOfBs;
}

console.log('countBs: ', countBs('numBerBbB'));

function countChar(str, character) {
    let matchExp = new RegExp(character, 'g'); // g is for global search, meaning it will find all matches rather than stopping after the first match

    return str.match(matchExp).length;
}

console.log('countChar: ', countChar('somethiing', 'i'));