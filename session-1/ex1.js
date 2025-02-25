/* Write a function findDuplicates(arr) that returns an array of duplicate elements. */

const arr = [1,5,5,1,2,3,4,4];
const duplicateArray = [];

function findDuplicates(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < i; j++) {
            if (arr[i] === arr[j]) {
                duplicateArray.push(arr[i]);
            }
        }
    } return console.log("duplicateArray -> " + duplicateArray + " Non duplicate array -> " + arr);
}
findDuplicates(arr);