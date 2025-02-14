const fs = require("node:fs");
const winston = require("winston");
function Test() {
    try {
        if (!fs.existsSync("poem.log")) {
            throw new Error("File does not exist! ");
        }

        const logger = winston.createLogger({
            level: "error",
            transports: [
                new winston.transports.File({
                    filename: "debug.log",
                }),
            ],
        });

        class ValidationError extends Error {
            constructor(message) {
                super(message);
                this.name = "ValidationError";
            }
        }

        logger.info("Server started");
        logger.error("Failed to connect to DB");

        function countWords(filename) {
            const data = fs.readFileSync(filename, "utf-8");
            const words = data.replace(/[^\w\s]/g, "").split(" ");
            console.log(words);
            return words.length;
        }
        console.log(countWords("poem.log"));
    } catch (error) {
        console.error("Error:", error.message);
    }
}
