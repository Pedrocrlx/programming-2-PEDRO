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



