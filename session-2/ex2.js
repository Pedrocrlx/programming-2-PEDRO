const brute = [2, 3, 1, 4, 5];

function findSorted(array) {
    array.sort();
    for (let i = 0; i < array.lenght; i++) {
        let lastElement = array[i];
        console.log(lastElement);
    }
    return console.log(array);
}
findSorted(brute);

function findMaximum(array) {
    const maxValue = array.reduce((a, b) => Math.max(a, b), -Infinity);
    return console.log(maxValue);
}
findMaximum(brute);
