// Chapter 4 Projects
// 1). The Sum of a Range
// function range(start, end, step) {
//     const arr = [];

//     while(start <= end) {
//         arr.push(start);
//         start+=step;
//     }
//     console.log(arr);
// }

// range(1, 10, 3);

// function sum(arr) {
//     let summed = 0;

//     arr.forEach(element => {
//         summed += element;
//     });
    
//     console.log(summed);
// }

// sum([1,2,4,3,10]);

// 2). Reversing an Array

function reverseArray(arr) {
    let newArray = [];
    for (var i = arr.length - 1; i >= 0; i--) {
      newArray.push(arr[i]);
    }
    return newArray;
  }

reverseArray([1,3,3,7]);

// const arr = ["1", "2", "3", "4", "5"];

// const total = arr.reduceRight((prev, cur) => {
//     return prev + cur;
// });

// console.log(total);
