function* evenNumbers(array) {
    for (const even of array) {
        if (even % 2 == 0) {
            yield even;
        }
    }
}

const generator = evenNumbers([2, 4, 6, 8, 9]);

//PRINTING THE FIRST 3 EVEN NUMBERS
let count = 0;
for (const num of generator) {
    console.log(num);
    count++;
    if (count === 3) break; // after 3 even numbers stop
}

//CHALLENGE
function* startEnd(start, end) {
    for (let i = start; i <= end; i++) {
        yield i;
    }
}

const challenge = startEnd(5, 10);

console.log("CHALLENGE -------  " + [...challenge]);
