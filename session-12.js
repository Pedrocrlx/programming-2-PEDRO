/* function* evenNumbers(array) {
    for (const even of array) {
        if (even % 2 == 0) {
            yield even;
        }
    }
}

const generator = evenNumbers([2, 4, 6, 8, 9]);

let count = 0;
for (const num of generator) {
    console.log(num);
    count++;
    if (count === 3) break; // Interrompe após 3 números pares
}
 */
//CHALLENGE

/* function* endStart(start, end) {
    for (let i = 0; i <= end; i++) {
        if (start <= end) {
            yield start;
        }
    }
}
const result = endStart(10, 20);

console.log(result.next().value);
 */
function* startEnd(start, end) {
    for (let i = start; i <= end; i++) {
        yield i;
    }
}

const challenge = startEnd(5, 10);

console.log([...challenge]);
