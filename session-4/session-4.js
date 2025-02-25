const fs = require("fs");

try {
    /**
     * Checks if the input.csv file exists.
     * @throws {Error} If the file does not exist.
     */
    if (!fs.existsSync("input.csv")) {
        throw new Error("File does not exist, please create .csv file!");
    }

    /**
     * Reads data from the CSV file.
     * @type {string}
     */
    const csvData = fs.readFileSync("input.csv", "utf-8");

    /**
     * Splits the CSV data into rows.
     * @type {string[]}
     */
    const rows = csvData.split("\n");

    /**
     * Processes the CSV rows, ignoring the first row (header),
     * and maps the data to an array of objects.
     * @type {Object[]}
     * @property {string} name - The person's name.
     * @property {string} email - The person's email.
     * @property {number} age - The person's age.
     */
    const data = rows.slice(1).map((row) => {
        const values = row.split(",");

        // Checks if the age is a valid number
        const age = parseInt(values[2], 10);
        if (isNaN(age)) {
            return null; // Ignores rows with invalid age
        }

        return {
            name: values[0],
            email: values[1],
            age: age,
        };
    }).filter((item) => item !== null); // Removes null items

    // Logs the processed data
    console.log(data);

    /**
     * Writes the processed data to a JSON file.
     * @type {void}
     */
    fs.writeFileSync("output.json", JSON.stringify(data, null, 2));
} catch (error) {
    // Logs the error message to the console
    console.error("Error:", error.message);
}
