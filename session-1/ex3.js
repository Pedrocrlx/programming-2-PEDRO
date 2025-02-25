const { __inflate } = require("node:zlib");

function twoSum() {
    const index = {}; // Object to save index as a KEY and numbers as VALUES. 
    const nums = [2, 5, 11, 15]
    const target = 26;
    let solved = null;

    // Loop through the array and create a hash map with index as a KEY and numbers as VALUES.
    for (let i = 0; i < nums.length; i++) {

        const findIndex = target - nums[i];
        if (findIndex in index) {
            console.info([index[findIndex], i]);
        }
        index[nums[i]] = i;
        for (let s = 0; s < i; s++) {
            if (nums[i] + nums[s] === target) {
                solved = nums[s] + nums[i];
            }
        }
    }

    // If solved dont have any solution will return null.
    // console.info(solved);

    // But i dont want null :)
    if (solved === null) {
        console.info("For this target dont have a solution! ");
    }
}

twoSum() 