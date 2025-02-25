import { sum } from "./math.js";

test("false + jorge = Error()", () => {
    expect(()=>(sum(false, "jorge")).toThrow(Error));
});


