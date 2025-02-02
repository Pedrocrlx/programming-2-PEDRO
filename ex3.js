const { inflate } = require("zlib");

/* Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
*/
function twoSum() {
    let index = {}; // Object to save index as a KEY and numbers as VALUES. 
    const nums = [2, 5, 11, 15]
    const target = 26;
    let solved = null;

    // Loop through the array and create a hash map with index as a KEY and numbers as VALUES.
    for (let i = 0; i < nums.length; i++) {

        let findIndex = target - nums[i];
        if (findIndex in index) {
            console.info([index[findIndex], i]);
        }
        index[nums[i]] = i;
        for (let s = 0; s < i; s++) {
            if (nums[i] + nums[s] === target) {
                solved = nums[s] + nums[i];
                console.info(`${nums[s]}` + " + " + `${nums[i]}` + ' = ' + solved);
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