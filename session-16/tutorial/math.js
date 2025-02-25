export function sum(n1, n2) {
    if (isNaN(n1) && isNaN(n2)) throw new Error ("Arguments must be numbers");
    return n1 + n2;
}
