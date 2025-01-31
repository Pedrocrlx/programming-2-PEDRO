/* Write a function findDuplicates(arr) that returns an array of duplicate elements. */

const arr = [1, 2, 3, 3, 5];
let duplicateArray = [];

function findDuplicates(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                if (!duplicateArray.includes(arr[i])) {
                    duplicateArray.push(arr[i]);
                }
            }
        }
    } return console.log(duplicateArray);
} 

function Test(arr) {
    console.log(arr.length);
}
Test(arr)
findDuplicates();