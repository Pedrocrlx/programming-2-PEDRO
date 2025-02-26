import chalk from "chalk";
/**
 * Displays the help message with instructions on how to use the script.
 */
export const displayHelp = () => {
    console.log(chalk.greenBright(`
Usage: node recipeFinderCLI.js <query> [options]
    `));
    console.log(chalk.redBright(`
Arguments: <query>    The ingredient or recipe query to search for.  `));

    console.log(chalk.yellowBright(` 
Options: 
    --help     Show this help message and exit.
    --save     Save the recipes to markdown files in a folder named after the query.
        `));
};
