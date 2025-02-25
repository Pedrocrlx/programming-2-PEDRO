console.time("Time complexity");
const n = 1_000_000;
for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
        console.log(i + j);
    }
}
console.timeEnd("Time complexity");
