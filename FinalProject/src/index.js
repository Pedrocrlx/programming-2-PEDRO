import process from "node:process";
import fs from "node:fs";
import { fetchRecipes } from "./recipes.js";

/**
 * Creates a directory or throws an error if the directory already exists.
 * @param {string} directory - The name of the directory to create.
 * @throws {Error} Throws an error if the directory already exists.
 */
const createDirectoryOrThrow = (directory) => {
    if (fs.existsSync(directory)) {
        throw new Error(
            `Directory ${directory} already exists. Please use a different name or remove the existing directory.`,
        );
    }
    fs.mkdirSync(directory, { recursive: true });
};

/**
 * Truncates a string to a specified length and adds ellipsis if necessary.
 * @param {string} str - The string to truncate.
 * @param {number} maxLength - The maximum length of the string.
 * @returns {string} The truncated string.
 */
const truncateString = (str, maxLength) => {
    return str.length > maxLength
        ? `${str.substring(0, maxLength - 3)}...`
        : str;
};

/**
 * The main function that fetches and displays recipes based on user input.
 * If the `--save` flag is provided, it saves the recipes to markdown files in a folder named after the query.
 * @async
 * @function main
 * @returns {Promise<void>} A promise that resolves when the function completes.
 */
const main = async () => {
    const query = process.argv[2];
    const saveFlag = process.argv.includes("--save");

    if (!query) {
        console.log("Please provide an ingredient or recipe query.");
        return;
    }

    console.log(`Searching for recipes with: ${query}`);
    const recipesData = await fetchRecipes(query);
    if (recipesData) {
        const recipesTable = recipesData.results.map((recipe, index) => ({
            Recipe: index + 1,
            Name: truncateString(recipe.name, 50),
            Description: truncateString(recipe.description, 70),
        }));
        console.table(recipesTable);

        if (saveFlag) {
            const baseDirectory = `savedRecipes/${query}`;
            try {
                createDirectoryOrThrow(baseDirectory);
                recipesData.results.forEach((recipe, index) => {
                    const recipeMarkdown = `# Recipe ${
                        index + 1
                    }\n\n**Name**: ${recipe.name}\n\n**Description**: ${recipe.description}\n`;
                    fs.writeFileSync(
                        `${baseDirectory}/Recipe_${index + 1}.md`,
                        recipeMarkdown,
                    );
                    console.log(
                        `Recipe ${index + 1} saved to ${baseDirectory}/Recipe_${
                            index + 1
                        }.md`,
                    );
                });
            } catch (error) {
                console.error(error.message);
                return;
            }
        }
    } else {
        console.log("Failed to find recipes");
    }
};

main();
