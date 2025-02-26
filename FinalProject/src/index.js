import process from "node:process";
import fs from "node:fs";
import { fetchRecipes } from "./fetchRecipes.js";
import { displayHelp } from "./helpFlag.js";
import { truncateString } from "./truncateString.js";
import { createDirectoryOrThrow } from "./createDirectory.js";

/**
 * The main function that fetches and displays recipes based on user input.
 * If the `--save` flag is provided, it saves the recipes to markdown files in a folder named after the query.
 * @async
 * @function main
 * @constant saveFlag --save argument to save recipe.
 * @constant helpFlag --help argument to help.
 * @returns {Promise<void>} A promise that resolves when the function completes.
 */
const main = async () => {
    const query = process.argv[2];
    const saveFlag = process.argv.includes("--save");
    const helpFlag = process.argv.includes("--help");

    if (!query) {
        console.log("Please provide an ingredient or recipe query.");
    }

    if (query) console.log(`Searching for recipes with: ${query}`);

    const recipesData = await fetchRecipes(query);

    if (helpFlag) {
        displayHelp();
        return;
    }

    if (recipesData) {
        const recipesTable = recipesData.results.map((recipe, index) => ({
            Recipe: index + 1,
            Name: truncateString(recipe.name, 50),
            Description: truncateString(recipe.description, 110),
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
                });
                console.log(`All recipes saved to ${baseDirectory}`);
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
