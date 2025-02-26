import { displayHelp } from "./helpFlag.js";

test("Diplay flag when arg --help", () => {
    expect(displayHelp()).toBe(console.log("HELP"));
});