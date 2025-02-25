
function flattening(n) {
    if (typeof n !== "object") {
        console.log(n.join("."), "->", n);
        return;
    }
    for (const key in n) {
        flattening(n[key], [n, key]);
    }
}

flattening(nested);

/* function fibonacci(n) {
    const memo = new Map();
    function fib(n) {
        if (n <= 1) return n;
        if (memo.has(n)) return memo.get(n);
        const result = fib(n - 1) + fib(n - 2);
        memo.set(n, result);
        return result;
    }
    return fib(n);
}

console.time("FIB: 1");
console.log(fibonacci(10));
console.timeEnd("FIB: 1");
console.time("FIB: 2");
console.log(fibonacci(20));
console.timeEnd("FIB: 2");
console.time("FIB: 3");
console.log(fibonacci(50));
console.timeEnd("FIB: 3"); */

function flattening(n) {
    if (typeof n !== "object") {
        console.log(n.join("."), "->", n);
        return;
    }
    for (const key in n) {
        flattening(n[key], [n, key]);
    }
}
const nested = {
    a: 1,
    b: { c: 2, d: { e: 3 } },
    f: [4, 5],
};

flattening(nested);

