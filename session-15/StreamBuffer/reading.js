import * as fs from "node:fs";
import { createReadStream } from "node:fs";
import { createInterface } from "node:readline";

async function processLineByLine() {
    const stream = createReadStream("lunaData.csv", "utf-8");
    const rl = createInterface({
        input: stream,
        crlfDelay: Infinity,
    });
    // Note: we use the crlfDelay option to recognize all instances of CR LF
    // ('\r\n') in input.txt as a single line break.

    for await (const line of rl) {
        // Each line in input.txt will be successively available here as `line`.
        stream.on(
            "data",
            (chunk) => console.log(`Chunk: ${chunk.length}`),
        );
        fs.writeFileSync("countData.json", JSON.stringify(line)),
            console.log(`${line}`);
    }
}

processLineByLine();
