/**
 * Truncates a string to a specified length and adds ellipsis if necessary.
 * @param {string} str - The string to truncate.
 * @param {number} maxLength - The maximum length of the string.
 * @returns {string} The truncated string.
 */
export const truncateString = (str, maxLength) => {
    return str.length > maxLength
        ? `${str.substring(0, maxLength - 3)}...`
        : str;
};
