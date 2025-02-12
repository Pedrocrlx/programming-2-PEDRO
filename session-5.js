<<<<<<< HEAD
const users = [
    { id: 1, name: 'Alice', city: 'Paris' },
    { id: 2, name: 'Bob', city: 'London' },
    { id: 3, name: 'Charlie', city: 'Paris' }
];
const userMap = new Map();


userMap.set(users);

userMap.forEach((value, key) => {
    console.log(`${key}` + `${value}`);
});



=======
function deepEqual(obj1, obj2) {
    if (typeof obj1 !== "object" || typeof obj2 !== "object") {
        return obj1 === obj2;
    }
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    if (keys1.length !== keys2.length) return false;
    return keys1.every((key) => deepEqual(obj1[key], obj2[key]));
}

const users = [
    { id: 1, name: "Alice", city: "Paris" },
    { id: 2, name: "Bob", city: "London" },
    { id: 3, name: "Charlie", city: "Paris" },
];

/*console.log(users[0].city); */
const data = new Map();

/* for (let i = 0; i < users.length; i++) {
    data.set(users.keys, users.value);
} */

users.forEach((key, value) => data.set(`${key}`, `${value}`));

console.log(users);
>>>>>>> 8c45176 (session 6)
