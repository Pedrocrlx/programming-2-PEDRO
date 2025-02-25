/**
 * Adds two numbers.
 *
 * @param {number} n1 - The first number.
 * @param {number} n2 - The second number.
 * @returns {number} The sum of the two numbers.
 * @example
 * sum(1, 2); // Returns 3
 */
export function sum(n1, n2) {
    return n1 + n2;
}

/**
 * Calculates the average of two numbers.
 *
 * @param {number} n1 - The first number.
 * @param {number} n2 - The second number.
 * @returns {number} The average of the two numbers.
 * @example
 * average(1, 2); // Returns 1.5
 */
export function average(n1, n2) {
    return (n1 + n2) / 2;
}

/**
 * Calculates the median of an array of numbers.
 *
 * The median is the value that divides a sorted dataset into two equal parts:
 * - If the number of elements is **odd**, it returns the middle value.
 * - If the number of elements is **even**, it returns the average of the two middle values.
 *
 * @param {number[]} arr - The array of numbers to calculate the median from (cannot be empty).
 * @returns {number} The median of the provided array.
 * @throws {Error} If the array is empty.
 * @example
 * // Example with an odd number of elements
 * calcularMediana([5, 3, 1, 4, 2]); // Returns 3
 * @example
 * // Example with an even number of elements
 * calcularMediana([5, 3, 1, 4, 2, 6]); // Returns 3.5
 */
export function median(arr) {
    if (arr.length === 0) {
        throw new Error("The array cannot be empty.");
    }

    // Sort the array in ascending order (mutates the original array)
    arr.sort((a, b) => a - b);

    const middle = Math.floor(arr.length / 2);

    // Check if the number of elements is even or odd
    if (arr.length % 2 === 0) {
        return (arr[middle - 1] + arr[middle]) / 2;
    } else {
        return arr[middle];
    }
}