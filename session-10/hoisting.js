console.log(hoistedVar);
const hoistedVar = "I'm hoisted!";

hoistedFunc(); 
function hoistedFunc() {
    const hoistedVar = "I'm jorge!";
    return console.log(hoistedVar);
} 
