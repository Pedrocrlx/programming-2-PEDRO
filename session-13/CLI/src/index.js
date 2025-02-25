import chalk from "chalk";
import { GetLogger } from "./logging.js";
import { Program } from "./program.js";
const logger = GetLogger("debug", "programa.log");

logger.info("Program started");
try {
    const [command, ...args] = process.argv.slice(2);

    let program = new Program(args);

    if (command.toString().toLowerCase() === "greet") {
        program.greet();
    } else {
        throw new Error("Comand not valid. ");
    }
} catch (exc) {
    logger.error(exc);
    console.error(chalk.red.bold(exc.message));
}
